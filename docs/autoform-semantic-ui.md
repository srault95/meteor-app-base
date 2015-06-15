# autoform-semantic-ui

**Template Semantic-ui pour le package aldeed:autoform.**

https://github.com/fabienb4/meteor-autoform-semantic-ui

### Installation

Dépendances: templating, underscore, aldeed:autoform

```
$ meteor add semantic:ui-css
$ meteor add fabienb4:autoform-semantic-ui
```

**Configuration globale:**

```javascript

//client/startup.js
Meteor.startup(function() {
    AutoForm.setDefaultTemplate("semanticUI");
});

```

**Configuration par formulaire:**

```
{{#autoForm collection="Items" id="itemsInsertForm" type="insert" template="semanticUI"}}
...
{{/autoForm}}
```

### Usage

**Champs select** - http://semantic-ui.com/collections/form.html#basic-select

```
{{> afQuickField name="items" type="basic-select" options=items}}

```

```javascript
// Template helpers:
Template.main.helpers({
    items: [
      { value: "1", label: "Item 1" },
      { value: "2", label: "Item 2" }
    ];
});
```


