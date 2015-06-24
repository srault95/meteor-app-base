# Templates Meteor

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
