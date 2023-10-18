package bootstrap

import (
	"fmt"
	"github.com/caarlos0/env/v9"
	"github.com/google/wire"
	"github.com/kainonly/accelerate/common"
	"github.com/tencentyun/cos-go-sdk-v5"
	"net/http"
	"net/url"
	"time"
)

var Provides = wire.NewSet(
	LoadValues,
	UseCos,
)

func LoadValues() (values *common.Values, err error) {
	values = new(common.Values)
	if err = env.Parse(values); err != nil {
		return
	}
	return
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
