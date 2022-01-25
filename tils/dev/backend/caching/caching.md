# Keys

# Table of contents

1. [Caching Strategies](#CachingStrategy)
    1. [Cache Aside](#CacheAside)
    2. [Read Through](#ReadThrough)
    3. [Write Through](#WriteThrough)
    4. [Write Behind](#WriteBehind)
2. [Eviction Policies](#EvictionPolicy)
3. [Redis](#Redis)

## Caching Strategy<a name="CachingStrategy"></a>

Caching has four known strategies:
- Cache Aside
- Read Through

### Cache Aside<a name="CacheAside"></a>

access to cache and storage
check key in cache, if not fetch from storage. ex. redis

cache only what's needed

cache misses are expensive
data staleness
implementation complexity

### Read Through<a name="ReadThrough"></a>

application x access to storage.

cache only what's needed, transparent

cache misses
### Write Through<a name="WriteThrough"></a>
up to date data

writes expensive
redundant data

### Write Behind<a name="WriteBehind"></a>

no write penalty
reduced load on storage


reliability

lack of consistency

###2. [Eviction Policies](#EvictionPolicy)

LRU (least recently used) based on linked list
has limitation
to solve it use

LFU (least frequently used)

lru as default
faster, cheaper
suffer less from false cache eviction


## Redis<a name="Redis"></a>

In memory key value store

support ttl

persistance
save data to disk
redis crash -> recover from disk
why not use it as db?
persist 
can loose recent data
store in memory
remote service, latency

