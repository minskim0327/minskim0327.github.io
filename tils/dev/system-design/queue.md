why do we need messaging? Think of pizza delivery example.

messaging model => message queue / pubsub

message queueing?

message to a single instance of a service -> use message queue


pubsub?

notify multiple other services (one service notify multiple services)
after payment -> billing service/receipt service

rabbit mq?
AMQP protocol
message stored unitl consumers retrieves them
offloads heavy tasks
distributes tasks

routing keys

rabbit mq message has the key and the address it needs to go to

exchange

direct message in the queue of the name
topic/header exchange
fanout exchange
channels

ackowledgement

tcp connectionsingle tcp connection, supplemented with channel

best as message queue

provicde concurrency through channel
reliability thorugh ackonolwedgment
can also function as pub sub

kafka?

popular pubsub system

event streaming platform
messages are stored for a period of time
queue = topic
message = event

partition of message(event) by consumer

higher throughput / latency

consumer groups

consumer offest