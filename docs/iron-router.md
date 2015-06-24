# Router iron-router

* https://github.com/iron-meteor/iron-router
* http://iron-meteor.github.io/iron-router
* http://fr.discovermeteor.com/chapters/routing/
* http://robertdickert.com/blog/2014/05/08/iron-router-first-steps/
* http://stackoverflow.com/questions/tagged/iron-router

## Installation

```sh
$ meteor add iron:router
```

**Dépendances:**

```
// main namespace and utils
// https://github.com/iron-meteor/iron-core
iron:core

// ui layout
// https://github.com/iron-meteor/iron-layout
iron:layout

// connect like middleware stack for client/server
// https://github.com/iron-meteor/iron-middleware-stack
iron:middleware-stack

// client and server side url utilities and compiling
// https://github.com/iron-meteor/iron-url
iron:url

// for reactive urls and pushState in the browser
// https://github.com/iron-meteor/iron-location
iron:location

// for RouteController which inherits from this
// https://github.com/iron-meteor/iron-controller
iron:controller
```

## Les différentes façon de déclarer et gérer des routes

```js

// La plus simple: cherchera un template name="home" et la route pourra être nommé "home"
// Dans un template, la route pourra être appellé avec {{pathFor route='home'}}
Router.route('/home');

// Même chose mais en changeant des options comme le nom de la route
// Le template devra s'appellé myhome
// Dans un template, la route sera appellé avec {{pathFor route='myhome'}}
Router.route('/home', {name: "myhome"});

// Définit dans une fonction
Router.route('/home', function () {
  this.render('home');
});

// Fonction et options
Router.route('/home', function () {
  this.render('home');
}, {
  name: 'myhome'
});

```

## Tous les paramètres de Router.route()

```js
Router.route('/post/:_id', {
  name: 'post.show',

  path: '/post/:_id',

  controller: 'CustomController',

  template: 'Post',

  layoutTemplate: 'ApplicationLayout',

  yieldRegions: {
    'MyAside': {to: 'aside'},
    'MyFooter': {to: 'footer'}
  },

  subscriptions: function() {
    this.subscribe('items');
    this.subscribe('item', this.params._id).wait();
  },

  waitOn: function () {
    return Meteor.subscribe('post', this.params._id);
  },

  data: function () {
    return Posts.findOne({_id: this.params._id});
  },

  onRun: function () {},
  onRerun: function () {},
  onBeforeAction: function () {},
  onAfterAction: function () {},
  onStop: function () {},

  action: function () {
    this.render();
  }
});
```

## Options par défaut pour toutes les routes

Tous les paramètres de Router.route() peuvent être définit avec une valeur par défaut dans:

```js
Router.configure({
  layoutTemplate: 'ApplicationLayout',
});
```

## Hooks

### onBeforeAction

```js
Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    this.render('login');
  } else {
    this.next();
  }
});
```

## Plugins

## Tips

### Trouver le nom de la route en cours

```js
Router.current().route.getName()
```

## Extensions Iron-Router

Les extensions marqués d'un (*) sont ceux que je considère comme les plus utiles.

### iron-dynamic-template

* https://github.com/iron-meteor/iron-dynamic-template

### iron-router-auth (*)

* https://atmospherejs.com/zimme/iron-router-auth

```sh
$ meteor add zimme:iron-router-auth
```

```
	- Définir routes public/privés: (dans client/views/router.js)
		> ou avec https://github.com/zimme/meteor-iron-router-auth
		var publicRoutes = ["home_public", "login", "register", "forgot_password", "reset_password"];
		var privateRoutes = ["applications", "applications.insert", "applications.edit", "applications.details", "applications.details.form_view", "applications.details.sitemap", "applications.details.database", "applications.details.json_view", "applications.details.console", "admin", "admin.users", "admin.users.details", "admin.users.insert", "admin.users.edit", "user_settings", "user_settings.profile", "user_settings.change_pass", "logout"];
		var zonelessRoutes = ["getting_started", "examples", "api_reference", "version_history", "contribute", "donate"];
	- Et utiliser hook (exemple site kitchen)
		Router.onBeforeAction(Router.ensureNotLogged, {only: publicRoutes});
		Router.onBeforeAction(Router.ensureLogged, {only: privateRoutes});
```

### iron-router-progress (*)

Affiche une barre de progression ou un spinner d'attente.

* https://atmospherejs.com/multiply/iron-router-progress

```sh
$ meteor add multiply:iron-router-progress
```

### iron-router-breadcrumb (*)

* https://atmospherejs.com/monbro/iron-router-breadcrumb
* http://meteor-breadcrumb-plugin-basic-example.meteor.com/

A l'aide des paramètres supplémentaires "parent" et "title" dans la définition des routes, permet d'avoir une barre:
```
# Pour le lien: /dashboard/analytics/books
Dashboard / Analytics / Category Books
```

Non dépendant de Bootstrap

```sh
$ meteor add monbro:iron-router-breadcrumb
```

### iron-router-i18n (*)

Internationalisation des routes.

* https://atmospherejs.com/martino/iron-router-i18n
* https://atmospherejs.com/martino/i18n-conf

```sh
$ meteor add martino:iron-router-i18n
$ meteor add martino:i18n-conf
```


### iron-router-ga

Aide à la création de routes personnalisés pour Google Analytic

* https://atmospherejs.com/reywood/iron-router-ga
* https://github.com/reywood/meteor-iron-router-ga/

```sh
$ meteor add reywood:iron-router-ga
```

### iron-router-autoscroll

TODO: Comprendre l'usage

* https://atmospherejs.com/okgrow/iron-router-autoscroll

## Souscription

Plusieurs méthodes

Idée: définir un controlleur global à hérité et y placer des subscribe commun comme les Users

### Dans un Router.route

```js
Router.route('/post/:_id', {
  subscriptions: function() {
    this.subscribe('items');
    this.subscribe('item', this.params._id).wait();
  },
});
```
### waitOn vs subscriptions

- L'avantage de waitOn est d'y placer aussi d'autres attente (wait) que les souscriptions

```js
  waitOn: function () {
    return Meteor.subscribe('post', this.params._id);
  },
```

### Dans un controlleur

```js
PostController = RouteController.extend();
```

* http://www.manuel-schoebel.com/blog/meteorjs-iron-router-filters-before-and-after-hooks

```js
// Hook onBeforeAction
Router.map(function () {
    this.route('postShow', {
        path: '/posts/:_id',

        onBeforeAction: function (pause) {
            if (!Meteor.user()) {
            // render the login template but keep the url in the browser the same
            this.render('login');
        }
    }
}
```
