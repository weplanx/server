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
{% code overflow="wrap" %}
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
{% endcode %}
{% endtab %}

{% tab title="EXAMPLE 3" %}
{% code overflow="wrap" %}
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
{% endcode %}
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

{% swagger method="get" path="/:collection" baseUrl="http://localhost:3001" summary="Find" expanded="true" %}
{% swagger-description %}
Get documents
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

{% swagger-parameter in="query" name="sort" type="String[]" %}
Sorting, the format is 

`<field>:<1|-1>`
{% endswagger-parameter %}

{% swagger-parameter in="query" name="keys" type="String[]" %}
Projection rules
{% endswagger-parameter %}

{% swagger-parameter in="header" name="X-Pagesize" type="String(int)" %}
Paging size, default 

`100`

 supports range 

`1~1000`
{% endswagger-parameter %}

{% swagger-parameter in="header" name="X-Page" type="String(int)" %}
Pagination
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Return Success" %}
{% tabs %}
{% tab title="EXAMPLE 1" %}
```http
GET /orders HTTP/1.1
Host: xapi.kainonly.com:8443

# Response

HTTP/1.1 200 OK
Alt-Svc: h3=":8443"; ma=2592000,h3-29=":8443"; ma=2592000
Content-Length: 54126
Content-Type: application/json; charset=utf-8
Date: Sat, 23 Jul 2022 07:09:03 GMT
Server: hertz
X-Total: 5000

[ ... { "_id": "...", ... } 100 raw ... ]
```
{% endtab %}

{% tab title="EXAMPLE 2" %}
```http
GET /orders HTTP/1.1
Host: xapi.kainonly.com:8443
x-page: 2
x-pagesize: 5

# Response

HTTP/1.1 200 OK
Alt-Svc: h3=":8443"; ma=2592000,h3-29=":8443"; ma=2592000
Content-Length: 2716
Content-Type: application/json; charset=utf-8
Date: Sat, 23 Jul 2022 07:19:53 GMT
Server: hertz
X-Total: 5000

[ ... { "_id": "...", ... } 5 raw ... ]
```
{% endtab %}

{% tab title="EXAMPLE 3" %}
{% code overflow="wrap" %}
```http
GET /orders?filter={"no":{"$in":["CH3105725N28374415016","TR035076242618008689084428"]}} HTTP/1.1
Host: xapi.kainonly.com:8443
```
{% endcode %}
{% endtab %}

{% tab title="EXAMPLE 4" %}
{% code overflow="wrap" %}
```http
GET /departments?filter={"parent":"62db8e2133c11192c28c61a1"}&format={"parent":"oid"} HTTP/1.1
Host: xapi.kainonly.com:8443
```
{% endcode %}
{% endtab %}

{% tab title="EXAMPLE 5 " %}
```http
GET /orders?keys=no&keys=account HTTP/1.1
Host: xapi.kainonly.com:8443
```
{% endtab %}

{% tab title="EXAMPEL 6" %}
```http
GET /orders?sort=no:1&sort=account:1 HTTP/1.1
Host: xapi.kainonly.com:8443
```
{% endtab %}
{% endtabs %}
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="Return Failure" %}
```json
{
    "message": "Reasons for Failure..."
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="/:collection/_one" baseUrl="http://localhost:3001" summary="Find One" expanded="true" %}
{% swagger-description %}
Get a Document
{% endswagger-description %}

{% swagger-parameter in="path" type="String" name="collection" required="true" %}
collection name, must be lowercase with underscore
{% endswagger-parameter %}

{% swagger-parameter in="query" name="filter" type="Query" required="true" %}
Query operators
{% endswagger-parameter %}

{% swagger-parameter in="query" name="format" type="Object" %}
Format conversion of

_Query.data_
{% endswagger-parameter %}

{% swagger-parameter in="query" name="keys" type="String[]" %}
Projection rules
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Return Success" %}
{% tabs %}
{% tab title="EXAMPLE 1" %}
{% code overflow="wrap" %}
```http
GET /orders/_one?filter={"no":"AZ14FFGW32000766490389800984"} HTTP/1.1
Host: xapi.kainonly.com:8443

# Response

HTTP/1.1 200 OK
Alt-Svc: h3=":8443"; ma=2592000,h3-29=":8443"; ma=2592000
Content-Length: 515
Content-Type: application/json; charset=utf-8
Date: Sat, 23 Jul 2022 07:41:43 GMT
Server: hertz

