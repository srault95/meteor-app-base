# Structure de Projet Meteor


## Introduction

Il existe plusieurs types de solution de démarrage.

On peut les regrouper dans ces catégories:

* Structure de projet
    * https://github.com/yogiben/meteor-starter
    * https://github.com/Differential/meteor-boilerplate
* Générateur de projet
    * iron-cli
    * Kitchen
    * orion-cli

Pour les solutions de type structure, il suffit en général de faire un **git clone**. Exemple:

```sh
$ git clone https://github.com/yogiben/meteor-starter.git myproject
$ cd myproject
$ meteor
```

Attention à bien analyser les dépendances, les versions et choix d'implémentation des outils.

* Certains sont orientés Bootstrap ou Semantic-ui et d'autre sont génériques, à vous de choisir le framework CSS
* Chacun définit sa structure de répertoires

## meteor-starter

* https://github.com/yogiben/meteor-starter
* http://learn.meteorfactory.io/meteor-starter/
* http://learn.meteorfactory.io/customising-meteor-starter/
* http://starter.meteor.com/
* https://github.com/yogiben/meteor-admin/

### Introduction

Cette base de projet est une des plus fonctionnelles parmis celles que j'ai testé.

Le seul défaut pour moi est l'utilisation du coffeescript que je ne maitrise pas encore mais vous trouverez une solution de conversion en Javascript un peu plus loin.

**Remarque:** Il n'y a aucun compte utilisateur au démarrage mais le premier utilisateur enregistré deviendra l'administrateur

### TODO

* manque imagemagik coté nodejs
* https://github.com/CollectionFS/Meteor-cfs-graphicsmagick

### Fonctionnalités

