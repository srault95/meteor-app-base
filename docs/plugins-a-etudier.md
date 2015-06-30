# Plugins A etudier

https://atmospherejs.com/zimme/iron-router-auth


## flash-messages

Voir plutot s-alert

* https://github.com/camilosw/flash-messages
* https://atmospherejs.com/mrt/flash-messages
* https://github.com/JamesLefrere/meteor-flash-messages-semantic-ui

**Installation:**

    $ meteor add jameslefrere:flash-messages-semantic-ui

**Configuration:**

    FlashMessages.configure({
        autoHide: true,
        hideDelay: 5000,
        autoScroll: true
    });

**Usage:**

    {{> flashMessages}}

    FlashMessages.sendWarning("Message");
    FlashMessages.sendError("Message");
    FlashMessages.sendSuccess("Message");
    FlashMessages.sendInfo("Message");

    FlashMessages.sendInfo(["Message 1", "Message 2", "Message 3"]);

    FlashMessages.clear();

    FlashMessages.sendWarning("Message", { autoHide: false });
    FlashMessages.sendError("Message", { hideDelay: 2000 });
    FlashMessages.sendSuccess("Message", { autoHide: true, hideDelay: 8000 });


## Graphique HighCharts

* https://github.com/MaazAli/Meteor-HighCharts
* http://highcharts-demo.meteor.com/
* https://github.com/jhuenges/highcharts-demo
* https://github.com/MaazAli/highcharts-gauge
* https://github.com/MaazAli/highcharts-3d

**Installation:**

    $ meteor add maazalik:highcharts

**Template:**

    // myTempmlate.html
    {{> highchartsHelper chartId="test" chartWidth="100%" charHeight="100%" chartObject=topGenresChart}}

**Scripts::**

    // myTemplate.js
    Template.myTemplate.topGenresChart = function() {
        return {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            title: {
                text: this.username + "'s top genres"
            },
            tooltip: {
                pointFormat: '<b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        },
                        connectorColor: 'silver'
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'genre',
                data: [
                    ['Adventure',   45.0],
                    ['Action',       26.8],
                    ['Ecchi',   12.8],
                    ['Comedy',    8.5],
                    ['Yuri',     6.2]
                ]
            }]
        };
    };


## s-alert

* https://atmospherejs.com/juliancwirko/s-alert
* http://s-alert.meteor.com/
* http://s-alert-demo.meteor.com/
* https://github.com/juliancwirko/meteor-s-alert/

- utilise une collection null: sAlert.collection

	$ meteor add juliancwirko:s-alert

	effets:
		scale - meteor add juliancwirko:s-alert-scale
		slide - meteor add juliancwirko:s-alert-slide
		genie - meteor add juliancwirko:s-alert-genie
		jelly - meteor add juliancwirko:s-alert-jelly
		flip - meteor add juliancwirko:s-alert-flip
		bouncyflip - meteor add juliancwirko:s-alert-bouncyflip

		stackslide - meteor add juliancwirko:s-alert-stackslide
			essai

	positions
		top-left
		bottom-left
		top-right (default)
		bottom-right
		top (full width)
		bottom (full width)

	<body>
		{{> sAlert}}
	</body>

	# client:
	Meteor.startup(function () {
		sAlert.config({
			effect: 'stackslide',
			position: 'top',
			timeout: 5000,
			html: false,
			onRouteClose: true,
			stack: true,
			offset: 0
		});
	});

	sAlert.error('Your message', configOverwrite);


## meteor-admin

* https://github.com/yogiben/meteor-admin

**Configuration minimum:**

```coffeescript
@AdminConfig = {
  name: 'My App'
  adminEmails: ['ben@code2create.com']
  collections: {
    Posts: {}
  }
};
```

## meteorhacks:npm

Ajoute un fichier packages.json pour déclarer des dépendances NPM externes.

* https://atmospherejs.com/meteorhacks/npm

**Utilisation des dépendances dans Meteor - fichier packages.json:**

```json
{
  "redis": "0.8.2",
  "github": "0.1.8"
}
```

```js
// Coté server seulemement
// var Github = Meteor.npmRequire('github');

if (Meteor.isServer) {
  Meteor.methods({
    'getGists': function getGists(user) {
      var GithubApi = Meteor.npmRequire('github');
      var github = new GithubApi({
          version: "3.0.0"
      });

      var gists = Async.runSync(function(done) {
        github.gists.getFromUser({user: 'arunoda'}, function(err, data) {
          done(null, data);
        });
      });

      return gists.result;
    }
  });
}
```

