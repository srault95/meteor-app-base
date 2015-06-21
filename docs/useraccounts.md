# useraccounts

* https://github.com/meteor-useraccounts/core/blob/master/Guide.md
* https://atmospherejs.com/useraccounts/core
* https://github.com/meteor-useraccounts/core/
* https://useraccounts-semantic-ui.meteor.com/
* https://github.com/meteor-useraccounts/semantic-ui

* Démo: http://useraccounts.meteor.com/
* Boilerplate pour chaque besoin: https://github.com/meteor-useraccounts/boilerplates

## TODO

- Définition d'un schéma pour la collection Meteor.users
- Rendre obligatoire l'auth sur les routes /admin/* par exemple
- Usage de la collection meteor_accounts_loginServiceConfiguration
  - loginServiceConfiguration (DEFAULT_LOGIN_EXPIRATION_DAYS, ...)
  - https://github.com/meteor/meteor/blob/master/packages/accounts-base/accounts_common.js#L55
- Hooks standard: Accounts.onLogin, Accounts.onLoginFailure

## Introduction

useraccounts:core fournit toutes les fonctions de base mais aucun template.

il faut utiliser une des extensions comme useraccounts:semantic-ui pour obtenir des templates.

Exemple avec le bouton de connection:

```
{{> atNavButton}}

```

* Le code correspondant se trouve dans:
    * https://github.com/meteor-useraccounts/semantic-ui/blob/master/lib/at_nav_button.html
    * https://github.com/meteor-useraccounts/semantic-ui/blob/master/lib/at_nav_button.js

## Relation avec les packages standard Meteor

* https://www.meteor.com/accounts

    A priori, appartient à accounts-ui-unstyled - https://github.com/meteor/meteor/tree/devel/packages/accounts-ui-unstyled
    passwordSignupFields: 'EMAIL_ONLY'

    Accounts.ui.config({
      requestPermissions: {
        facebook: ['user_likes'],
        github: ['user', 'repo']
      },
      requestOfflineToken: {
        google: true
      },
      passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL' //  'USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL', 'USERNAME_ONLY', or 'EMAIL_ONLY' (default).
    });

    Accounts.validateLoginAttempt
    Accounts.onLoginFailure
    Accounts.onLogin
    Meteor.logoutOtherClients
    //locked-account or unauthorized-ip.
    Meteor.user()
    Meteor.loggingIn()

    accounts-ui
        Accounts.loginWithPassword, Accounts.loginWithFacebook, Accounts.createUser and Accounts.forgotPassword

## Exemple d'Installation - Authentification par mot de passe - Templates Semantic-ui

- Ne pas installer accounts-ui ?
- Le package installe déjà useraccounts:core accounts-base
- Il ne faut pas installer directement le package useraccounts:core mais son implémentation selon le framework utilisé
- Installer les packages providers comme accounts-password, accounts-github, ... selon les besoins

```sh
$ meteor add accounts-password
$ meteor add semantic:ui-css
$ meteor add useraccounts:semantic-ui
```

## Plugin ensureSignedIn

- Rend obligatoire l'authentification pour toutes les routes

```js

Router.plugin('ensureSignedIn');

```

- Rend obligatoire l'authentification pour les routes placés dans only[]

- Voir différence avec AccountsTemplates.configureRoute('ensureSignedIn') ?

```js

Router.plugin('ensureSignedIn', {
  only: ['private']
});

```

- Rend obligatoire l'authentification pour toutes les routes sauf celles placés dans except[]

```js

Router.plugin('ensureSignedIn', {
    except: ['home', 'atSignIn', 'atSignUp', 'atForgotPassword']
});

```

- Personnalisation du template et layout

```js

AccountsTemplates.configureRoute('ensureSignedIn', {
    template: 'myLogin',
    layoutTemplate: 'myLayout',
});

```

## Api

- Package inclus avec Meteor: Account, AccountsServer
    - Coté client, Accounts = new AccountsClient();
    - Coté server, Accounts = new AccountsServer(Meteor.server);
    - Meteor.users est remplacé par Accounts.users

## Template atForm

- Par exemple pour customiser le template d'authentification, placez dans un template

```
{{> atForm state='signUp'}}

OU

{{> atForm}} car le state par défaut est signUp

```

## States

    changePwd	            Formulaire de changement de mot de passe

    enrollAccount	        Formulaire d'inscription ???

    forgotPwd	            Formulaire pour saisir une email à laquelle sera envoyé le lien de récupération de mot de passe

    hide	                Aucun

    resendVerificationEmail	Envoi d'un nouveau mail de vérification

    resetPwd	            Réinitialisation du mot de passe

    signIn	                Formulaire d'authentification

    signUp	                ?

    verifyEmail	            Résultat après avoir cliqué sur le lien de récupération de mot de passe reçu par mail

