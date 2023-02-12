---
description: >-
  The configuration of application services consists of environment variables
  and dynamic values
---

# Configurations

## Environment

The environment variable of the application service, the <mark style="color:red;">`red label`</mark> means that it is required

| Parameter                                        | Description                                                                                                                                                                                                           | Default |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `ADDRESS`                                        | Server listening address                                                                                                                                                                                              | `3000`  |
| <mark style="color:red;">`SPACE`</mark>          | Application space identifier, which must be unique within the same system environment                                                                                                                                 |         |
| <mark style="color:red;">`KEY`</mark>            | Application key, must be a string of length 32                                                                                                                                                                        |         |
| <mark style="color:red;">`HOST`</mark>           | The console URL, for example: `https://console.awsome.com`                                                                                                                                                            |         |
| `OTEL`                                           | Send to OTEL Collector's address                                                                                                                                                                                      |         |
| <mark style="color:red;">`DATABASE_HOST`</mark>  | MongoDB connection string URI, reference: [https://www.mongodb.com/docs/v6.0/reference/connection-string](https://www.mongodb.com/docs/v6.0/reference/connection-string)                                              |         |
| <mark style="color:red;">`DATABASE_NAME`</mark>  | The database name of MongoDB                                                                                                                                                                                          |         |
| <mark style="color:red;">`DATABASE_REDIS`</mark> | Redis connection string URI, reference: [https://github.com/redis/go-redis](https://github.com/redis/go-redis)                                                                                                        |         |
| <mark style="color:red;">`NATS_HOSTS`</mark>     | The host address of the NATS cluster, refer to: [https://github.com/nats-io/nats.go#clustered-usage](https://github.com/nats-io/nats.go#clustered-usage)                                                              |         |
| <mark style="color:red;">`NATS_NKEY`</mark>      | NATS needs to use NKEY authentication, refer to: [https://github.com/nats-io/nats.go#new-authentication-nkeys-and-user-credentials](https://github.com/nats-io/nats.go#new-authentication-nkeys-and-user-credentials) |         |

## Dynamic Values

The dynamic values is implemented based on NATS KeyValue, the purpose is to support the synchronization and visual management of distributed application configuration

| Parameter | Description | Default |
| --------- | ----------- | ------- |
|           |             |         |
|           |             |         |
