# Router iron-router

* https://github.com/iron-meteor/iron-router/blob/devel/Guide.md
* http://robertdickert.com/blog/2014/05/08/iron-router-first-steps/
* https://github.com/zimme/meteor-iron-router-auth.git

## Extensions Iron-Router

Les extensions marqués d'un (*) sont ceux que je considère comme les plus utiles.

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
