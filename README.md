# Weplanx

一个开源的中后台低代码解决方案

## 预置模板

在初始化应用中 “应用页面” 项填入

- `https://raw.githubusercontent.com/weplanx/.github/main/template/crm.json` CRM 应用

## 自定义预置模板

引入定义文件，然后描述需要的 `data` 数据

```json
{
  "$schema": "https://raw.githubusercontent.com/weplanx/.github/main/schema/pages/v1alpha.json",
  "data": []
}
```

## 参数说明

- **page.kind** 种类，枚举字符串
  - `default` 作为数据源，包含数据列表与数据填充等功能
  - `form` 独立的数据填充页面
  - `dashboard` 数据分析处理、结果展示功能，如数据汇总、趋势分析图表
  - `group` 导航中将其他种类分组显示
- **field.type** 字段类型，枚举字符串
  - 基础字段
    - [x] `string` 单行文本
    - [x] `text` 多行文本
    - [x] `number` 数字
    - [x] `date` 日期
    - [x] `between-dates` 日期之间
    - [x] `bool` 状态
    - [x] `radio` 单选
    - [x] `checkbox` 复选
    - [x] `select` 选择器
  - 高级字段
    - [x] `richtext` 富文本
    - [x] `picture` 图片
    - [x] `video` 视频
    - [ ] `file` 文件
    - [ ] `json` 自定义

更多查看文件 `/schema/pages/v1alpha.json`

```json
{
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "properties": {
    "data": {
      "type": "array",
      "items": {
        "$ref": "#/definitions/page"
      }
    }
  },
  "definitions": {
    "page": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "description": "名称"
        },
        "icon": {
          "type": "string",
          "description": "字体图标"
        },
        "kind": {
          "type": "string",
          "enum": ["default", "form", "dashboard", "group"],
          "description": "种类。\ndefault：作为数据源，包含数据表格与数据填充\nform：独立的数据填充页\ndashboard：数据汇总图表\ngroup：导航分组"
        },
        "schema": {
          "$ref": "#/definitions/schema"
        },
        "sort": {
          "type": "integer",
          "description": "排序"
        },
        "status": {
          "type": "boolean",
          "description": "状态"
        }
      },
      "required": ["name", "kind"]
    },
    "schema": {
      "type": "object",
      "properties": {
        "key": {
          "type": "string",
          "uniqueItems": true,
          "description": "数据集合定义"
        },
        "fields": {
          "type": "object",
          "description": "字段定义"
        },
        "rules": {
          "type": "array",
          "description": "显隐规则"
        },
        "validator": {
          "type": "object",
          "description": "Monogo JSON Schema 验证"
        }
      },
      "description": "数据 Schema 定义",
      "required": ["key", "fields"]
    },
    "field": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "description": "显示名称"
        },
        "type": {
          "type": "string",
          "enum": [
            "string",
            "text",
            "number",
            "date",
            "between-dates",
            "bool",
            "radio",
            "checkbox",
            "select",
            "richtext",
            "picture",
            "video",
            "file",
            "json"
          ],
          "description": "字段类型"
        },
        "description": {
          "type": "string",
          "description": "字段描述"
        },
        "placeholder": {
          "type": "string",
          "description": "字段提示"
        },
        "default": {
          "description": "默认值"
        },
        "required": {
          "type": "boolean",
          "description": "是否必须"
        },
        "hide": {
          "type": "boolean",
          "description": "隐藏字段"
        },
        "modified": {
          "type": "boolean",
          "description": "可编辑"
        },
        "sort": {
          "type": "integer",
          "description": "排序"
        },
        "spec": {
          "$ref": "#/definitions/spec"
        }
      },
      "required": ["label", "type", "sort", "spec"]
    },
    "spec": {
      "type": "object",
      "properties": {
        "max": {
          "type": "integer",
          "description": "最大值"
        },
        "min": {
          "type": "integer",
          "description": "最小值"
        },
        "decimal": {
          "type": "integer",
          "description": "保留小数"
        },
        "value": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/value"
          },
          "description": "枚举数值"
        },
        "reference": {
          "type": "string",
          "description": "引用数据源"
        },
        "target": {
          "type": "string",
          "description": "引用目标"
        },
        "multiple": {
          "type": "boolean",
          "description": "是否多选"
        }
      }
    },
    "value": {
      "type": "object",
      "properties": {
        "label": {
          "type": "string",
          "description": "名称"
        },
        "value": {
          "description": "数值"
        }
      },
      "required": ["label", "value"]
    }
  },
  "required": ["data"]
}
```
