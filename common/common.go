package common

import (
	"github.com/tencentyun/cos-go-sdk-v5"
)

type Inject struct {
	V      *Values
	Client *cos.Client
}

type Values struct {
	Address string `env:"ADDRESS" envDefault:":9000"`
	Webhook string `env:"WEBHOOK,required"`
	Cos     Cos    `envPrefix:"COS_"`
}

type Cos struct {
	Bucket    string `env:"BUCKET"`
	Region    string `env:"REGION"`
	SecretId  string `env:"SECRETID"`
	SecretKey string `env:"SECRETKEY"`
}