## Bouton atNavButton

```

```

## Configuration

- https://github.com/meteor-useraccounts/core/blob/master/Guide.md

- Placez la configuration dans lib/config/at_config.js

### Routage

Il n'y a aucune route par défaut.

La définition des routes par AccountsTemplates.configureRoute() s'utilise comme les routes habituels d'Iron Router

Chaque route peut être définit avec ses paramètres par défaut ou personnalisé

```js

AccountsTemplates.configureRoute('signIn');

AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/login',
    template: 'myLogin',
    layoutTemplate: 'myLayout',
    redirect: '/user-profile',
});

AccountsTemplates.configureRoute('signIn', {
    // Redirige vers /user/ae8WQQk6DrtDzA2AZ après une authentification réussie
    redirect: function(){
        var user = Meteor.user();
        if (user)
          Router.go('/user/' + user._id);
    }
});

```


### Exemple de configuration complète

```js

// lib/config/at_config.js
AccountsTemplates.configure({
    // Behaviour
    confirmPassword: true,                  // (default: true) - Demande la confirmation du mot de passe (register)
    defaultState: "signIn",                 // (default: signIn) - State par défaut
    enablePasswordChange: true,             // (default: false) - Active la fonction de changement de mot de passe
    enforceEmailVerification: false,        // (default: false) - experimental - A utiliser seulement avec le service accounts-password

    forbidClientAccountCreation: false,     // (default: false) - Si true, désactive l'enregistrement
                                            // Remplace Accounts.config({forbidClientAccountCreation : true});

    overrideLoginErrors: true,              // (default: true) - Si true, affiche erreur générique de connection sans préciser si mauvais login ou pass
    sendVerificationEmail: false,           // (default: false) - Si true, envoi un lien de confirmation par mail pour chaque nouvel utilisateur
    redirectTimeout: 2000,                  // (default: 2000) - Timeout de redirection après: enrollAccount, forgotPwd, resetPwd, ou verifyEmail
    lowercaseUsername: false,               // (default: false) - A REVOIR
    socialLoginStyle: 'popup',              // (default: popup) - Voir LoginStyle - choix (redirect, popup)
                                            // Si popup, ouvre la page d'authentification du service dans un modal

    // Appearance
    defaultLayout: undefined,               // (default: undefined)
    hideSignInLink: false,                  // (default: false) - Si true, n'affiche jamais le lien de connection
    hideSignUpLink: false,                  // (default: false) - Si true, n'affiche jamais le lien de déconnection
    showAddRemoveServices: false,           // (default: false) - A revoir - en rapport avec synchro comptes sociaux - https://atmospherejs.com/splendido/accounts-meld
    showForgotPasswordLink: false,          // (default: false) - Si true, affiche lien de récupération de mot de passe
    showLabels: true,                       // (default: true) - si true, affiche les label au dessous des champs dans les formulaires
    showPlaceholders: true,                 // (default: false) - si true, Affiche les placeholders dans les champs
    showResendVerificationEmailLink: false, // (default: false) - Si true, affiche le lien pour envoyer à nouveau le mail de vérification

    // Client-side Validation
    continuousValidation: false,            // (default: false) - Active la validation coté client pendant la saisie
    negativeFeedback: false,                // (default: false) - continuousValidation
    negativeValidation: true,               // (default: false) - continuousValidation
    positiveValidation: true,               // (default: false) - continuousValidation
    positiveFeedback: true,                 // (default: false) - continuousValidation
    showValidating: true,                   // (default: false) -

    // Links
    homeRoutePath: '/',                     // (default: /) - Pas Home pour les redirections
    //privacyUrl: 'privacy',                // (default: undefined) - Affiche lien ?
    //termsUrl: 'terms-of-use',             // (default: undefined) - Affiche lien ?

    // Hooks
    //onLogoutHook: myLogoutFunc,           // Hook de routage appellé par AccountsTemplates.logout
    //onSubmitHook: mySubmitFunc,           // Hook appellé quand submit d'un des formulaire est ok - func(error, state)
    //preSignUpHook: myPreSubmitFunc,       // Comme ci-dessous mais appellé avant submit - func(password, info)

    // Texts customization
    /*
    texts: {
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },
    */
});

```

### Configuration ReCapcha

