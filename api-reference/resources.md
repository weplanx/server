---
description: >-
  RestFul based on MongoDB and Nats JetStream provides general CRUD, data
  formatting, message transaction compensation and dynamic control for low-code.
---

# Resources

{% swagger method="post" path="/:collection" baseUrl="http://localhost:3001" summary="Create" expanded="true" %}
{% swagger-description %}
Create a document
{% endswagger-description %}

{% swagger-parameter in="path" name="collection" required="true" type="String" %}
collection name, must be lowercase with underscore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="data" type="Object" required="true" %}
The document data
{% endswagger-parameter %}

{% swagger-parameter in="body" name="format" type="Object" required="false" %}
Format conversion of

_Body.data_
{% endswagger-parameter %}

{% swagger-response status="201: Created" description="Create Success" %}
{% tabs %}
{% tab title="EXAMPLE 1" %}
```http
POST /departments HTTP/1.1
Host: xapi.kainonly.com:8443
Content-Type: application/json
Content-Length: ...

{
    "data": {
        "name": "sales",
        "description": "Sales headquarters"
    }
}

# Response

HTTP/1.1 201 Created
Alt-Svc: h3=":8443"; ma=2592000,h3-29=":8443"; ma=2592000
Content-Length: ...
Content-Type: application/json; charset=utf-8
Date: Sat, 23 Jul 2022 06:05:14 GMT
Server: hertz

{
  "InsertedID": "62db8f9b33c11192c28c61a2"
}
```
{% endtab %}

{% tab title="EXAMPLE 2" %}
```http
POST /users HTTP/1.1
Host: xapi.kainonly.com:8443
Content-Type: application/json
Content-Length: ...

{
    "data": {
        "username": "weplanx",
        "password": "pass@VAN1234"
    },
    "format": {
        "password": "password"
    }
}

# Response

HTTP/1.1 201 Created
Alt-Svc: h3=":8443"; ma=2592000,h3-29=":8443"; ma=2592000
Content-Length: ...
Content-Type: application/json; charset=utf-8
Date: Sat, 23 Jul 2022 06:23:25 GMT
Server: hertz

{
  "InsertedID": "62db93de33c11192c28c61a3"
}
```
{% endtab %}
{% endtabs %}
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="Create Failure" %}
```json
{
    "message": "Reasons for Failure..."
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="post" path="/:collection/bulk-create" baseUrl="http://localhost:3001" summary="Bulk Create" expanded="true" %}
{% swagger-description %}
Create documents in bulk
{% endswagger-description %}

{% swagger-parameter in="path" required="true" name="collection" type="String" %}
collection name, must be lowercase with underscore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="data" required="true" type="Object[]" %}
The documents data
{% endswagger-parameter %}

{% swagger-parameter in="body" name="format" type="Object" %}
Format conversion of

_Body.data_
{% endswagger-parameter %}

{% swagger-response status="201: Created" description="Create Success" %}
{% tabs %}
{% tab title="EXAMPLE 1" %}
```http
POST /departments/bulk-create HTTP/1.1
Host: xapi.kainonly.com:8443
Content-Type: application/json
Content-Length: ...

{
    "data": [
        {
            "name": "Sales Team A",
            "parent": "62db8f9b33c11192c28c61a2"
        },
        {
            "name": "Sales Team B",
            "parent": "62db8f9b33c11192c28c61a2"
        },
        {
            "name": "Sales Team C",
            "parent": null
        }
    ],
    "format": {
        "parent": "oid"
    }
}

# Response

HTTP/1.1 201 Created
Alt-Svc: h3=":8443"; ma=2592000,h3-29=":8443"; ma=2592000
Content-Length: ...
Content-Type: application/json; charset=utf-8
Date: Sat, 23 Jul 2022 06:32:12 GMT
Server: hertz

{
  "InsertedIDs": [
    "62db95ec33c11192c28c61a6",
    "62db95ec33c11192c28c61a7",
    "62db95ec33c11192c28c61a8"
  ]
}
```
{% endtab %}
{% endtabs %}
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="Create Failure" %}
```json
{
    "message": "Reasons for Failure..."
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="/_size" baseUrl="http://localhost:3001" summary="Total" expanded="true" %}
{% swagger-description %}
Get the total number of documents
{% endswagger-description %}

{% swagger-parameter in="path" name="collection" type="String" required="true" %}
collection name, must be lowercase with underscore
{% endswagger-parameter %}

{% swagger-parameter in="query" name="filter" type="Object" %}
Query operators
{% endswagger-parameter %}

{% swagger-parameter in="query" name="format" type="Object" %}
Format conversion of

_Query.data_
{% endswagger-parameter %}

{% swagger-response status="204: No Content" description="Create Success" %}
{% tabs %}
{% tab title="EXAMPLE 1" %}
```http
GET /orders/_size HTTP/1.1
Host: xapi.kainonly.com:8443

# Response

HTTP/1.1 204 No Content
Alt-Svc: h3=":8443"; ma=2592000,h3-29=":8443"; ma=2592000
Date: Sat, 23 Jul 2022 06:56:46 GMT
Server: hertz
X-Total: 5000
```
{% endtab %}

{% tab title="EXAMPLE 2" %}
```http
GET /orders/_size?filter={"no":{"$in":["CY12008750579FE7390A801K60S7","AZ14FFGW32000766490389800984"]}} HTTP/1.1
Host: xapi.kainonly.com:8443

# Response

HTTP/1.1 204 No Content
Alt-Svc: h3=":8443"; ma=2592000,h3-29=":8443"; ma=2592000
Date: Sat, 23 Jul 2022 07:00:38 GMT
Server: hertz
X-Total: 2
```
{% endtab %}

{% tab title="EXAMPLE 3" %}
```http
GET /orders/_size?filter={"_id":{"$in":["62a455a4d2952c7033643763"]}}&format={"_id.$in":"oids"} HTTP/1.1
Host: xapi.kainonly.com:8443

# Response

HTTP/1.1 204 No Content
Alt-Svc: h3=":8443"; ma=2592000,h3-29=":8443"; ma=2592000
Date: Sat, 23 Jul 2022 07:02:51 GMT
Server: hertz
X-Total: 1
```
{% endtab %}
{% endtabs %}
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="Create Failure" %}
```json
{
    "message": "Reasons for Failure..."
}
```
{% endswagger-response %}
{% endswagger %}
