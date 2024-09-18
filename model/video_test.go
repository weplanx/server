package model_test

import (
	"context"
	"github.com/stretchr/testify/assert"
	"server/model"
	"testing"
)

func TestSetVideos(t *testing.T) {
	ctx := context.TODO()
	err := model.SetVideos(ctx, x.Db)
	assert.NoError(t, err)
}
