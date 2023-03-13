# Create

{% swagger method="get" path="/:collection" baseUrl="http://localhost:3001" summary="" %}
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
