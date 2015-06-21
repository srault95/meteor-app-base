# Router iron-router

* https://github.com/iron-meteor/iron-router/blob/devel/Guide.md
* http://robertdickert.com/blog/2014/05/08/iron-router-first-steps/
* https://github.com/zimme/meteor-iron-router-auth.git

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
