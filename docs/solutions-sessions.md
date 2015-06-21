# Solution de sessions

## Session permanente coté server

```js

ServerSessions = new Mongo.Collection("Sessions");

Meteor.publish('Sessions', function(id) {
  var created, serverSession;
  check(id, Match.OneOf(String, null));
  created = new Date().getTime();
  if (!id) {
    id = ServerSessions.insert({
      created: created
    });
  }
  serverSession = ServerSessions.find(id);
  if (serverSession.count() === 0) {
    id = ServerSessions.insert({
      created: created
    });
    serverSession = ServerSessions.find(id);
  }
  return serverSession;
});
```