## meteorhacks:async

* https://atmospherejs.com/meteorhacks/async

```sh
$ meteor add meteorhacks:async
```

```js
// server/methods.js
var response = Async.runSync(function(done) {
  setTimeout(function() {
    done(null, 1001);
  }, 100);
});

console.log(response.result); // 1001
```

## meteorhacks:unblock

* https://atmospherejs.com/meteorhacks/unblock

Evite à l'utilisateur, lors d'appel de méthodes bloquantes comme l'envoi d'un mail d'attendre une réponse

```sh
$ meteor add meteorhacks:unblock
```

```js
// server/methods.js
Meteor.methods({
  longMethod: function() {
    this.unblock();
    Meteor._sleepForMs(1000 * 60 * 60);
  }
});
```

## meteorhacks:meteorx

* https://atmospherejs.com/meteorhacks/meteorx

Expose certaines API Server Meteor

```sh
$ meteor add meteorhacks:meteorx
```

**API exposés:**

* MeteorX.Session - livedata Session
* MeteorX.Subscription - livedata Subscription
* MeteorX.SessionCollectionView - livedata SessionCollectionView
* MeteorX.SessionDocumentView - livedata SessionDocumentView
* MeteorX.MongoConnection - mongo-livedata MongoConnection
* MeteorX.MongoCursor - mongo-livedata Cursor

## appcache

* https://github.com/meteor/meteor/tree/devel/packages/appcache
* https://github.com/meteor/meteor/wiki/AppCache
* Voir aussi https://github.com/buildhybrid/appcache-extra
* https://blog.groupbuddies.com/posts/45-offline-web-apps-with-meteor

Mise en cache des assets (fichiers javascripts, css, images, ...)


```
$ meteor add appcache
```

```
// Active ou désactive pour certains navigateur

// choix : android, chrome, chromium, chromeMobileIOS, firefox, ie, mobileSafari and safari
Meteor.AppCache.config({
  chrome: false,
  firefox: false
});
```

## gadicohen:headers

* https://atmospherejs.com/gadicohen/headers

Permet d'interragir avec les headers, coté client et server

Fournit des méthodes comme headers.getClientIP()

```sh
$ meteor add gadicohen:headers
```

## stevezhu:lodash

* https://atmospherejs.com/stevezhu/lodash

Charge et expose la librairie lodash v3.8.0

```sh
meteor add stevezhu:lodash
```

## browser-policy

* https://github.com/meteor/meteor/tree/devel/packages/browser-policy
* https://meteorhacks.com/xss-and-meteor
* https://dweldon.silvrback.com/browser-policy
* http://info.meteor.com/blog/defense-in-depth-securing-meteor-apps-with-content-security-policy

Définit la politique de sécurité du navigateur et gère les attaques de type clickjacking

```sh
meteor add browser-policy
```

```js
//server/browser_policy.js

BrowserPolicy.framing.disallow();
BrowserPolicy.content.disallowInlineScripts();
BrowserPolicy.content.disallowEval();
BrowserPolicy.content.allowInlineStyles();
BrowserPolicy.content.allowFontDataUrl();

// Autoriser seulement les scripts externes de ces provenances à s'executer
// Oblige les scripts externes à être chargé en https
var trusted = [
  '*.google-analytics.com',
  '*.mxpnl.com',
  '*.zendesk.com'
];

_.each(trusted, function(origin) {
  origin = "https://" + origin;
  BrowserPolicy.content.allowOriginForAll(origin);
});
```

### Spécifique proxy nginx

```
#### Dans la section http
proxy_buffer_size       128k;
proxy_buffers           4 256k;
proxy_busy_buffers_size 256k;
```

## meteor-user-status

* https://github.com/mizzao/meteor-user-status

**Champs status ajouté et mis à jour dans Meteor.users par user-status:**

```
"status" : {
        "online" : true,
        "lastLogin" : {
                "date" : ISODate("2015-06-24T12:22:29.447Z"),
                "ipAddr" : "88.175.183.38",
                "userAgent" : "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.130 Safari/537.36"
        },
        "idle" : false
}
```

**Important:**

Si vous avez définit un schéma pour la collection Meteor.users, il faut ajouter une entrée pour le champs status

```js
App.Schemas.User = new SimpleSchema({
  status: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  //...
});
```
