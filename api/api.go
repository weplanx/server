package api

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/kainonly/accelerate/common"
	"github.com/panjf2000/ants/v2"
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

type Task struct {
	Source string `json:"source"`
	Target string `json:"target"`
}

func (x *API) Fetch(ctx context.Context) (err error) {
	var resp *http.Response
	if resp, err = http.Get(x.V.Webhook); err != nil {
		return
	}
	var tasks []Task
	if err = json.NewDecoder(resp.Body).Decode(&tasks); err != nil {
		return
	}
	var wg sync.WaitGroup
	wg.Add(len(tasks))
	p, _ := ants.NewPoolWithFunc(1000, func(i interface{}) {
		if err = x.Sync(ctx, i.(Task)); err != nil {
			panic(err)
		}
		wg.Done()
	})
	defer p.Release()
	for _, v := range tasks {
		if err = p.Invoke(v); err != nil {
			return
		}
	}
	wg.Wait()
	return
}

func (x *API) Sync(ctx context.Context, task Task) (err error) {
	client := http.DefaultClient
	var req *http.Request
	if req, err = http.NewRequest("GET", task.Source, nil); err != nil {
		return
	}
	var resp *http.Response
	if resp, err = client.Do(req.WithContext(ctx)); err != nil {
		return
	}
	defer resp.Body.Close()
	if _, err = x.Client.Object.Put(ctx, task.Target, resp.Body, nil); err != nil {
		return
	}
	return
}
