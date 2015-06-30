Templates Meteor
================

Les templates Meteor sont basés sur [spacebars](https://github.com/meteor/meteor/blob/devel/packages/spacebars/README.md) qui provient de [handlebarsjs](http://handlebarsjs.com/), lui même utilisant une syntaxe [Mustache](http://mustache.github.io/).

* http://fr.discovermeteor.com/chapters/templates/

## Events

### click et submit

```js
{
  // Fires when any element is clicked
  'click': function (event) { ... },

  // Fires when any element with the 'accept' class is clicked
  'click .accept': function (event) { ... },

  // Fires when 'accept' is clicked or focused, or a key is pressed
  'click .accept, focus .accept, keypress': function (event) { ... }
}
```

```
{{#if isCreatingTeam}}
    <form class="create-team">
      <input name="name" type="text">
      <button type="submit">Submit</button>
      <a class="cancel" href="#">Cancel</a>
    </form>
{{else}}
    <a class="create" href="#">Create</a>
{{/if}}
```

```js
Template.teams.helpers({
  isCreatingTeam: function(){
    return Session.get('isCreatingTeam');
  },
  teams: function(){
    return Teams.find();
  }
});

Template.teams.events({
  'click a.create': function(e, tpl){
    e.preventDefault();
    Session.set('isCreatingTeam', true);
  },

  'click a.cancel': function(e, tpl){
    e.preventDefault();
    Session.set('isCreatingTeam', false);
  },

  'submit form.create-team': function(e, tpl){
    e.preventDefault();
    var teamName = $('input[name=name]').val();
    Teams.insert({name: teamName});
  }
});
```

## Récupérer une valeur du template

```
var teamName = tpl.$('input[name=name]').val();
```

## Utilisation d'un callback dans les actions d'écriture

La fonction **function(error, _id)** sera passé au serveur et permettra d'attendre sa réponse.

```
  'submit form.create-team': function(e, tpl){
    e.preventDefault();
    var teamName = tpl.$('input[name=name]').val();
    Teams.insert({name: teamName}, function(error, _id){
      if(error){
        alert(error);
        Session.set('isCreatingTeam', true);
        tpl.$('input[name=name]').val(teamName);
      }
    });
    Session.set('isCreatingTeam', false);
  }
```

## Tips - Lien delete

```
<ul>
    {{#each teams}}
        <li>{{name}} <a class="remove" href="#">(x)</a></li>
    {{/each}}
</ul>
```

```js
// this._id fait référence à l'objet courant dans le template
'click a.remove': function(e, tpl){
    e.preventDefault();
    Teams.remove(this._id);
}
```

## Tips - Passer du code HTML à une template dans une variable

Dans le template au lieu d'utiliser "{{myvar}}" il faut ajouter une accolade "{{{myvar}}}"

## Tips - Manipuler une url dans le helper

```js
// this.url provient du template
Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});
```

## Tips - afterFlush

* http://docs.meteor.com/#/full/tracker_afterflush

```js
Teams.insert({name: teamName}, function(error, _id){
  if(error){
    alert(error);
    Session.set('isCreatingTeam', true);
    Tracker.afterFlush(function(){
      tpl.$('input[name=name]').val(teamName);
    });
  }
});
```

## Dynamic Template

<template name="posts_list_controller">
  {{> Template.dynamic template=template data=data}}
</template>

## Framework CSS dynamique - Stratégie useraccounts

Le pattern mis en oeuvre, permet d'avoir plusieurs implémentation de framework CSS (Bootstrap, Semantic-ui, ...)

```
useraccounts:core
useraccounts:unstyled
useraccounts:semantic-ui
```

### Analyse du lien connection (signIn)

UserAccount core, expose une api dans lib/templates_helpers/ SANS template, ce qui permet à chaque implémentation CSS de définir seulement le template et d'hériter de la déclaration du helpers et d'events

Si vous souhaitez utiliser librement par exemple, le lien **signIn**, vous verrez dans le code ci-dessous, qu'il suffit d'utiliser la fonction **return AccountsTemplates.getRoutePath("signIn")**

```

//useraccounts:core -> lib/templates_helpers/at_signin_link.js

AT.prototype.atSigninLinkHelpers = {
    disabled: function() {
        return AccountsTemplates.disabled();
    },
    signInLink: function(){
        return AccountsTemplates.getRoutePath("signIn");
    },
    preText: function(){
        return T9n.get(AccountsTemplates.texts.signInLink_pre, markIfMissing=false);
    },
    linkText: function(){
        return T9n.get(AccountsTemplates.texts.signInLink_link, markIfMissing=false);
    },
    suffText: function(){
        return T9n.get(AccountsTemplates.texts.signInLink_suff, markIfMissing=false);
    },
};

AT.prototype.atSigninLinkEvents = {
    "click #at-signIn": function(event, t) {
        event.preventDefault();
        AccountsTemplates.linkClick("signIn");
    },
};

//useraccounts:unstyled -> lib/at_signin_link.html

<template name="atSigninLink">
  <div class="at-signin-link">
    <p>
      {{preText}}
      <a href="{{signInLink}}" id="at-signIn" class="at-link at-signin {{disabled}}">{{linkText}}</a>
      {{suffText}}
    </p>
  </div>
</template>

//useraccounts:unstyled -> lib/at_signin_link.js

Template.atSigninLink.helpers(AccountsTemplates.atSigninLinkHelpers);
Template.atSigninLink.events(AccountsTemplates.atSigninLinkEvents);

//useraccounts:semantic-ui -> lib/at_signin_link.html

<template name="atSigninLink">
  <div class="at-signin-link at-wrap">
    <p>
      {{preText}}
      <a href="{{signInLink}}" id="at-signIn" class="at-link at-signin {{disabled}}">{{linkText}}</a>
      {{suffText}}
    </p>
  </div>
</template>

//useraccounts:semantic-ui -> lib/at_signin_link.js

Template.atSigninLink.helpers(AccountsTemplates.atSigninLinkHelpers);
Template.atSigninLink.events(AccountsTemplates.atSigninLinkEvents);

```

## Framework CSS dynamique - Stratégie tap:i18n-ui

## Templates dynamique avec spacebars

* Exemple fournit provenant de [meteor-status](https://github.com/francocatena/meteor-status)
* http://docs.meteor.com/#/full/template_dynamic
* https://github.com/meteor/meteor/blob/master/packages/spacebars/dynamic.js

```
// Le helpers appelle un template static (habituel) en lui passant le nom d'un template en paramètre
// Le template dynamic reçoit aussi un objet contenant des fonctions comme le ferais un helpers normal

// status.js
Template.status.helpers({
  template: function () {
    // lié à une config par défaut + une ReactiveVar pour le changement dynamique de template
    return 'status_' + Status.template()
  },
  helpers: function () {
    return {
      connected: function () {
        return Meteor.status().connected
      },
      message: function () {
        return i18n_status_func('meteor_status', { context: Meteor.status().status })
      },
    }
  }
})

// status.html
<template name="status">
  {{> Template.dynamic template=template data=helpers}}
</template>

// Template final appellé par Template.dynamic
// connected provient du helpers passé en paramètre
<template name="status_bootstrap3">
  {{#unless connected}}
    <div class="alert {{option 'classes'}} text-center" role="alert">
      <strong>
        <span class="glyphicon glyphicon-warning-sign"></span>
        {{message}}
      </strong>
      {{extraMessage}}

      {{#if showReconnect}}
        <a href="#" class="alert-link">{{reconnectLabel}}</a>
      {{/if}}
    </div>
  {{/unless}}
</template>

```

**Bonus:**

Comme le template dynamic est appellé à l'intérieur du template static, tous les events habituels sont utilisables:

```
Template.status.events({
  'click a.alert-link': function (e) {
    e.preventDefault()
    Meteor.reconnect()
  }
})
```

## Templates dynamiques avec aldeed:template-extension

* https://github.com/aldeed/meteor-template-extension
* Solution utilisé par Telescope

La méthode replaces semble permettre de permutter un nom de template par un autre

```
Template.post_content_galileo.replaces("post_content");
Template.post_domain_galileo.replaces("post_domain");
```

## Templates dynamiques avec iron:dynamic-template

* https://atmospherejs.com/iron/dynamic-template

## autoform

```
// Components
autoForm
quickForm
afFieldInput
afFieldMessage
afFieldIsInvalid
afFormGroup
afQuickField
afFieldValueIs and afFieldValueContains
afFieldNames
afQuickFields
// Objects and Arrays
afObjectField
afArrayField
afEachArrayItem
afArrayFieldIsFirstVisible and afArrayFieldIsLastVisible
// Form Types
insert
update
update-pushArray
method
method-update
normal
disabled
readonly
```

```js

// Rapport avec :

summary: {
  type: String,
  optional: true,
  max: 2000,
  autoform: {
    afFieldInput: {
      type: "textarea",
      rows: 10,
      class: "foo"
    }
  }
}

// !! api.use('aldeed:simple-schema@1.1.0'); : last = 1.3.3

// .meteor/versions:
aldeed:autoform@5.3.0
aldeed:collection2@2.3.3
aldeed:simple-schema@1.3.3


//autoform -> autoform.js
AutoForm = AutoForm || {};
AutoForm.formPreserve = new FormPreserve("autoforms");
AutoForm.reactiveFormData = new FormData();
AutoForm._inputTypeDefinitions = {}; //for storing input type definitions added by AutoForm.addInputType
AutoForm._formTypeDefinitions = {}; //for storing submit type definitions added by AutoForm.addFormType
arrayTracker = new ArrayTracker();
AutoForm._destroyForm = {};
globalDefaultTemplate = "bootstrap3";
defaultTypeTemplates = {};
deps = {
  defaultTemplate: new Tracker.Dependency(),
  defaultTypeTemplates: {}
};

AutoForm.setDefaultTemplate("semanticUI");

//autoform -> autoform-api.js
AutoForm = AutoForm || {};

AutoForm.addInputType = function afAddInputType(name, definition) {
  var obj = {};
  obj[name] = definition;
  _.extend(AutoForm._inputTypeDefinitions, obj);
};
```

```js
//autoform -> inputTypes/button/button.js
AutoForm.addInputType("button", {
  template: "afInputButton"
});
```

```
//autoform -> inputTypes/button/button.html
<template name="afInputButton">
  <input type="button" value="{{this.value}}" {{this.atts}}/>
</template>


//semantic-ui -> templates/semantic-ui/inputTypes/button/button.html
<template name="afInputButton_semanticUI">
  <input type="button" value="{{this.value}}" {{attsPlusButtonClass}}/>
</template>
```
