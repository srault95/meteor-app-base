# publish-counts

Gère des compteurs de collection pour des statistiques par exemple.

https://github.com/percolatestudio/publish-counts

```sh
$ meteor add tmeasday:publish-counts
```

**Définition d'une collection:**

```js

Players = new Mongo.Collection("players");

```
**Coté Server:**

```js

Meteor.publish('stats', function() {
    Counts.publish(this, 'player_total', Players.find());
});

```

**Coté Client:**

```js

Meteor.subscribe('stats');

```

```

<template name="stats">
    <span>Total players : {{getPublishedCount "player_total"}}</span>
</template>

```

