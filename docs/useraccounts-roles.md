# Meteor Roles

* https://atmospherejs.com/alanning/roles
* https://github.com/alanning/meteor-roles

* https://www.discovermeteor.com/blog/allow-deny-a-security-primer/
  * https://www.discovermeteor.com/blog/allow-deny-challenge-results/

# Références

* https://atmospherejs.com/ongoworks/security
  * https://github.com/ongoworks/meteor-security
* https://atmospherejs.com/ryw/blog

## TODO

  Filtrer les publish selon roles et appartenance au group
    - Role: ?
    - Récupérer group d'un user et utiliser find({'$in': []})

  Allow
    - insert
      - Role (pas de group)
    - update
      - Le group du user doit être dans le champs owner_group
    - remove

## Tips - SimpleSchema - Ajout auto d'un champs owner

  Schemas.Posts = new SimpleSchema({
    title: {
      type: String,
      max: 60
    },
    owner: {
      type: String,
      regEx: SimpleSchema.RegEx.Id,
      autoValue: function() {
        if (this.isInsert) {
          return Meteor.userId();
        }
      },
      autoform: {
        options: function() {
          return _.map(Meteor.users.find().fetch(), function(user) {
            return {
              label: user.emails[0].address,
              value: user._id
            };
          });
        }
      }
    }
  });

## Références - Utilisé par

* https://atmospherejs.com/yogiben/admin
* https://atmospherejs.com/reactioncommerce/core

## Les différentes solutions

    https://github.com/perak/user-roles
    https://github.com/nicolaslopezj/roles
        - Utiliser par cms orion
    https://github.com/possibilities/meteor-groups

## Ajout au modèle utilisateur

  Groupe Global
  {
    "_id" : "jdJpzpvCvqr9ZrXvm",
    "username" : "admin",
    ...
    "roles" : {
        "__global_roles__" : [
                "admin"
        ]
    }
  }

  Groupe client1
    "roles" : {
        "group1" : [
                "client"
        ]
    }

## Installation

```sh

$ meteor add accounts-password
$ meteor add alanning:roles
```

**La collection n'est pas publié par défaut, il faut le faire avec:**

```js
// server/publish.js
Meteor.publish(null, function (){
  return Meteor.roles.find({})
});

```

## Créer / Supprimer des roles - hors user

```js
Roles.createRole(role);

Roles.deleteRole(role);

// Refuse la suppression, si le role est affecté à des utilisateurs:

var foundExistingUser = Meteor.users.findOne({roles: {$in: [role]}},{fields: {_id: 1}})

```

## Liste des roles d'un utilisateur

Renvoi un tableau de String non trié des roles du user

```js
Roles.getRolesForUser(user_or_userid, optional_group);
```

## Liste des utilisateurs pour un role

Retour un curseur des Meteor.users pour ce role

```js
Roles.getUsersInRole(role, group);
```

## Liste des groupes d'un utilisateur

Renvoi un tableau des groupes non trié

```js
Roles.getGroupsForUser(user_or_userid, optional_role);
```

## Controlleur personnalisé avec vérification des droits par route

Vérifie avant (onBeforeAction) si l'utilisateur à la permission pour cette route

```
ShopAdminController = this.ShopController.extend({
  onBeforeAction: function() {
    if (!ReactionCore.hasPermission(this.route.getName())) {
      this.render('unauthorized', {
        to: 'main'
      });
    } else {
      this.next();
    }
  }
});
```

## Assigner des rôles au démarrage du server

https://github.com/alanning/meteor-roles/blob/master/examples/rolesWithAccountsUI/server/startup.js
https://github.com/alanning/meteor-roles/blob/master/examples/iron-router/server/server.js

## Supprimer les roles d'un utilisateur

A faire avant la suppression d'un utilisateur

```js
Roles.setUserRoles(targetUserId, [], group)
```

## Utilisation dans les Allow - Deny

```
BlacklistIp.allow({
  insert: function (userId, doc) {
    //error.invalidKeys` or by calling Books.simpleSchema().namedContext().invalidKeys()
    //error.reason
    return !! userId;
    //return true;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return true;
  },

  remove: function (userId, doc) {
    return true;
  }
});
```


## Assigner automatiquement un role par default

Intercepte la création d'un utilisateur par la méthode Accounts.createUser()

  // server/methods.js
  Accounts.onCreateUser(function (options, user) {
    Roles.setRolesOnUserObj(user, ['admin','view-secrets']);
    return user
  });

## Tips - Limiter la création d'utilisateurs

**Autoriser seulement la création pour les roles admin ou manage-users:**

```javascript

