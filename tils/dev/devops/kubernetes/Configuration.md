# Configuration

# Table of Contents

1. [Command and Arguments in Kubernetes](#CommandArgument)
2. [Environment Variables](#Creation)
3. [DNS](#DNS)
4. [Resource Quota](#ResourceQuota)

## Command and Arguments in Kubernetes<a name="CommandArgument" />

entrypoint -> command, cmd: args

## E

1. plain key value
env:
 - name: APP_COLOR
   value: pink

2. configmap

create it and then inject it

kubectl create configmap (imperative) ㅑor cm

```
kubectl create configmap <config-name> --from-literal=<key>=<value> --from-literal=<key>=<value> --from-literal=<key>=<value> 

or

kubectl create configmap <config-name> --from-file=<path-to-file>
```

apiVersion, kind, metadata, data

```
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  KEY: value
  KEYL value
```

config map in pods

spec:
  containers:

    envFrom:
      - configMapRef:
          name: app-config

multiple ways: env, single env, volume
under spec, envFrom: 



3. secrets 

secretes are used to store sensitive data

1. create secreat
imp
kubectl creaste secret generic <secret-name> --frop-literal=<key>=<value>

dec

echo -n 'mysql' | base64
plain text to encoded?


echo -n 'mysql' | base64 --decode


injectsecret

envFrom:
  - secretRef:
      name: app-secret

if secretes in pods are in from of volumes, each key-value pairs become a new file

2. inject pod


containers and host share the same kernel

definition on the pod -> applies to all containers in the pod
           on the container -> override the def on pod

spec or containers:
           securityContext:
             runAsUser: 1000 (userId for the pod)
             capabilities: # only supported at the container level
               add: 

kubectl exec <pod-name> --whoami

kubectl exec (POD | TYPE/NAME) [-c CONTAINER] [flags] -- COMMAND [args...] [options]



service account(by machine) vs user account(yused by human, admin/developer)

monitoring application like prometheous

jenkins service account to deploy application



service account

kubectl get serviceaccount

token is created automaitcally
kubectl describe servi

kubectl describe secreaste <token>

whenever a pod is created a service account is created

kubectl exec -it <ija>


resource requirement

taint ^ toleration

pod - node relationship

what they are


taint

kubectl taint nodes noe-name ky=-value:taint-effect

NoSchedule | PreferNoSchedule | NoExecute

kubectl taint nodes node1 app=blue:NoSchedule

toleration applied to pods

spec:
  tolerations:
   - key: app
     operator: "Equal"
     vlaue: "blue"
     effect: "NoSchedule"


root@controlplane:~# kubectl taint nodes controlplane node-role.kubernetes.io/master:NoSchedule-

untaint

node selector

label node

kubectl label nodes <node-name> <label-key>=<value>

in pod -> nodeSelector

however only single option

node affinity are introduced



affinity:
  nodeAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
      nodeSelectorTerms:
      - matchExpressions:
        - key: size
          operator: In / NotIn
          values:
          - Large

nodeAffinityTypes

reqDuringScheduiluingIgronoededuringExe
preffered

DuringScheduling(pod does not exist)ㄱ DuringExecution


multicontainerpods

different pattern

ambassador, adapter

sidecar


sidecar (logging)

adapter