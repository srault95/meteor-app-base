
/*
Router.route('/', {
    name: "home",
    data: function(){
        var posts = Posts.find();
        return {
            posts: posts
        };
    },
    waitOn: function(){
        return Meteor.subscribe("allPostHeaders");
    }
});
*/

Router.configure({
    layoutTemplate: 'masterLayout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'pageNotFound',
    yieldTemplates: {
        nav: {to: 'nav'},
        footer: {to: 'footer'},
    }
});

Router.map(function() {
    this.route('home', {
        path: '/',
    });
    this.route('private');
    this.route('settings');
    this.route('piechart');
});

Router.plugin('ensureSignedIn', {
  only: ['private', 'settings']
});

/*

// meteor-useraccounts - Protège toutes les routes SAUF:
Router.plugin('ensureSignedIn', {
    except: ['leaderboard', 'atSignIn', 'atSignUp', 'atForgotPassword']
});

Ou, protège que ces routes:
Router.plugin('ensureSignedIn', {
    only: ['profile', 'privateStuff']
});
*/

