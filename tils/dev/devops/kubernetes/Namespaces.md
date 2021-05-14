# Namespaces

# Table of Contents

1. [What](#What)
2. [Creation](#Creation)
3. [DNS](#DNS)
4. [Resource Quota](#ResourceQuota)

## What<a name="What" />

`Namespace` is a virtual cluster that is backed by the same physical cluster. Namespaces are intended for use in environments with many users spread across multiple teams, or projects

## Creation<a name="Creation" />

Create a yaml file as such :

```
-----------------
namespace-dev.yaml
-----------------
apiVerison: v1
kind: Namespace
metadata:
  name: dev
```

and run the following command:

```
kubectl create -f namespace-dev.yaml
```

When you want to assign a pod to a specific namespace, you can either assign the namespace in `<pod>.metadata.namespace` or run the following command when you create a pod.

```
kubectl create -f <filename> --namespace=<namespace>
```

## DNS<a name="DNS" />

When user creates a `Service`, it creates a corresponding `DNS entry`. The entry is in form of `<service-name>.<namespace-name>.svc.cluster.local`.

## Resource Quota<a name="ResourceQuota" />

As the name suggests, `Resource Quota` provides constraints that limit aggregate resource consumption per namespace.

Below is an example of resource quota.

```
apiVersion: v1
kind: ResourceQuota
metadata:
  name: compute-quota
  namespace: dev
spec:
  hard:
    pods: "10"
    requests.cpu: "4"
    requests.memory: 5Gi
    limits.cpu: "10"
    limits.memory: 10Gi
```