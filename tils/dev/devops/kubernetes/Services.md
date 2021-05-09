# Services

# Table of Contents

1. [What is?](#What)
2. [Defining a Service](#DefiningService)
3. [Service Types](#ServiceTypes)

## What is?<a name="What" />

`Service` is an abstract way to expose an appliation running on a set of `Pods` as a <b>network service</b>.
In kubernetes, pods are often destroyed and created. Thus, networking via ip addresses of pods is insecure in terms of availability and scalability.
Thus, `services` are used to enable stable networking communication between the client and the server.

## Defining a Service<a name="DefiningService" />

The name of the Service object must be a valid [DNS label name](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#dns-label-names).

Following is an example of service, written in YAML file.

```
----------------
service-example.yaml
----------------
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  # By default, the type of the Service is ClusterIP. This is dealt in the later section of this article.
  type: NodePort
  selector: 
    app: MyApp
  ports:
    - portocol: TCP
      port: 80
      targetPort: 80

```

## Service Types<a name="ServiceTypes" />

Kubernetes `Service Type` allows user to specify what kind of Service is desired. Default is `ClusterIP`.

- `ClusterIP`: Exposes the service on a cluster-internal IP address. Choosing this value makes the service only reachable from within the cluster.
- `NodePort`: Exposes the service on each Nodes' IP as a static port. In this case, a `ClusterIP` Service to which the `NodePort` routes is automatically created.
User is able to connect to the service via `[NodeIP]:[NodePortIP]`
- `LoadBalancer`: Exposes the Service externally using a cloud provider's load balancer(such as EKS, Azure or GKE). NodePort and ClusterIP Services, to which the external load balancer routes, are automatically created.

Below is an example of `NodePort` Service.

```
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  type: NodePort
  selector:
    app: MyApp
  ports:
      # By default and for convenience, the `targetPort` is set to the same value as the `port` field.
    - port: 80
      targetPort: 80
      # Optional field
      # By default and for convenience, the Kubernetes control plane will allocate a port from a range (default: 30000-32767)
      nodePort: 30007
```

Below is an example of `LoadBalancer` Service.

```
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: MyApp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376
  clusterIP: 10.0.171.239
  type: LoadBalancer
status:
  loadBalancer:
    ingress:
    - ip: 192.0.2.127
```