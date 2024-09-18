package model_test

import (
	"os"
	"server/api"
	"server/bootstrap"
	"testing"
)

var x *api.API

func TestMain(m *testing.M) {
	os.Chdir("../")
	values, err := bootstrap.LoadStaticValues("./config/default.values.yml")
	if err != nil {
		panic(err)
	}
	if x, err = bootstrap.NewAPI(values); err != nil {
		panic(err)
	}

	os.Exit(m.Run())
}
