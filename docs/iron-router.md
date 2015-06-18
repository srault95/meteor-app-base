# Router iron-router

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
