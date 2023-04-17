package bootstrap

import (
	"context"
	"fmt"
	"github.com/caarlos0/env/v6"
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

// LoadValues 加载配置
func LoadValues() (values *common.Values, err error) {
	values = new(common.Values)
	if err = env.Parse(values); err != nil {
		return
	}
	return
}

// UseMongoDB 初始化 MongoDB
// 配置文档 https://www.mongodb.com/docs/drivers/go/current/
// https://pkg.go.dev/go.mongodb.org/mongo-driver/mongo
func UseMongoDB(values *common.Values) (*mongo.Client, error) {
	return mongo.Connect(
		context.TODO(),
		options.Client().ApplyURI(values.Database.Uri),
	)
}

// UseDatabase 初始化数据库
// 配置文档 https://www.mongodb.com/docs/drivers/go/current/
// https://pkg.go.dev/go.mongodb.org/mongo-driver/mongo
func UseDatabase(client *mongo.Client, values *common.Values) (db *mongo.Database) {
	option := options.Database().
		SetWriteConcern(writeconcern.New(writeconcern.WMajority()))
	return client.Database(values.Database.DbName, option)
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
