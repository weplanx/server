package api

import (
	"context"
	"fmt"
	"github.com/kainonly/accelerate/common"
	"github.com/kainonly/accelerate/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"net/http"
	"sync"
	"time"
)

type API struct {
	*common.Inject
}

func (x *API) EventInvoke(w http.ResponseWriter, req *http.Request) {
	if req.Method != "POST" {
		return
	}

	fmt.Println("开始同步镜像")
	ctx := req.Context()
	if err := x.Fetch(ctx); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte(fmt.Sprintf(`已同步: %s`, time.Now())))
}

func (x *API) Fetch(ctx context.Context) (err error) {
	var cursor *mongo.Cursor
	if cursor, err = x.Db.Collection("mirrors").Find(ctx, bson.M{"status": true}); err != nil {
		return
	}
	tasks := make([]model.AccelerationTask, 0)
	if err = cursor.All(ctx, &tasks); err != nil {
		return
	}
	var wg *sync.WaitGroup
	wg.Add(len(tasks))
	for _, v := range tasks {
		go x.Sync(ctx, v.Source, v.Target, wg)
	}
	wg.Wait()
	return
}

func (x *API) Sync(ctx context.Context, source string, target string, wg *sync.WaitGroup) (err error) {
	client := http.DefaultClient
	var req *http.Request
	if req, err = http.NewRequest("GET", source, nil); err != nil {
		return
	}
	var resp *http.Response
	if resp, err = client.Do(req.WithContext(ctx)); err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	if _, err = x.Client.Object.Put(ctx, target, resp.Body, nil); err != nil {
		return
	}
	wg.Done()
	return
}
