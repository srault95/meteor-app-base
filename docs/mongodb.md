# MongoDB et Meteor.Collection

* http://docs.meteor.com/#/full/mongo_collection

## Génération automatique d'ID

Par défaut, Meteor, génère un String aléatoire au lieu d'un [ObjectId](http://docs.meteor.com/#/full/mongo_object_id)

Pour générer un ObjectId, il faut utiliser l'option:

```js
Chatrooms = new Mongo.Collection("chatrooms", {idGeneration: 'MONGO'});

Chatrooms = new Mongo.Collection("chatrooms", {idGeneration: 'STRING'});
// Equivalent à
Chatrooms = new Mongo.Collection("chatrooms");
```

## Syntaxe particulière de Meteor

Meteor.Collection ne suit pas complètement la syntaxe d'origine de MongoDB

```js
Teams = new Mongo.Collection('teams');
Teams.find(); // finds all your teams
Teams.find().fetch() // finds all your teams and returns them as JSON
Teams.insert({name: 'Team 1'}); // Inserts a team into Mongo
Teams.update({_id: id}, {$set: {name: 'Team 2'}}); // Update a team
Teams.remove(id); // Removes a team
```

## Différences entre Meteor.Collection coté server et client

## Collection null