* Le premier user créé aura un rôle admin
* Dockerfile
* i18n
* interface admin: https://github.com/yogiben/meteor-admin/
* login social
* roles
* controle de la qualité du password
* Mail de récupération de mot de passe avec un lien : http://starter.meteor.com/reset-password/xxxxxxxx
* Extension du profil user
* Défilement continue de la page
* Notifications
* Config dans private/dev.json
* Bootstrap3 en mode less pour personnalisation
* Applications dans packages/
    * http://github.com/yogiben/meteor-comments.git
    * http://github.com/yogiben/meteor-favorites.git
    * http://github.com/yogiben/meteor-notifications.git
    * [user-thumbs](http://github.com/yogiben/meteor-user-helpers.git)
    * http://github.com/yogiben/meteor-bootstrap

### Installation

```sh
$ git clone https://github.com/yogiben/meteor-starter.git myproject
$ cd myproject
$ meteor update
$ MONGO_URL=mongodb://localhost/myproject meteor
```

### Packages installés (après meteor update)

```
accounts-base@1.2.0
accounts-facebook@1.0.4
accounts-google@1.0.4
accounts-oauth@1.1.5
accounts-password@1.1.1
accounts-twitter@1.0.4
accounts-ui@1.1.5
accounts-ui-unstyled@1.1.7
alanning:roles@1.2.13
aldeed:autoform@5.3.0
aldeed:collection2@2.3.3
aldeed:simple-schema@1.3.3
aldeed:tabular@1.2.0
aldeed:template-extension@3.4.3
autoupdate@1.2.1
base64@1.0.3
binary-heap@1.0.3
blaze@2.1.2
blaze-tools@1.0.3
boilerplate-generator@1.0.3
bootstrap@0.3.1
callback-hook@1.0.3
cfs:access-point@0.1.49
cfs:base-package@0.0.30
cfs:collection@0.5.5
cfs:collection-filters@0.2.4
cfs:data-man@0.0.6
cfs:file@0.1.17
cfs:graphicsmagick@0.0.18
cfs:gridfs@0.0.33
cfs:http-methods@0.0.29
cfs:http-publish@0.0.13
cfs:power-queue@0.9.11
cfs:reactive-list@0.0.9
cfs:reactive-property@0.0.4
cfs:standard-packages@0.5.9
cfs:storage-adapter@0.2.2
cfs:tempstore@0.1.5
cfs:upload-http@0.0.20
cfs:worker@0.1.4
check@1.0.5
cmather:handlebars-server@2.0.0
coffeescript@1.0.6
comments@0.1.0
dburles:collection-helpers@1.0.3
dburles:google-maps@1.1.1
ddp@1.1.0
deps@1.0.7
ejson@1.0.6
email@1.0.6
facebook@1.2.0
fastclick@1.0.3
favorites@0.0.4
fortawesome:fontawesome@4.3.0
geojson-utils@1.0.3
google@1.1.5
handlebars@1.0.3
html-tools@1.0.4
htmljs@1.0.4
http@1.1.0
id-map@1.0.3
iron:controller@1.0.8
iron:core@1.0.8
iron:dynamic-template@1.0.8
iron:layout@1.0.8
iron:location@1.0.9
iron:middleware-stack@1.0.9
iron:router@1.0.9
iron:url@1.0.9
jparker:crypto-core@0.1.0
jparker:crypto-md5@0.1.1
jparker:gravatar@0.3.1
jquery@1.11.3_2
json@1.0.3
juliancwirko:s-alert@2.4.0
juliancwirko:s-alert-stackslide@1.1.3
launch-screen@1.0.2
less@1.0.14
livedata@1.0.13
localstorage@1.0.3
logging@1.0.7
manuelschoebel:ms-seo@0.4.1
meteor@1.1.6
meteor-platform@1.2.2
meteorhacks:meteorx@1.0.2
meteorhacks:subs-manager@1.4.0
meteorhacks:unblock@1.1.0
meteorspark:util@0.2.0
minifiers@1.1.5
minimongo@1.0.8
mobile-status-bar@1.0.3
momentjs:moment@2.10.3
mongo@1.1.0
mongo-livedata@1.0.8
mpowaga:string-template@0.1.0
mrt:moment@2.8.1
multiply:iron-router-progress@1.0.1
natestrauser:animate-css@3.2.6
notifications@0.0.7
npm-bcrypt@0.7.8_2
oauth@1.1.4
oauth1@1.1.4
oauth2@1.1.3
observe-sequence@1.0.6
ordered-dict@1.0.3
percolate:momentum@0.7.2
percolate:momentum-iron-router@0.7.0
percolate:velocityjs@1.1.0
raix:eventemitter@0.1.2
raix:handlebar-helpers@0.2.4
random@1.0.3
reactive-dict@1.1.0
reactive-var@1.0.5
reload@1.1.3
retry@1.0.3
reywood:publish-composite@1.3.6
routepolicy@1.0.5
service-configuration@1.0.4
session@1.1.0
sha@1.0.3
softwarerero:accounts-t9n@1.0.9
spacebars@1.0.6
spacebars-compiler@1.0.6
spiderable@1.0.7
srp@1.0.3
tap:i18n@1.5.0
templating@1.1.1
timmyg:wow@1.0.1
tracker@1.0.7
tsega:skrollr@0.0.2
twitter@1.1.4
ui@1.0.6
underscore@1.0.3
underscorestring:underscore.string@3.0.3_1
url@1.0.4
user-thumbs@0.0.8
useraccounts:bootstrap@1.11.1
useraccounts:core@1.11.1
webapp@1.2.0
webapp-hashing@1.0.3
yogiben:admin@1.1.2
yogiben:autoform-file@0.2.7
yogiben:autoform-map@0.1.3
yogiben:autoform-modals@0.3.5
yogiben:helpers@0.0.6
yogiben:mixpanel@0.0.7
yogiben:pretty-email@0.0.6
zimme:iron-router-active@1.0.4
```

### Collection mongodb au démarrage

```
$ mongo
> use myproject
> show collections
meteor_accounts_loginServiceConfiguration
meteor_oauth_pendingCredentials
meteor_oauth_pendingRequestTokens
roles
system.indexes
users
```

### Conversion JS

Pour ceux qui préfére travailler en javascript, voici une solution rapide pour convertir les fichiers coffee.

```sh

# Outil de conversion coffeescript -> javascript
npm install -g coffee-script

# Clonez le projet
$ git clone https://github.com/yogiben/meteor-starter.git myproject
$ cd myproject

# Créer un fichier .js à partir de chaque fichier .coffee
$ find -name "*.coffee" -exec coffee -b --no-header -c {} \;

# Remplace les .coffee dans package.js
$ find -name "package.js" -exec sed -i 's/\.coffee/\.js/' {} \;

# Supprimez les .coffee
$ for i in `find -name "*.coffee"`; do rm -f $i; done

```

### Customisation

* Copiez i18n/en.i18n.json dans i18n/fr.i18n.json pour traduction

* modifiez private/settings/dev.json
    * Supprimez les entrées non utilisés comme facebook
    * Remplacez environment pour production

* Pour modifier le css: client/style/bootstrap-variables.less
* Pour modifier les fonts google : client/style/utils/fonts.import.less
* Pour modifier l'image de l'écran d'accueil: client/views/home/home.import.less
* Les vues/layout sont dans client/views
* Les collections sont dans collections/*.js
* Les routes sont dans lib/_config/router.js et lib/router.*.js


* Pour la configuration principale, editez lib/_config/_config.js

```js
this.Config = {
  name: 'My App',
  title: function() {
    return TAPi18n.__('configTitle');
  },
  subtitle: function() {
    return TAPi18n.__('configSubtitle');
  },
  logo: function() {
    return '<b>' + this.name + '</b>';
  },
  footer: function() {
    return this.name + ' - Copyright ' + new Date().getFullYear();
  },
  emails: {
    from: 'no-reply@' + Meteor.absoluteUrl(),
    contact: 'hello' + Meteor.absoluteUrl()
  },
  username: false,
  defaultLanguage: 'en',
  dateFormat: 'D/M/YYYY',
  privacyUrl: 'http://meteorfactory.io',
  termsUrl: 'http://meteorfactory.io',
  legal: {
    address: 'Jessnerstrasse 18, 12047 Berlin',
    name: 'Meteor Factory',
    url: 'http://benjaminpeterjones.com'
  },
  about: 'http://meteorfactory.io',
  blog: 'http://learn.meteorfactory.io',
  socialMedia: {
    facebook: {
      url: 'http://facebook.com/benjaminpeterjones',
      icon: 'facebook'
    },
    twitter: {
      url: 'http://twitter.com/BenPeterJones',
      icon: 'twitter'
    },
    github: {
      url: 'http://github.com/yogiben',
      icon: 'github'
    },
    info: {
      url: 'http://meteorfactory.io',
      icon: 'link'
    }
  },
  homeRoute: '/',
  publicRoutes: ['home'],
  dashboardRoute: '/dashboard'
};
```

### Ajout d'un spinner de chargement

```
$ meteor add sacha:spin
```

**Editez client/shared/loading.html:**

```
<template name="loading">
  {{> spinner}}
</template>
```

### Configuration de l'interface d'administration

* https://github.com/yogiben/meteor-admin/

Editez lib/_config/adminConfig.js

### Configuration d'une authentification github

* Le lien à configurer comme callback sur github est http://YOUR_HOST/_oauth/github

```sh
$ meteor add accounts-github
```

**Configuration dans private/settings/dev.json::**

```
    "serviceConfigurations": {
        "github": {
            "clientId": "xxx",
            "secret": "xxx"
        }
    }
```

#### TODO:
```
Meteor.loginWithGithub({
  requestPermissions: ['user', 'public_repo']
}, function (err) {
  if (err)
    Session.set('errorMessage', err.reason || 'Unknown error');
});

Modifier lib/_config/oauth.js
  if user.services?.github
		user.emails = [{address: user.services.github.email, verified: true}]
		user.profile.firstName = user.services.github.given_name
		user.profile.lastName = user.services.github.family_name
if user.services?.github?.id
  profileImageUrl = user.services.github.picture

   forLoggedInUser: ['services.github'],
    forOtherUsers: ['services.github.username']

```


### Développement

* Utilisation de Config

```
Read our <a href="{{Config.blog}}">blog</a>

Collections dans /lib/collections/*
```

### TODO - Personnalisation du compte utilisateur

### TODO - Google Analytics

### TODO - Ajout de packages

* Formulaire de contact
* Auth social
* SEO
* SiteMap

## iron-cli

### Création d'un projet

```sh

$ npm install -g iron-meteor

$ iron create myproject

$ cd myproject

# https://github.com/parlaywithme/full-pack/
$ iron add parlay:full-pack

$ iron remove insecure autopublish
$ iron add audit-arguments-check
$ iron add twbs:bootstrap
$ iron add yogiben:admin
$ iron add useraccounts:bootstrap
$ iron add matb33:collection-hooks
$ iron add nimble:restivus
$ iron add msavin:jetsetter
$ iron add mizzao:user-status
$ iron add sacha:spin
$ iron add accounts-password
$ iron add juliancwirko:s-alert
$ iron add gadicohen:headers


# TODO: TEMPORAIRE
$ iron remove appcache browser-policy gadicohen:headers

$ iron remove twbs:bootstrap yogiben:admin useraccounts:bootstrap


```


### Meteor Settings

```
--settings settings.json
```

## 3. Démarrage

*Il faudra surement relancer le meteor une seconde fois si le fichier packages.json n'est pas créé avant.*

```
$ MONGO_URL=mongodb://localhost/myproject iron run -p 0.0.0.0:8080

# Derrière un proxy, ajouter cette variable d'environnement
$ HTTP_FORWARDED_COUNT=1
```

## Starter Pack - parlay:full-pack

    $ meteor|iron add parlay:full-pack

**Packages installés:**

    parlay:full-pack                    added, version 1.0.3_2
    parlay:starter-pack                 added, version 1.0.3_2
    accounts-base                       added, version 1.2.0
    aldeed:autoform                     added, version 4.2.2
    aldeed:collection2                  added, version 2.3.3
    aldeed:simple-schema                added, version 1.3.3
    amplify                             added, version 1.0.0
    appcache                            added, version 1.0.4
    audit-argument-checks               added, version 1.0.3
    browser-policy                      added, version 1.0.4
    browser-policy-common               added, version 1.0.3
    browser-policy-content              added, version 1.0.4
    browser-policy-framing              added, version 1.0.4
    coffeescript                        added, version 1.0.6
    dburles:collection-helpers          added, version 1.0.3
    dburles:mongo-collection-instances  added, version 0.3.1
    email                               added, version 1.0.6
    iron:controller                     added, version 1.0.8
    iron:core                           added, version 1.0.8
    iron:dynamic-template               added, version 1.0.8
    iron:layout                         added, version 1.0.8
    iron:location                       added, version 1.0.9
    iron:middleware-stack               added, version 1.0.9
    iron:router                         added, version 1.0.9
    iron:url                            added, version 1.0.9
    localstorage                        added, version 1.0.3
    matb33:collection-hooks             added, version 0.7.13
    meteorhacks:async                   added, version 1.0.0
    meteorhacks:kadira                  added, version 2.19.6
    meteorhacks:meteorx                 added, version 1.3.1
    meteorhacks:npm                     added, version 1.2.2
    meteorhacks:ssr                     added, version 2.1.2
    meteorhacks:subs-manager            added, version 1.3.0
    mizzao:timesync                     added, version 0.3.1
    momentjs:moment                     added, version 2.9.0
    mongo-livedata                      added, version 1.0.8
    mquandalle:bower                    added, version 1.3.12_3
    msavin:mongol                       added, version 0.5.5
    npm-node-aes-gcm                    added, version 0.1.3_6
    oauth-encryption                    added, version 1.0.5
    peerlibrary:assert                  added, version 0.2.5
    raix:handlebar-helpers              added, version 0.2.4
    service-configuration               added, version 1.0.4
    softwarerero:accounts-t9n           added, version 1.0.9
    spiderable                          added, version 1.0.7
    stevezhu:lodash                     added, version 1.0.2
    u2622:persistent-session            added, version 0.2.2
    underscorestring:underscore.string  added, version 2.4.0
    useraccounts:core                   added, version 1.8.1
    zimme:collection-behaviours         added, version 1.0.4
    zimme:collection-softremovable      added, version 1.0.4
    zimme:collection-timestampable      added, version 1.0.6
    zimme:iron-router-active            added, version 1.0.3
    zimme:iron-router-auth              added, version 3.0.1

**Ajouter:**

```
    twbs:bootstrap
    yogiben:admin
    useraccounts:bootstrap
    matb33:collection-hooks
    nimble:restivus
    msavin:jetsetter
    mizzao:user-status

    percolate:migrations
    edgee:slingshot
    percolate:server-info
    aldeed:template-extension
    percolate:paginated-subscription
    hitchcott:method-hooks
    matteodem:easy-search
    percolate:synced-cron
```

## Packages

## Introduction

Il y a beaucoup d'avis sur cette question mais pour l'instant, pour ma part, j'ai choisi la suivante:

    .meteor/
    client/
        stylesheets/
        lib/
        views/
        helpers.js
        router.js
        startup.js
    common/
        lib/
        collections/
    server/
        lib/
        startup.js
        methods.js
        publish.js
    public/
    private/
    i18n/
    packages/
    settings.json
    README.md

## Installation

    git clone https://github.com/srault95/meteor-app-base.git myproject

    cd myproject/app

    meteor update


## orion-cli

* https://github.com/matteodem/orion-cli
* https://github.com/matteodem/meteor-boilerplate
* http://matteodem.github.io/meteor-boilerplate/

Outil en ligne de commande pour générer une application Meteor

Utilise un fichier json pour décrire les données à générer

## Création de packages avec meteoris

* [Site](http://meteoris.me/)
* [Sources](https://github.com/radiegtya/meteoris)
* [Démonstration](http://meteoris.piyiku.biz/) (mais ne fonctionne pas pour moi)
* [Documentation](http://avocadofloat.com/publicDocs/index/Ku9o2ZJS9k3nPZtzy)
* [Autre Documentation](https://docs.google.com/document/d/1wEe2u9qLXRLEnWhnUx7wVyo7Jc66Dt2gkokXcP0iPCE/edit)

### Avantages

* Génération d'un package réutilisable pour chaque projet créer avec le générateur Mugen

### Inconvénients

* Génère du HTML static dans les templates sans utiliser autoform

### Installation

```sh
$ git clone https://github.com/radiegtya/meteoris.git myproject
$ cd myproject
$ MONGO_URL=mongodb://localhost/start2 meteor -p 0.0.0.0:8080
```

* Login/Mot de passe Admin: admin@meteoris.me / admin


# Structures de projet

## iron-cli

    my-app/
     .iron/
       config.json
     bin/
     build/
     config/
       development/
         env.sh
         settings.json
     app/
       client/
         collections/
         lib/
         stylesheets/
         templates/
         head.html
       lib/
         collections/
         controllers/
         methods.js
         routes.js
       packages/
       private/
       public/
       server/
         collections/
         controllers/
         lib/
         methods.js
         publish.js
         bootstrap.js

## boilerplate

    client/                 # Client folder
        compatibility/      # Libraries which create a global variable
        config/             # Configuration files (on the client)
        lib/                # Library files that get executed first
        startup/            # Javascript files on Meteor.startup()
        stylesheets         # LESS files
        modules/            # Meant for components, such as form and more(*)
        views/              # Contains all views(*)
            common/         # General purpose html templates
    model/                  # Model files, for each Meteor.Collection(*)
    private/                # Private files
    public/                 # Public files
    routes/                 # All routes(*)
    server/                 # Server folder
        fixtures/           # Meteor.Collection fixtures defined
        lib/                # Server side library folder
        publications/       # Collection publications(*)
        startup/            # On server startup
    meteor-boilerplate      # Command line tool

## Void

* https://github.com/SachaG/Void


    client
        CSS
        helpers
            handlebars.js
            router.js
        views
            common
                footer.html
                header.html
                layout.html
                loading.html
                notFound.html
            items
                item.html
                item.js
                items.html
            pages
                homepage.html
        main.html
        main.js
    collections
        items.js
    lib
        helpers.js
        permissions.js
    packages
        iron-router
        sample-package
    public
    server
        fixtures.js
        publications.js

## meteor-boilerplate

* http://github.differential.com/meteor-boilerplate/

## exponential.io

* http://tech.exponential.io/meteor/building-large-modular-apps-meteor/


    /projectName
        /docs             - Documentation
        /src              - Root directory of all source files
            /client           - [Client only]
                /collections       - Local, unsynced collections
                /compatability     - 3rd party JS libs that export a global symbol
                /conf              - Configuration
                /lib               - Library code (client-only)
                /routers           - As the name implies, define routes here
                /startup           - Code to run on document.ready()
                /stylesheets       - CSS files
                /subscriptions     - Subscribe to publications
                /views             - Contains one nested directory for each module
            /collections       - [Client & Server] Collections and methods that act on the collection
            /lib               - [Client & Server] Library code that is used on client and server
            /packages          - [Client &/or Server] Meteor, Meteorite and local packages
            /private           - [Server only] Private data files
            /public            - Static files
                /images        - Image files
            /server            - [Server only]
                /publications  - Publish Mongo collections
                /startup       - Code to run when the server starts

## yeoman - generator-met

* https://github.com/cmalven/generator-met
* https://github.com/Pent/generator-meteor


    .meteor/
        .gitignore
        packages
        release
    client/
        main.coffee
        router.coffee
        vendor/
        views/
            index/
                index.html
                index.coffee
            layout/
                layout.html
    lib/
        collections/
    packages/
    public/
    server/
        main.coffee
        methods.coffee
        publications/
    .gitignore
    README.md
    index.html
