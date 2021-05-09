# Object Management

# Table of Contents

1. [Management Techniques](#ManagementTechniques)

## Management Techniques<a name="ManagementTechniques" />

Note that a Kubernetes object should be managed using only one technique. Mixing and matching techniques for the same object results in undefined behavior.

Following are the techniques use to manage Kubernetes object.

- `Imperative Commands`: When using imperative commands, a user operates directly on live objects in a cluster.
- `Imperative object configuration`: kubectl command specifies the operation, optional flags and at least one file name.
- `Declarative object configuartion`: A user operates on object configuration files stored locally, however the user does not define the operations to be taken on the files. Create, update, and delete operations are automatically detected per-object by kubectl. This enables working on directories, where different operations might be needed for different objects.


