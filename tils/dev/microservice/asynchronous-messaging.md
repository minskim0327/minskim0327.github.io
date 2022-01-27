# Asynchronous Messaging

# Table of Contents

1. [What Is?](#WI)
2. [Message Queues](#MQ)
3. [Publish/Subscribe](#PS)
4. [RabbitMQ](#R)
5. [Apache Kafka](#AK)
6. [Kafka vs RabbitMQ](#KVR)
    1. [Apache Kafka Use Cases](#AFUC)
    2. [RabbitMQ Use Cases](#RUC)

## What is?<a name="WI" />

There exists producing and consuming app, where the producer delivers messages and the consumer receives the message when the consumer is ready to do so. Thus, sending and receiving message do not necessarily occur at the same time and thus is asynchronous.

## Message Queues<a name="MQ" />

Producing app delivers messages to a queue, and when the consuming app is ready to receive, it connects to the queue and retrieves the messages.
 There could be multiple consuming apps, but each message is consumed by only one consumer.

## Publish/Subscribe<a name="PS" />

Producers publish message s, and multiple consumers are able to consume each message. When consuming apps are interested in a particular producer's messages, they subscribe to a channel where that producer will send its messages. This pattern is thus favored when an event need to trigger multiple actions.

## RabbitMQ<a name="R" />

RabbitMQ is an open source distributed message broker, using message queue. The queue is FIFO, where first message in the queue is consumed first. `Message Exchanges` are one of the feature in RabbitMQ, in which the producers send messages to one of four exchange types:

- `Direct Exchange`: route messages according to the routing key that the message carries.

- `Fanout Exchange`: route messages to all available queues.

- `Topic Exchange`: route messages to one or more queues according to a complete or partial match with the routing key.

- `Header Exchange`: route message based on the message headers.

## Apache Kafka<a name="AK" />

Apache Kafka is an open source distributed event-streaming platform. `Kafka architecture` comprises producers, consumers, clusters, brokers, `topics`, and partitions. Producers send records to clusters, which st ore those records and then pass them to consumers. Each server node in the cluster is a `broker`, which stores the data provided by the producer until it is read by the consumer.

Instead of queues, Kafka uses `topics`, which is a stream of data comprising individual records. i.e. folder in a file system. Each topic is split into partitions, which are unchangeable sequences of records where the messages are appended. A producer appends records to a topic partition and a consumer subscribes to changes. Kafka can spread messages across partitions. 

Consumers are also able to re-read previous stored messages for as long as you decide to keep messages in the partition. This ability allows the key use cases such as event sourcing and log aggregation.

## Kafka vs RabbitMQ<a name="KVR" />

While RabbitMQ adapts message queues, Kafka is more of a pub/sub approach. Kafka is ideal for big data use cases that require the best throughput, while RabbitMQ is ideal for low latency message delivery, guarantees on a per-message basis, and complex routing.

### Apache Kafka Use Cases<a name="AKUC" />

- `High-throughput activity tracking`: Kafka can be used for a variety of high-volume, high-throughput activity tracking applications, such as tracking website activity, ingest data from IoT sensors, monitor patients in hospital setting, etc.

- `Stream processing`: Kafka enables implementation of application logic that are based on streams of events. You might keep a running count of types of events or calculate an average value over the course of an event that lasts several minutes. 

- `Event sourcing`: Kafka can be used to support event sourcing, in which changes to an app state are stored as a sequence of events, such as in banking app.

- `Log Aggregation`: Kafka can be used to collect log files and store them in a centralized place.

### RabbitMQ Use Cases<a name="RUC" />

- `Complex routing`: RabbitMQ can be the best fit when you need to route messages among multiple consuming apps. RabbitMQ consistent hash exchange can be used to balance load processing across a distributed monitoring service. Alternate exchange can also be used to route a portion of events to specific services for A/B testing.

- `Legacy applications`: You can deploy RabbitMQ as a way to connect consumer apps with legacy apps.