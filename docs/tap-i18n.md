# tab:i18n

Internationalisation de projets Meteor

https://atmospherejs.com/tap/i18n

## TODO

* Extraction pour service crowdin
* Voir http://i18next.com/

## Installation

    meteor add tap:i18n

```javascript

    Meteor.startup(function() {
      if (Meteor.isClient) {
        return TAPi18n.setLanguage('en');
      }
    });

```

## Utilisation dans les templates

```
    <div class="btn">{{_ "sign_up"}}</div>

    # Avec paramètre dans la chaine à traduire
    <template name="messages_today">
      <p>{{_ "inbox_status" "Daniel" count=18}}</p>
    </template>

    # Exemple de fichier de lang - i18n/en.i18n.json
    {
      "inbox_status": "Hey, %s! You have received one new message today.",
      "inbox_status_plural": "Hey, %s! You have received %s new messages today."
    }
```

## Utilisation dans les scripts

```javascript

    Config = {
      name: 'Title',
      title: function() {
        return TAPi18n.__('configTitle');
      },
      subtitle: function() {
        return TAPi18n.__('configSubtitle');
      },
    }

```

## Extensions

### tap-i18n-ui

https://github.com/TAPevents/tap-i18n-ui

```
    meteor add tap:i18n-ui

    {{> i18n_dropdown}}             // Bootstrap
    {{> i18n_dropdown_semantic}}    // Semantic UI
```

### tap-i18n-db

https://github.com/TAPevents/tap-i18n-db

    meteor add tap:i18n-db

```javascript

    CountryLang = new TAPi18n.Collection("country_lang");

    // Création du document et d'une ou plusieurs traductions
    id = CountryLang.insertTranslations({country: "fr", name: "Français"}, {
        en: {
            name: "French"
        }
    });

    # Mise à jour d'un document existant
    CountryLang.updateTranslations(id, {
        de: {
            name: "Französischла"
        }
    });

    # Publication et souscription
    if (Meteor.isServer) {
        TAPi18n.publish("countrylang", function (query) {
            return CountryLang.i18nFind(query);
        });
    }

    if (Meteor.isClient) {
        TAPi18n.subscribe("countrylang", {});
    }

```




