# CAP

# Table of Contents

1. [What is CAP?](#What)


## What is CAP?<a name="What" />

In a distributed computer system, only two of the following is guaranteed. <br />

- `Consistency` - Every read receives the most recent write, log, or error.
- `Availability` - Every request receives a response, without guarentee that it contains the most recent version of information.
- `Partition Tolerence` - The system continues to operate despite arbitrary partitioning due to network failures.

Note that networks aren't always reliable, so the system must always support `Partition Tolerance`. Thus, there must be a tradeoff between acheiving `Consistency` and `Availability`. <br /><br />


<b>CP - consistency and partition tolerance </b><br />

Waiting for a response from the partitioned node might result in a timeout error. CP is a good choice if your business needs require atomic reads and writes. <br /><br />

<b>AP - availability and partition tolerance</b><br />

Responses return the most readily available version of the data available on any node, which might not be the latest. Writes might take some time to propagate when the partition is resolved.

AP is a good choice if the business needs allow for eventual consistency or when the system needs to continue working despite external errors.