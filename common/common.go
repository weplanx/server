package common

import (
	"github.com/tencentyun/cos-go-sdk-v5"
	"go.mongodb.org/mongo-driver/mongo"
)

type Inject struct {
	Values      *Values
	MongoClient *mongo.Client
	Db          *mongo.Database
	Client      *cos.Client
}

type Values struct {
	Address  string   `env:"ADDRESS" envDefault:":9000"`
	Database Database `envPrefix:"DATABASE_"`
	Cos      Cos      `envPrefix:"COS_"`
}

type Database struct {
	Host string `env:"HOST"`
	Name string `env:"NAME"`
}

type Cos struct {
	Bucket    string `env:"BUCKET"`
	Region    string `env:"REGION"`
	SecretId  string `env:"SECRETID"`
	SecretKey string `env:"SECRETKEY"`
}
