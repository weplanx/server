---
description: A lightly distributed customizable data collection service
---

# Transfer & Collector

### Pre-requisites

* A Nats cluster with JetStream enabled.
* A MongoDB, preferably with a version greater than 5.0, so that time series collections can be used.
* Services can only work together under the same namespace.

> The same namespace defines the database name for mongodb, `${namespace}_logs` for nats key-value, `${namespace}:logs:${key}` for nats stream

### Collector

The collector service for subscribing to the stream queue and then writing to the log collection.

<figure><img src="../.gitbook/assets/Collector.png" alt=""><figcaption></figcaption></figure>

The collection needs to be managed manually and created with the name `${key}_logs`.

> If the mongodb version is greater than 5.0, recommended time series collection, the transfer contains `metadata` field will be set to the time series collection metaField.

The main container images are:

* ghcr.io/weplanx/collector:latest
* ccr.ccs.tencentyun.com/weplanx/collector:latest

The case will deploy the orchestration using Kubernetes, replicating the deployment (with modifications as needed).

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: collector
spec:
  replicas: 3
  selector:
    matchLabels:
      app: collector
  template:
    metadata:
      labels:
        app: collector
    spec:
      containers:
        - image: ccr.ccs.tencentyun.com/weplanx/collector:v1.7.0
          imagePullPolicy: Always
          name: collector
          env:
            - name: MODE
              value: release
            - name: NATS_HOSTS
              value: <*** your nats hosts ***>
            - name: NATS_NKEY
              value: <*** your nats nkey***>
            - name: DATABASE
              value: <*** your mongodb uri ***>
            - name: NAMESPACE
              value: example
```

The environment variable of the service.

| Parameter    | Description                                   |
| ------------ | --------------------------------------------- |
| `MODE`       | Log level is production when set to `release` |
| `NAMESPACE`  | Namespace for collector and transfer          |
| `NATS_HOSTS` | Nats connection address                       |
| `DATABASE`   | MongoDB uri                                   |

### Transfer

A Golang version of client for managing configuration, data transfer, and scheduling distribution collectors.

```sh
go get github.com/weplanx/transfer
```

A simple quick start case

```go
// Create the nats client and then create the jetstream context
if js, err = nc.JetStream(nats.PublishAsyncMaxPending(256)); err != nil {
	panic(err)
}

// Create the transfer client
if client, err = transfer.New(
	transfer.SetNamespace("beta"),
	transfer.SetJetStream(js),
); err != nil {
	panic(err)
}

// Set logger
err := client.Set(context.TODO(), transfer.LogOption{
	Key:         "system",
	Description: "system beta",
})

// Get logger
result, err := client.Get("system")

// Publish log data
err := client.Publish(context.TODO(), "system", transfer.Payload{
	Metadata: map[string]interface{}{
		"id": 1,
	},
	Data: map[string]interface{}{
		"msg": "123456",
	},
	Timestamp: time.Now(),
})

// Remove logger
err := client.Remove("system")
```
