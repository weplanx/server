# Create

{% swagger method="post" path="/:collection" baseUrl="http://localhost:3001" summary="Create" expanded="true" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="collection" required="true" type="String" %}
collection name, must be lowercase with underscore
{% endswagger-parameter %}

{% swagger-parameter in="body" name="data" type="Object" required="true" %}
The doc data
{% endswagger-parameter %}

{% swagger-parameter in="body" name="format" type="Object" %}
Format conversion of 

_Body.data_
{% endswagger-parameter %}

{% swagger-response status="201: Created" description="Create Success" %}
```json
{
    "InsertedID": "62db8f9b33c11192c28c61a2"
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="Create Failure" %}
```json
{
    "message": "Reasons for Failure..."
}
```
{% endswagger-response %}
{% endswagger %}

{% tabs %}
{% tab title="Simple Example" %}
```http
POST /dev_departments HTTP/1.1
Host: xapi.kainonly.com:8443
Content-Type: application/json
Content-Length: 82

{
    "data": {
        "name": "客服组",
        "description": "客服总部门"
    }
}

# Response

HTTP/1.1 201 Created
Alt-Svc: h3=":8443"; ma=2592000,h3-29=":8443"; ma=2592000
Content-Length: 41
Content-Type: application/json; charset=utf-8
Date: Sat, 23 Jul 2022 06:05:14 GMT
Server: hertz

{
  "InsertedID": "62db8f9b33c11192c28c61a2"
}
```
{% endtab %}

{% tab title="Second Tab" %}

{% endtab %}
{% endtabs %}
