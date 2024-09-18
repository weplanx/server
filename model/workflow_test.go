package model_test

import (
	"context"
	"github.com/stretchr/testify/assert"
	"server/model"
	"testing"
)

func TestSetWorkflows(t *testing.T) {
	ctx := context.TODO()
	err := model.SetWorkflows(ctx, x.Db)
	assert.NoError(t, err)
}
