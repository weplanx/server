package monitor_test

import (
	"context"
	"os"
	"server/api"
	"server/bootstrap"
	"server/common"
	"testing"
	"time"
)

var x *api.API

func TestMain(m *testing.M) {
	os.Chdir("../../")
	var err error
	var values *common.Values
	if values, err = bootstrap.LoadStaticValues("./config/default.values.yml"); err != nil {
		panic(err)
	}
	x, err = bootstrap.NewAPI(values)
	if err != nil {
		panic(err)
	}
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()
	if _, err = x.Initialize(ctx); err != nil {
		panic(err)
	}
	os.Exit(m.Run())
}