{"name":"Generic Bronze Chips","description":"Carbonite web goalkeeper gloves are ergonomically designed to give easy fit","email":"Hallie.Hammes@hotmail.com","phone":"986636789","price":251.28,"valid":["2022-05-15T03:23:58.222+08:00","2022-06-11T23:19:59.856+08:00"],"_id":"62a455a4d2952c7033643764","account":"32210732","customer":"Mr. Roxanne Gutmann","address":"240 Louvenia Groves","create_time":"2022-02-13T10:27:56.083+08:00","update_time":"2022-02-13T10:27:56.083+08:00","no":"AZ14FFGW32000766490389800984"}
```
{% endcode %}
{% endtab %}

{% tab title="EXAMPLE 2" %}
{% code overflow="wrap" %}
```http
GET /departments/_one?filter={"parent":"62db8e2133c11192c28c61a1"}&format={"parent":"oid"} HTTP/1.1
Host: xapi.kainonly.com:8443

# Response

HTTP/1.1 200 OK
Alt-Svc: h3=":8443"; ma=2592000,h3-29=":8443"; ma=2592000
Content-Length: 184
Content-Type: application/json; charset=utf-8
Date: Sat, 23 Jul 2022 07:44:00 GMT
Server: hertz

{"_id":"62db95ec33c11192c28c61a7","name":"Team A","parent":"62db8e2133c11192c28c61a1","create_time":"2022-07-23T14:32:12.502+08:00","update_time":"2022-07-23T14:32:12.502+08:00"}
```
{% endcode %}
{% endtab %}

{% tab title="EXAMPLE 3" %}
{% code overflow="wrap" %}
```http
GET /orders/_one?filter={"no":"AZ14FFGW32000766490389800984"}&keys=no HTTP/1.1
Host: xapi.kainonly.com:8443

# Response

HTTP/1.1 200 OK
Alt-Svc: h3=":8443"; ma=2592000,h3-29=":8443"; ma=2592000
Content-Length: 70
Content-Type: application/json; charset=utf-8
Date: Sat, 23 Jul 2022 07:45:31 GMT
Server: hertz

{"_id":"62a455a4d2952c7033643764","no":"AZ14FFGW32000766490389800984"}
```
{% endcode %}
{% endtab %}
{% endtabs %}
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="Return Failure" %}
```http
{
    "message": "Reasons for Failure..."
}
```
{% endswagger-response %}
{% endswagger %}

{% swagger method="get" path="/:collection/:id" baseUrl="http://localhost:3001" summary="Find One By Id" expanded="true" %}
{% swagger-description %}
Get a Document
{% endswagger-description %}

{% swagger-parameter in="path" name="collection" type="String" required="true" %}
collection name, must be lowercase with underscore
{% endswagger-parameter %}

{% swagger-parameter in="path" name="id" type="String" required="true" %}
Document ID, must be hex(ObjectId)
{% endswagger-parameter %}

{% swagger-parameter in="query" name="keys" type="String[]" %}
Projection rules
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Return Success" %}
{% tabs %}
{% tab title="EXAMPLE 1" %}
{% code overflow="wrap" %}
```http
GET /orders/62a455a4d2952c7033643763 HTTP/1.1
Host: xapi.kainonly.com:8443

# Response

HTTP/1.1 200 OK
Alt-Svc: h3=":8443"; ma=2592000,h3-29=":8443"; ma=2592000
Content-Length: 548
Content-Type: application/json; charset=utf-8
Date: Sat, 23 Jul 2022 08:00:01 GMT
Server: hertz

{"create_time":"2022-03-08T17:12:28.607+08:00","_id":"62a455a4d2952c7033643763","no":"CY12008750579FE7390A801K60S7","name":"Fantastic Plastic Towels","price":980.94,"valid":["2021-09-04T00:23:26.91+08:00","2022-06-12T09:28:07.644+08:00"],"address":"3358 Lang Common","update_time":"2022-03-08T17:12:28.607+08:00","description":"Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support","account":"94213614","customer":"Faye Hermann","email":"Sven20@hotmail.com","phone":"172828438"}
```
{% endcode %}
{% endtab %}

{% tab title="EXAMPLE 2" %}
{% code overflow="wrap" %}
```http
GET /orders/62a455a4d2952c7033643763?keys=no HTTP/1.1
Host: xapi.kainonly.com:8443

# Response

HTTP/1.1 200 OK
Alt-Svc: h3=":8443"; ma=2592000,h3-29=":8443"; ma=2592000
Content-Length: 70
Content-Type: application/json; charset=utf-8
Date: Sat, 23 Jul 2022 08:00:28 GMT
Server: hertz

{"_id":"62a455a4d2952c7033643763","no":"CY12008750579FE7390A801K60S7"}
```
{% endcode %}
{% endtab %}
{% endtabs %}
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="Return Failure" %}
```http
{
    "message": "Reasons for Failure..."
}
```
{% endswagger-response %}
{% endswagger %}
