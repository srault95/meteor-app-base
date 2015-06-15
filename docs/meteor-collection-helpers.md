# collection-helpers

**Ajoute des fonctions aux collections**

https://github.com/dburles/meteor-collection-helpers

## Installation

```sh
$ meteor add dburles:collection-helpers
```

## Utilisation

**Dans Javascript:**

```javascript
AppInstances.helpers({
  hosts: function () {
	var dockerHosts = this.dockerHosts || [];
	return Hosts.find({_id: {$in: dockerHosts}}).fetch();  // fetch ??
  },
});
```

**Dans les templates:**

```
<th>Hosts</th>
<td>
  {{#each hosts}}
  <div>
	<a href="http://{{this.publicHost}}" target="_blank">{{this.publicHost}}</a>
  </div>
  {{/each}}
</td>
```
