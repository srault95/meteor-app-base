# collection2

* https://github.com/aldeed/meteor-collection2

**Ajout à SimpleSchema:**

  index: Match.Optional(Match.OneOf(Number, String, Boolean)),
  unique: Match.Optional(Boolean),
  denyInsert: Match.Optional(Boolean),
  denyUpdate: Match.Optional(Boolean)

  denyInsert: peut servir obliger à travailler sur des données existantes
  denyUpdate: pour des données non modifiables comme un champs CreatedBy

**Ajout à Collections:**

  Injecte la validation dans les méthodes insert, update, upsert

**Usage Insert:**

  Books.insert({title: "Ulysses", author: "James Joyce"}, function(error, result) {
    //The insert will fail, error will be set,
    //and result will be undefined or false because "copies" is required.
    //
    //The list of errors is available on `error.invalidKeys` or by calling Books.simpleSchema().namedContext().invalidKeys()
  });

**Usage Update:**

  Books.update(book._id, {$unset: {copies: 1}}, function(error, result) {
    //The update will fail, error will be set,
    //and result will be undefined or false because "copies" is required.
    //
    //The list of errors is available on `error.invalidKeys` or by calling Books.simpleSchema().namedContext().invalidKeys()
  });