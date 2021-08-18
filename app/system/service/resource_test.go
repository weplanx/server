package service

import (
	"context"
	"testing"
)

func TestResource_Get(t *testing.T) {
	data, err := s.Resource.Get(context.Background())
	if err != nil {
		t.Error(err)
	}
	t.Log(data)
}

func TestResource_RefreshCache(t *testing.T) {
	if err := s.Resource.RefreshCache(context.Background()); err != nil {
		t.Error(err)
	}
}

func TestResource_RemoveCache(t *testing.T) {
	if err := s.Resource.RemoveCache(context.Background()); err != nil {
		t.Error(err)
	}
}