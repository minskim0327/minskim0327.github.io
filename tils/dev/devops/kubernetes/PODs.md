# PODs

# Table of Contents

1. [What is?](#What)
2. [Lifecycle](#Lifecycle)
3. [Pod Creation](#PodCreation)

## What is?<a name="What" />

`Pods` are the smallest, most basic deployable object in Kubernetes.

`Pods` contain one or more containers, such as Docker containers. Usually, pods contain a single container, but there are usecases of multipe containers in a pod, such as helper container to assist the main container.

`Pods` run on the `nodes` in the `cluster`.

## Lifecycle<a name="Lifecycle" />

Pods do not run forever, and can be terminated. Pods in general, do not disappear until they are deleted by a user or a controller.

Each pod has a `PodStatus` API object, represented in teh Pod's `status` field.

When running `kubectl get pod` to inspect a Pod, pod can be in the following possible phases.

- `Pending`: Pod has been created an accepted by the cluster, but one or more of its containers are not yet running. This phase includes time spent being scheduled on a node and downloading images.
- `Running`: Pod has been bound to a node, and all of the containers have been created. <b>At least one container is running, is inthe process of starting, or is restarting. </b>
- `Succeeded`: All containers in the Pod have <b>terminated</b> successfully. Terminated pods do not restart.
- `Failed`: All containers in the pod have terminated, and at least one container has terminated in failure. 
- `Unknown`: The state of the Pod is undetermined.

## Pod Creation<a name="PodCreation" />

POD definition(in this section, written in `YAML`) must contain `apiVersion`, `kind`, `metadata`, and `spec`.

- `apiVersion`: Version of the api version.
- `kind`: Type of current object, and in this case, in must be set as Pod. Other kinds are `Deployments`, `ReplicaSets`, and `Services`.
- `metadata`: Metadata is in form of dictionary. `name` is a string value, `labels` is a dictionary.
- `spec`: Provide additional information pertaining to the object.

Below is an example.

```
----------------
example.yaml
----------------
apiVersion: v1
kind: Pods
metadata:
  name: example
  labels:
    app: web
spec:
  containers:
  - name: front-end
    image: node
    ports:
      - containerPort: 80
```

Pods can be created via the following commands in the terminal.

```
kubectl create -f [filename]
```

The following command gets all the pods running at the current node.

```
kubectl get pods
```

The following command gives descriptions of the pod.
```
kubectl describe pod [pod-name]
```
