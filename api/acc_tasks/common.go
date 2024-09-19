package acc_tasks

import (
	"github.com/google/wire"
	"server/api/tencent"
	"server/common"
)

var Provides = wire.NewSet(
	wire.Struct(new(Controller), "*"),
	wire.Struct(new(Service), "*"),
)

type Controller struct {
	AccTasksX *Service
}

type Service struct {
	*common.Inject
	TencentX *tencent.Service
}

type M = map[string]interface{}
