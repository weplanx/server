package bootstrap

import (
	"context"
	"fmt"
	"github.com/caarlos0/env/v9"
	"github.com/google/wire"
	"github.com/kainonly/accelerate/common"
	"github.com/tencentyun/cos-go-sdk-v5"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/writeconcern"
	"net/http"
	"net/url"
	"time"
)

var Provides = wire.NewSet(
	LoadValues,
	UseMongoDB,
	UseDatabase,
	UseCos,
)

func LoadValues() (values *common.Values, err error) {
	values = new(common.Values)
	if err = env.Parse(values); err != nil {
		return
	}
	return
}

func UseMongoDB(values *common.Values) (*mongo.Client, error) {
	return mongo.Connect(
		context.TODO(),
		options.Client().ApplyURI(values.Database.Host),
	)
}

func UseDatabase(client *mongo.Client, values *common.Values) (db *mongo.Database) {
	option := options.Database().
		SetWriteConcern(writeconcern.Majority())
	return client.Database(values.Database.Name, option)
}

func UseCos(values *common.Values) *cos.Client {
	u, _ := url.Parse(fmt.Sprintf(`https://%s.cos.%s.myqcloud.com`, values.Cos.Bucket, values.Cos.Region))
	return cos.NewClient(&cos.BaseURL{BucketURL: u}, &http.Client{
		Timeout: 100 * time.Second,
		Transport: &cos.AuthorizationTransport{
			SecretID:  values.Cos.SecretId,
			SecretKey: values.Cos.SecretKey,
		},
	})
}
