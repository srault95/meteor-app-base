# useraccounts

* https://github.com/meteor-useraccounts/core/blob/master/Guide.md
* https://atmospherejs.com/useraccounts/core
* https://github.com/meteor-useraccounts/core/
* https://useraccounts-semantic-ui.meteor.com/
* https://github.com/meteor-useraccounts/semantic-ui

* Démo: http://useraccounts.meteor.com/
* Boilerplate pour chaque besoin: https://github.com/meteor-useraccounts/boilerplates

Fonctionnement:

useraccounts:core fournit toutes les fonctions de base mais aucun template.

il faut utiliser une des extensions comme useraccounts:semantic-ui pour obtenir des templates.

Exemple avec le bouton de connection:

```
{{> atNavButton}}

```

* Le code correspondant se trouve dans:
    * https://github.com/meteor-useraccounts/semantic-ui/blob/master/lib/at_nav_button.html
    * https://github.com/meteor-useraccounts/semantic-ui/blob/master/lib/at_nav_button.js


## Exemple d'Installation - Authentification par mot de passe - Templates Semantic-ui

- Ne pas installer accounts-ui ?
- Le package installe déjà useraccounts:core accounts-base
- Il ne faut pas installer directement le package useraccounts:core mais son implémentation selon le framework utilisé
- Installer les packages providers comme accounts-password, accounts-github, ... selon les besoins

```sh
meteor add accounts-password
meteor add semantic:ui-css
meteor add useraccounts:semantic-ui
```

## Plugin ensureSignedIn

- Rend obligatoire l'authentification pour toutes les routes

```js

Router.plugin('ensureSignedIn');

```

- Rend obligatoire l'authentification pour les routes placés dans only[]

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
- Package useraccounts:

## Template atForm

- Par exemple pour customiser le template d'authentification, placez dans un template

```
{{> atForm state='signUp'}}

OU

{{> atForm}} car le state par défaut est signUp

```

## States

    changePwd	    Change password form asking to set a new password

    enrollAccount	Account Enrollment form asking to set a password

    forgotPwd	    Forgot Password form asking for the email address where to send a reset password link

    hide	        None at all...

    resendVerificationEmail	Login form with an additional button to get another verification email

    resetPwd	    Reset Password form asking to set a password

    signIn	        Login form

    signUp	        Registration form

    verifyEmail	    Only the result about email verification

## Bouton atNavButton

```

```

## Configuration

- https://github.com/meteor-useraccounts/core/blob/master/Guide.md

- Placez la configuration dans lib/config/at_config.js

- Exemple de configuration complète

```js

AccountsTemplates.configure({
    // Behaviour
    confirmPassword: true,                  // (default: true) - Demande la confirmation du mot de passe (register)
    enablePasswordChange: true,             // (default: false) - Active la fonction de changement de mot de passe
    forbidClientAccountCreation: false,     // (default: false) - Si true, désactive l'enregistrement
    overrideLoginErrors: true,              // (default: true) - Si true, affiche erreur générique de connection sans préciser si mauvais login ou pass
    sendVerificationEmail: false,           // (default: false) - Si true, envoi un lien de confirmation par mail pour chaque nouvel utilisateur
    lowercaseUsername: false,               // (default: false) - A REVOIR

    // Appearance
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

    // Privacy Policy and Terms of Use
    //privacyUrl: 'privacy',                // (default: undefined) - Affiche lien ?
    //termsUrl: 'terms-of-use',             // (default: undefined) - Affiche lien ?

    // Redirects
    homeRoutePath: '/',                     // (default: /) - Pas Home pour les redirections
    redirectTimeout: 4000,

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
