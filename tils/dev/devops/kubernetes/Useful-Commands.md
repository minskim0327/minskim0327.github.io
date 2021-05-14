# Commands

To check the apiVersion of the pod, run the following command:

```
kubectl explain replicaset | grep VERSION
```

To get all information regarding kubernetes pod, node, deployment, replicaset, run the following command.

```
kubectl get all
```

To edit pods, deployments, etc:

If given a pod definition file, edit the file and either create or apply that file.

If not, there are multiple ways.

1. extract the yaml file, make changes, delete the original pod, and then recreate the pod.

```
kubectl get pod <pod-name> -o yaml > <extracted file name>
```

2. edit the pod directly

```
kubectl edit pod <pod-name>
```

3. set the key-value pair directly

```
kubectl set <key> pod <pod-name> <key>=<value>
```


To get all pods regardless of namespaces, run

```
kubectl get pods -A

or

kubectl get pods --all-namespaces
```

To switch the default namespace, run the following command

```
kubectl config set-context $(kubectl config current-context) --namespace=<new default namespace>
```


Imperative
```
kubectl run redis --image=redis:alpine --dry-run=client -oyaml > redis-pod.yaml
```
kubecl create ns <namespace>

To create a pod and then expose a service at a single step,

run the following command.

Below command creates a pod called `httpd` with the image `http:alpine` in the default namespace. It then also creats a service of type `ClusterIP` with the targetP port `80`.

```
kubectl run http --image=http:alpine --port 80 --expose
```

```
kubectl explain pods --recursive | grep envFrom -A3
```
