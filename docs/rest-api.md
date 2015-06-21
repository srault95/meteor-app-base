# Rest APIs

## restivus

API Rest

https://atmospherejs.com/nimble/restivus

###Installation

```sh
$ meteor add nimble:restivus
```

### Configuration rapide

```js

Items = new Mongo.Collection('items');

if (Meteor.isServer) {

  Restivus.configure({
    useAuth: true,
    prettyJson: true
  });

  // Generates: GET, POST, DELETE on /api/items and GET, PUT, DELETE on
  // /api/items/:id for Items collection
  Restivus.addCollection(Items);

}

```

### Collection Meteor.users

    Restivus.addCollection(Meteor.users, {
        excludedEndpoints: ['deleteAll', 'put'],
        routeOptions: {
          authRequired: true
        },
        endpoints: {
          post: {
            authRequired: false
          },
          delete: {
            roleRequired: 'admin'
          }
        }
    });

#### Particularités du POST de la collection Meteor.users

Seuls les champs reconnus par Accounts.createUser() sont autorisés dans le POST

Ces champs sont: email, username, password, et profile

Solution: il faut surement personnalisé avec l'utilisation d'un Accounts.setPassword(userId, newPassword, [options])

  POST http://localhost:3000/api/users

  {
    "email": "jack@mail.com",
    "password": "password",
    "profile": {
      "firstName": "Jack",
      "lastName": "Rose"
    }
  }

## collectionapi

https://github.com/xcv58/meteor-collectionapi

https://github.com/xcv58/meteor-collectionapi-demo/blob/cf233f31d973191e6cd4510ed5e017ad695b33f8/server/restful.js#L36

Fournit un serveur dédié à l'api, indépendant de l'application.

**Fonctionnalités:**
* Authentification custom



### Configuration rapide

Players = new Meteor.Collection("players");

    if (Meteor.isServer) {
      Meteor.startup(function () {
        collectionApi = new CollectionAPI({ authToken: '97f0ad9e24ca5e0408a269748d7fe0a0' });
        collectionApi.addCollection(Players, 'players');
        collectionApi.start();
      });
    }


    $ curl -H "X-Auth-Token: 97f0ad9e24ca5e0408a269748d7fe0a0" http://localhost:3000/collectionapi/players