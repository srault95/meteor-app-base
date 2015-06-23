# Reaction Commerce

* [Site](https://reactioncommerce.com/)
* [Documentation](https://reactioncommerce.com/guide)
* [Sources](https://github.com/reactioncommerce)
* [Status des Modules](https://reactioncommerce.com/vision)
* https://waffle.io/reactioncommerce/reaction

Auteur de Meteor Security: https://github.com/ongoworks/meteor-security

# Installation

## Par Docker

* https://github.com/reactioncommerce/reaction/blob/development/Dockerfile

## Ajout à un projet existant

```
$ meteor add reactioncommerce:core
```

## Création d'un nouveau projet

```
$ meteor add reactioncommerce:core
$ meteor remove insecure
$ meteor remove autopublish
$ meteor add nemo64:bootstrap

cd /workspace

git clone https://github.com/reactioncommerce/reaction.git

cd reaction && git checkout master
```

```
# n'est pas dans le projet
meteor remove force-ssl
```

```
> NOK
# https://github.com/reactioncommerce/reaction-core/blob/master/docs/deploying.md
# Renommer settings/dev.sample.json en settings/dev.json
mv settings/dev.sample.json settings/dev.json
meteor --settings settings/dev.json --raw-logs -p $IP:$PORT

ROOT_URL=https://188.165.254.60:444 MONGO_URL=mongodb://localhost/reaction meteor --raw-logs -p $IP:$PORT

IMPORTANT! DEFAULT USER INFO (RANDOM)
  EMAIL/LOGIN: wpdxynxm@localhost
  PASSWORD: xxxxxx

Requis:
    apt-get install -y --no-install-recommends graphicsmagick

--settings
```

```
# supp .meteor/local/build/programs/server/assets/packages/reactioncommerce_core/private/data/*.json
$ meteor reset
```

## Inclus

```
package-stats-opt-out
meteor-platform
oauth-encryption
coffeescript
less

# Optional Meteor Packages
accounts-facebook
spiderable
audit-argument-checks
fastclick

# Community Packages
nemo64:bootstrap
#mike:mocha
sanjo:jasmine
velocity:html-reporter

# Reaction Commerce Packages
reactioncommerce:core
    https://github.com/reactioncommerce/reaction-core
reactioncommerce:core-theme
    https://github.com/reactioncommerce/reaction-core-theme

reactioncommerce:reaction-shipping
    https://github.com/reactioncommerce/reaction-shipping

#payment
reactioncommerce:reaction-paypal
    https://github.com/reactioncommerce/reaction-paypal
reactioncommerce:reaction-braintree
    https://github.com/reactioncommerce/reaction-braintree
reactioncommerce:reaction-stripe
    https://github.com/reactioncommerce/reaction-stripe

#Auth:
reactioncommerce:reaction-auth-net
    https://github.com/reactioncommerce/reaction-auth-net
reactioncommerce:reaction-social
    https://github.com/reactioncommerce/reaction-social

spencern:reaction-analytics-libs
spencern:reaction-analytics

https://github.com/reactioncommerce/reaction-google-analytics
https://github.com/reactioncommerce/reaction-search
https://github.com/reactioncommerce/reaction-coupons
```

## Config mail dans /dashboard/settings/shop

```
username:
password:
hostname: smtp.gmail.com
port:
```

## Pages static

- Pages avec template dans client/templates/static/*.html mais sans scripts

- Controler: ShopController

```js
var staticPages = ["about", "team", "faqs", "terms", "privacy"];

Router.map(function() {
  var i, len, page;
  for (i = 0, len = staticPages.length; i < len; i++) {
    page = staticPages[i];
    this.route(page, {
      controller: ShopController,
      name: page
    });
  }
  return this.route("notFound", {
    path: "/(.*)"
  });
});
```