//common
Accounts.validateNewUser(function (user) {
    var loggedInUser = Meteor.user();

    if (Roles.userIsInRole(loggedInUser, ['admin','manage-users'])) {
      return true;
    }

    throw new Meteor.Error(403, "Not authorized to create new users");
});

```

## Tips - Exemple de filtrage des données coté server - Par Groupe utilisateur

```javascript

// server/publish.js
Meteor.publish('secrets', function (group) {
  if (Roles.userIsInRole(this.userId, ['view-secrets','admin'], group)) {

    return Meteor.secrets.find({group: group});

  } else {

    // user not authorized. do not publish secrets
    this.stop();
    return;

  }
});

```

## Utilisation dans les templates

```

<template name="header">
  {{#if isInRole 'admin'}}
    {{> admin_nav}}
  {{/if}}
  {{#if isInRole 'admin,editor'}}
    {{> editor_stuff}}
  {{/if}}
</template>

// Limiter au group1 avec le role admin ou editor
<template name="header">
  {{#if isInRole 'admin,editor' 'group1'}}
    {{> editor_stuff}}
  {{/if}}
</template>

```

## Collections

* Meteor.roles
* Modifie Meteor.users

## Ajout de role

* users Array | String
* roles Array | String
* group String optional (default Roles.GLOBAL_GROUP)


  addUsersToRoles vs setUserRoles:
    addUsersToRoles: ajoute un ou plusieurs roles
    setUserRoles: affecte ou remplace les roles


  Roles.addUsersToRoles(userId, 'admin')

  Roles.addUsersToRoles(userId, ['view-secrets'], 'example.com')

  Roles.addUsersToRoles([user1, user2], ['user','editor'])

  Roles.addUsersToRoles([user1, user2], ['glorious-admin', 'perform-action'], 'example.org')

  Roles.addUsersToRoles(userId, 'admin', Roles.GLOBAL_GROUP)

## Extension ongoworks-security

* https://atmospherejs.com/ongoworks/security
* https://github.com/reactioncommerce/reaction-core/blob/5d719c2a74ea6c0e125ad5113af39859f697bf03/server/security.coffee

```sh
$ meteor add ongoworks:security
```

Affecte des permissions par collection

```js
// server/security.js:

// Any client may insert, update, or remove a post without restriction
Posts.permit(['insert', 'update', 'remove']).apply();

// No clients may insert, update, or remove posts
Posts.permit(['insert', 'update', 'remove']).never().apply();

// Clients may insert posts only if a user is logged in
Posts.permit('insert').ifLoggedIn().apply();

// Clients may remove posts only if an admin user is logged in
Posts.permit('remove').ifHasRole('admin').apply();

// Admin users may update any properties of any post, but regular users may
// update posts only if they don't try to change the `author` or `date` properties
Posts.permit('update').ifHasRole('admin').apply();
Posts.permit('update').ifLoggedIn().exceptProps(['author', 'date']).apply();
```

**Méthodes chainables:**

  never() - Jamais

  ifLoggedIn() - Si l'utilisateur est authentifié

  ifHasUserId(userId) - N'autorise que le userid

  ifHasRole(role) - Autorise si l'utilisateur à le role

  ifHasRole({role: 'admin', group: 'mygroup'}

  ifHasRole({role: role, group: group})

  onlyProps(props) - N'autorise que la modification de ces champs

  exceptProps(['owner', 'owner_group'])

  exceptProps(props) - ?

### Personnalisation de methods

```js

// usage: Posts.permit('remove').ifLoggedIn().apply();
Security.defineMethod("ifLoggedIn", {
  fetch: [],
  transform: null,
  deny: function (type, arg, userId) {
    return !userId;
  }
});

// ifHasUserId
Security.defineMethod("ifHasUserId", {
  fetch: [],
  transform: null,
  deny: function (type, arg, userId) {
    return userId !== arg;
  }
});

Security.defineMethod("ifIsCurrentUser", {
  fetch: [],
  transform: null,
  deny: function (type, arg, userId, doc) {
    return userId !== doc._id;
  }
});
```