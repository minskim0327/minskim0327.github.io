# Workload Resources

# Table of Contents

1. [What is?](#What)
2. [ReplicaSet](#ReplicaSet)
3. [Deployment](#Deployment)
    1. [What is Rollout?](#Rollout)
    2. [Creation](#DeploymentCreation)
    3. [Update](#DeploymentUpdate)
    4. [Rollback](#DeploymentRollback)
    5. [Scaling](#DeploymentScaling)

## What is?<a name="What" />

`Workload Resources` assist lifecycle management of `Pods`.

## ReplicaSet<a name="ReplicaSet" />

`ReplicaSet` is a workload resource that is used to maintain a stable set of `replica Pods` running at any given time. Thus, it is often used to guarantee the availability of a  specified number of <b>identical pods.</b>

When defining ReplicaSet, the `spec` field must contain these followings: `replicas`, `selector`, and `template`.

- `replicas`: number of replica pods in the ReplicaSet.
- `selector`: specifies how to identify Pods it can acquire.
- `template`: specifies the data of new Pods it should create to meet the number of replicas criteria

Why would we need a `template` when `selector` already specifies what Pod to acquire? This is because when the replica set creates new pods,
it must create a new pod <b>based on the template</b>.

Below is an example of replicaset definition.

```
-----------------
controllers/replicaset.yaml
-----------------
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: frontend
  labels:
    app: web
    tier: frontend
spec:
  replicas: 3
  selector:
    matchLabels:
      tier: frontend
  template:
    metadata:
      labels: 
        tier: frontend
    spec:
      containers:
      - name: nginx
        image: nginx-alpine
```

Following command get the current ReplicaSet deployed.

```
kubectl get rs
```

Following command check the state of the ReplicaSet.

```
kubectl describe rs/[ReplicaSet Name]
```


## Deployment<a name="Deployment" />

`Deployment` provides declarative updates for `Pods` and `ReplicaSets`. User can describe a desired state in a Deployment, and
the Deployment `Controller`(A control loop that watches the state of the cluster through the api server and makes changes accordingly) changes the 
actual state to the desired state at a controlled rate. Deployments enable creation of `ReplicaSets`, or to remove existing Deployments and adopt all their resources with new Deployments.

The following is an example of a Deployment. Creating a deployment automatically creates a ReplicaSet to bring up the number of pods described.

```
--------------------
controllers/deployment-example.yaml
--------------------
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
      spec:
        containers:
        - name: nginx
          image: nginx:1.4.2
          ports:
          - containerPort: 80
```

### What is Rollout?<a name="Rollout" />

`Rollout` is the default mechanism for updating pods in the deployment. Let's say that current deployment manages 4 replica pods, with apiVersion v1.
Now, suppose that the version of the pods need to be updated to v2. What would happen to the 4 pods if the 4 pods with version v1 are all removed, and then 4 new pods
with version v2 is created? The application would have to suffer a temporary shutdown. To prevent this, Kubernetes offer a `Rollout` process while updating the pod.
In `rollout`, instead of removing all 4 pods with older version, a single pod with older version is removed, a single pod with newer version is created, and so on.
To acheive this, we realize that a new `Replica Set` is created, because the older replicaset must contain existing pods during rollout.

### Creation<a name="DeploymentCreation" />

The following command creates a `Deployment` object.

```
kubectl apply -f [filename]
```

To check if the `Deployment` is created, run the following command.

```
kubectl get deployments
```

To check the rollout status, run the following command.

```
kubectl rollout status deployment/[deployment name]
```

To see the labels created for each pod, run the following command.

```
kubectl get pods --show-labels
```

### Update<a name="DeploymentUpdate" />

Deployment `rollout` is triggered only when the fields in the template section changes.

To update the image of the deployment, run one of either commands (see `controllers/deployment-example.yaml` above).

```
kubectl --record deployment.apps/deployment-example set image deployment.v1.apps/deployment-example nginx=[new image]
```

or

```
kubectl set image deployment/deployment-example nginx=[new image] --record
```

Another way is to edit the `YAML` file directly, by running the following command.

```
kubectl edit deployment.v1.apps/deployment-example
```

### Rollback<a name="DeploymentRollback" />

There may be instances where the app version needs to be rollbacked, i.e. when the current version contains critical bug/issue.
By default, all of the Deployment's rollout history is kept in the system so that the user can rollback any time the user wants. The user can
also manually set the revision history limits.

To rollback, follow the steps below:

1. Check the revisions of the deployment

```
kubectl rollout history deployment/[deployment name]
```

The output will be similar to this.

```
deployments [deployment name]
REVISION    CHANGE-CAUSE
1           kubectl apply --filename=[deployment name] --record=true
2           kubectl set image deployment/[deployment name] [image key]=[image] --record=true
3           kubectl set image deployment/nginx-deployment [image key]=[image] --record=true
```

2. To see the details of each revision, run:

```
kubectl rollout history deployment/[deployment name] --revision=[revision number]
```

3. Rollback!

```
kubectl rollout undo deployment/[deployment name]
```

or to specific version,

```
kubectl rollout undo deployment/[deployment name] --to-revision=[revision version]
```

### Scaling <a name="DeploymentScaling" />

The scaling, or chaning the number of pods in the replicaset, is done by the following command.

```
kubectl scale deployment/[deployment name] --replicas=[new number of pods]
```

If the `horizontal pod scaling` is enabled, user can also set up an `autoscaler` using the following command. This will scale based on the CPUs of the current node.

```
kubectl autoscale deployment/[deployment name] --min=[minimum number of pods] --max=[maximum number of pods] --cpu-percent=[cpu percentage]
```
