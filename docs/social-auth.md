# Authentification Sociale

* https://github.com/ongoworks/meteor-accounts-docker

## Configuration Accounts.ui pour l'authentification sociales

    Accounts.ui.config({
      requestPermissions: {
        facebook: ['user_likes'],
        github: ['user', 'repo']
      },
      requestOfflineToken: {
        google: true
      },
      passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
    });

### Permissions par provider

* Facebook: http://developers.facebook.com/docs/authentication/permissions/
* GitHub: http://developer.github.com/v3/oauth/#scopes
* Google: https://developers.google.com/accounts/docs/OAuth2Login#scopeparameter
* Meetup: http://www.meetup.com/meetup_api/auth/#oauth2-scopes
* Twitter, Weibo, Meteor developer accounts: requestPermissions currently not supported


## linkedin

* https://atmospherejs.com/pauli/accounts-linkedin
* https://github.com/PauliBuccini/meteor-accounts-linkedin/
* http://linkedin.com/
* https://developer.linkedin.com/docs/oauth2
* Création d'une application : https://www.linkedin.com/developer/apps/new

```sh

$ meteor add pauli:accounts-linkedin

```

**Service Configuration:**

* Par javascript

```javascript

ServiceConfiguration.configurations.update(
    { service: "linkedin" },
    { $set: {
        clientId: "XXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
);

```

## Meteor Developpeur

* https://atmospherejs.com/meteor/accounts-meteor-developer


## github

* https://atmospherejs.com/meteor/accounts-github
* http://moduscreate.com/diving-into-meteorjs/

**Service Configuration:**

* Par javascript

```javascript

ServiceConfiguration.configurations.update(
    { service: "github" },
    { $set: {
        clientId: "XXXXXXXXXXXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
);

```

* Par le settings.json

## Facebook

**Service Configuration:**

* Par javascript

```javascript

ServiceConfiguration.configurations.update(
    { service: "facebook" },
    { $set: {
        appId: "XXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
);

```

## Google

**Service Configuration:**

* Par javascript

```javascript

ServiceConfiguration.configurations.update(
    { service: "google" },
    { $set: {
        clientId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        client_email: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
);

```

## meteor-developer

**Service Configuration:**

* Par javascript

```js

ServiceConfiguration.configurations.update(
    { service: "meteor-developer" },
    { $set: {
        clientId: "XXXXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
);

```
