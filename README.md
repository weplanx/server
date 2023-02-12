---
description: >-
  RestFul based on MongoDB and Nats JetStream provides general CRUD, data
  formatting, message transaction compensation and dynamic control for low-code.
---

# DSL API

{% swagger method="post" path="/:collection" baseUrl="" summary="Create" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="collection" required="true" %}
collection name, must be lowercase letters and underscores
{% endswagger-parameter %}

{% swagger-parameter in="body" name="data" type="Object" required="true" %}
data
{% endswagger-parameter %}

{% swagger-parameter in="body" name="format" type="Object" %}

{% endswagger-parameter %}

{% swagger-response status="201: Created" description="" %}
```javascript
{
    // Response
}
```
{% endswagger-response %}
{% endswagger %}
