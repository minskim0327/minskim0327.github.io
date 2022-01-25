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


