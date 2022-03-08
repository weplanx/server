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