[recaptcha](https://www.google.com/recaptcha/intro/index.html)

Les clés peuvent se configurer ici ou dans Meteor.Settings ou dans settings.json

```js
AccountsTemplates.configure({
    reCaptcha: {
        siteKey: YOUR SITE KEY,
        secretKey: YOUR SECRET KEY,
        theme: "light", // light ou dark
        data_type: "image" // image ou audio
    },
    showReCaptcha: true
});

```

### Exemple de SubmitHook

```js

var mySubmitFunc = function(error, state){
  if (!error) {
    if (state === "signIn") {
      // Successfully logged in
      // ...
    }
    if (state === "signUp") {
      // Successfully registered
      // ...
    }
  }
};

AccountsTemplates.configure({
    onSubmitHook: mySubmitFunc
});
```

# Personnalisation de la structure des champs de formulaire

Exemple de personnalisation des champs avec **aldeed:template-extension** pour le package [useraccounts:semantic-ui](https://gist.github.com/dalgard/a844f6569d8f471db9a7)

## Champs spéciaux qu'il faut supprimer avant de redéfinir

    current_password
    email
    password
    password_again
    username
    username_and_email

### Exemple avec le champs password

```js
AccountsTemplates.removeField('password');
AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 6,
    re: /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
    errStr: 'At least 1 digit, 1 lower-case and 1 upper-case',
});
```

### Particularité de la customisation des champs username ou email

Il faut impérativement supprimer le champs password avant de rédéfinir username ou password

Pour ne pas avoir à définir à nouveau password, procédez comme ci-dessous:

```js
var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  pwd
]);
```

## Changement de la politique de mot de passe

**Demande un mot de passe d'au minimum 6 caractères

```js
AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    placeholder: {
        signUp: "At least six characters"
    },
    required: true,
    minLength: 6,
    re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
    errStr: 'At least 1 digit, 1 lowercase and 1 uppercase',
});
```

## Ajoute un champs téléphone

**Champs phone avec validation coté serveur (fonction isValidPhone à définir):**

```js
AccountsTemplates.addField({
    _id: 'phone',
    type: 'tel',
    displayName: "Phone",
    required: true,
    func: function (number) {
        if (Meteor.isServer){
          if (isValidPhone(number))
              return false; // meaning no error!
          return true; // Validation error!
        }
    },
    errStr: 'Invalid Phone number!',
});
```

## Vérifie si le username existe déjà

```js
// server/methods.js
if (Meteor.isServer){
    Meteor.methods({
        "userExists": function(username){
            return !!Meteor.users.findOne({username: username});
        },
    });
}

// lib/config/at_config.js
AccountsTemplates.addField({
    _id: 'username',
    type: 'text',
    required: true,
    func: function(value){
        if (Meteor.isClient) {
            console.log("Validating username...");
            var self = this;
            Meteor.call("userExists", value, function(err, userExists){
                if (!userExists)
                    self.setSuccess();
                else
                    self.setError(userExists);
                self.setValidating(false);
            });
            return;
        }
        // Server
        return Meteor.call("userExists", value);
    },
});
```

**VOIR AUSSI:**

```
//Dans la définition d'un schéma
username: {
  type: String,
  regEx: /^[a-z0-9A-Z_]{3,15}$/,
  unique: true,
  custom: function () {
    if (Meteor.isClient && this.isSet) {
      Meteor.call("accountsIsUsernameAvailable", this.value, function (error, result) {
        if (!result) {
          Meteor.users.simpleSchema().namedContext("createUserForm").addInvalidKeys([{name: "username", type: "notUnique"}]);
        }
      });
    }
  }
}
```

## Ajout d'un champs Genre

```js
AccountsTemplates.addField({
    _id: "gender",
    type: "select",
    displayName: "Gender",
    select: [
        {
            text: "Male",
            value: "male",
        },
        {
            text: "Female",
            value: "female",
        },
    ],
});
```

## Champs de souscription à la mailing list

```js
AccountsTemplates.addField({
    _id: "mailing_list",
    type: "checkbox",
    displayName: "Subscribe me to mailing List",
});
```

## Champs caché contenant un code de validation

```js
// http://my.splendido.site/sign-up?email=giorgio@example.com&reg_code=123
AccountsTemplates.addField({
    _id: 'reg_code',
    type: 'hidden'
});
```

# Internationalisation - i18n

[accounts-t9n](https://atmospherejs.com/softwarerero/accounts-t9n)

```sh
$ meteor add softwarerero:accounts-t9n
```

```js
// /lib/config/at_config.js
T9n.setLanguage("fr");
```

# Personnalisation des formulaires UI

Requis: [template-extension](https://github.com/aldeed/meteor-template-extension)

```sh
$ meteor add aldeed:template-extension
```

```
<template name="appAtInput">
  {{#if options.dividerBefore}}<hr>{{/if}}

  {{> Template.dynamic template=templateName}}
</template>
```

```js
AccountsTemplates.addField({
  _id: "address",
  type: "text",

  // Options qui seront passés au formulaire
  options: {
    dividerBefore: true
  }
});

Template.appAtInput.replaces("atInput");
```

# Solution complète avec semantic-ui - hors authentification sociale

## Installation

```sh
$ meteor add accounts-ui-unstyled
$ meteor add accounts-password
$ meteor add semantic:ui-css
$ meteor add softwarerero:accounts-t9n
$ meteor add useraccounts:semantic-ui

# OU
$ meteor add accounts-ui-unstyled accounts-password semantic:ui-css softwarerero:accounts-t9n useraccounts:semantic-ui

# OU pour iron cli
$ iron add accounts-ui-unstyled accounts-password semantic:ui-css softwarerero:accounts-t9n useraccounts:semantic-ui

```

**Dépendances:**

    less
    reactive-var
    http
    underscore
    accounts-base
    reactive-dict
    check
    meteor
    templating
    blaze
    useraccounts:core
    iron:router
    softwarerero:accounts-t9n

## Configuration


# Tips - Solution dédié mobile avec Ratchet

* https://atmospherejs.com/useraccounts/ratchet

# Structure d'un enregistrement d'un compte utilisateur

* La structure peut varier mais il y a des éléments important à noter:
    * emails est une liste d'objet
    * services est une collections avec comme clé, le nom du service

```
{
  _id: "bbca5d6a-2156-41c4-89da-0329e8c99a4f",  // Meteor.userId()
  username: "cool_kid_13", // unique name
  emails: [
    { address: "cool@example.com", verified: true },
    { address: "another@different.com", verified: false }
  ],
  createdAt: Wed Aug 21 2013 15:16:52 GMT-0700 (PDT),
  profile: {
    name: "Joe Schmoe"
  },
  services: {
    facebook: {
      id: "709050", // facebook id
      accessToken: "AAACCgdX7G2...AbV9AZDZD"
    },
    resume: {
      loginTokens: [
        { token: "97e8c205-c7e4-47c9-9bea-8e2ccc0694cd",
          when: 1349761684048 }
      ]
    }
  }
}


```

# Tips - Publish - Liste des utilisateurs

* Source [meteor-cookbook](https://github.com/awatson1978/meteor-cookbook/blob/14e5ecc346665713ba2a336ae74a226a9ae48f4c/cookbook/accounts.md)

```js
// server/publish.js
Meteor.publish("usersDirectory", function () {
  try{
    return Meteor.users.find({}, {fields: {
      '_id': true,
      'username': true,
      'profile': true,
      'profile.name': true,
      'profile.avatar': true,
      'profile.username': true,

      'emails': true,
      'emails[0].address': true,
      'emails.address': true
    }});
  }catch(error){
    console.log(error);
  }
});
```

# Tips - Autres solutions

* https://atmospherejs.com/juliancwirko/s-id
* [Solution Manuelle](http://blog.benmcmahen.com/post/41741539120/building-a-customized-accounts-ui-for-meteor)
* [accounts-entry](https://github.com/Differential/accounts-entry)

# Tips - Profile Utilisateur et préférences

```js

// A VOIR
Meteor.publish("UserProfile", function(profileUserId) {
  var permissions;
  check(profileUserId, Match.OneOf(String, null));
  permissions = ['dashboard/orders', 'owner', 'admin', 'dashboard/customers'];
  if (profileUserId !== this.userId) {
    if (this.userId && (Roles.userIsInRole(this.userId, permissions, ReactionCore.getCurrentShop(this)._id || Roles.userIsInRole(this.userId, permissions, Roles.GLOBAL_GROUP)))) {
      return Meteor.users.find({
        _id: profileUserId
      }, {
        fields: {
          "emails": true,
          "profile.firstName": true,
          "profile.lastName": true,
          "profile.familyName": true,
          "profile.secondName": true,
          "profile.name": true,
          "services.twitter.profile_image_url_https": true,
          "services.facebook.id": true,
          "services.google.picture": true,
          "services.github.username": true,
          "services.instagram.profile_picture": true
        }
      });
    } else {
      ReactionCore.Events.info("user profile access denied");
      return [];
    }
  } else if (this.userId) {
    return Meteor.users.find({
      _id: this.userId
    });
  } else {
    return [];
  }
});
```

# Tips - Intégration de iron-router-auth

* https://github.com/zimme/meteor-iron-router-auth

```sh
$ meteor add zimme:iron-router-auth
```

```
{
  authenticate: {
    home: 'home',
    layout: undefined,
    logout: 'logout',
    replaceState: undefined,
    route: 'login',
    template: undefined
  },
  authorize: {
    allow: function() {return true},
    deny: function() {return false}, // deny overrides allow
    layout: undefined,
    replaceState: undefined,
    route: undefined,
    template: 'notAuthorized'
  },
  except: ['enroll', 'forgotPassword', 'home', 'login', 'reset', 'verify'],
  noAuth: {
    dashboard: 'dashboard',
    home: 'home',
    replaceState: undefined
  },
  only: ['enroll', 'login']
}
```
