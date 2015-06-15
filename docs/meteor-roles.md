# Meteor Roles

https://github.com/alanning/meteor-roles

## Installation

```sh

$ meteor add accounts-password
$ meteor add alanning:roles

```

**La collection n'est pas publié par défaut, il faut le faire avec:**

```javascript

// server/publish.js
Meteor.publish(null, function (){
  return Meteor.roles.find({})
})

```

## Assigner des rôles au démarrage du server

https://github.com/alanning/meteor-roles/blob/master/examples/rolesWithAccountsUI/server/startup.js
https://github.com/alanning/meteor-roles/blob/master/examples/iron-router/server/server.js

## Création de roles au démarrage

## Assigner automatiquement un role par default

  # Coté startup - server:
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

  Roles.addUsersToRoles(userId, 'admin')

  Roles.addUsersToRoles(userId, ['view-secrets'], 'example.com')

  Roles.addUsersToRoles([user1, user2], ['user','editor'])

  Roles.addUsersToRoles([user1, user2], ['glorious-admin', 'perform-action'], 'example.org')

  Roles.addUsersToRoles(userId, 'admin', Roles.GLOBAL_GROUP)


