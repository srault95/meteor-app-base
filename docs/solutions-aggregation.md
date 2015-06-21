# Solutions d'aggrégation

* https://atmospherejs.com/doctorpangloss/mongodb-server-aggregation
* https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/aggregation.md
* https://github.com/awatson1978/meteor-cookbook/blob/master/cookbook/collection-aggregation.md
* https://atmospherejs.com/doctorpangloss/mongodb-server-aggregation

## meteorhacks-aggregate

```
$ meteor add meteorhacks:aggregate
```

```js
var metrics = new Mongo.Collection('metrics');
var pipeline = [
  {$group: {_id: null, resTime: {$sum: "$resTime"}}}
];
var result = metrics.aggregate(pipeline);
```

