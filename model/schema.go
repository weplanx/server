package model

import "go.mongodb.org/mongo-driver/bson"

type Schema struct {
	// 集合命名
	Key string `bson:"key" json:"key"`

	// 字段定义
	Fields SchemaFields `bson:"fields" json:"fields"`

	// 规则
	Rules []interface{} `bson:"rules,omitempty" json:"rules,omitempty"`

	// 验证器
	Validator bson.M `bson:"validator,omitempty" json:"validator,omitempty"`
}

type SchemaFields map[string]*Field

func NewSchema(key string, fields SchemaFields) *Schema {
	return &Schema{
		Key:    key,
		Fields: fields,
	}
}

func (x *Schema) SetRules(v []interface{}) *Schema {
	x.Rules = v
	return x
}