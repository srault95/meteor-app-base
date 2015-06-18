

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
        return coreSubscriptions.subscribe("allPostHeaders");
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
    //this.route('settings');

    this.route('piechart');

    this.route('settings', {
        waitOn: function(){
            return coreSubscriptions.subscribe("settings");
        },
        data: function () {
            return Settings.findOne();
        }
    });
});

UserController = RouteController.extend({
    layoutTemplate: 'userLayout',
    yieldTemplates: {
        nav: {to: 'nav'},
        footer: {to: 'footer'},
    },
    subscriptions: function() {
        this.subscribe('users');
    },
});

if (Meteor.isClient) {

    AutoForm.debug();

    Template.userLayout.helpers({
        getTemplateZone1: function () {
         return 'userList';
        },
        getDataContextZone1: function () {
            return {'users': Meteor.users.find().fetch() }
            /*
            var data = [];
            _.each(Meteor.users.find(), function(item){
                console.info("item: ", item);
                data.push(item);
            });
            */
         return {'users': data}
        },
        getTemplateZone2: function () {
         return 'userCreate';
        },
        getDataContextZone2: function () {
            return {}
        }
    });
}

//yieldRegions
/*
RouteController.prototype.lookupRegionTemplates = function () {
  return this.lookupOption('yieldRegions') ||
    // XXX: deprecated
    this.lookupOption('regionTemplates') ||
    this.lookupOption('yieldTemplates') || {};
};
*/

Router.route('/users', {
    name: 'users',
    controller: 'UserController',
});

if (Meteor.isClient){
    var hooksObject = {
        onSuccess: function(formType, result) {
            FlashMessages.sendSuccess("Le document est bien mise à jour.");
            Router.go('home');
        },
    }
    //Valeur du champs id dans le quickform (html)
    AutoForm.addHooks(['updateSetting'], hooksObject);
}

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

