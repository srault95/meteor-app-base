# Simple Schema

**Un package qui va vraiment vous faciliter la vie !!!**

En résumer, simple-schema vous permet de définir la structure de chaque Collection ou d'un simple formulaire.

Mais le plus important est que la validation est utilisable autant coté client que coté serveur.

https://github.com/aldeed/meteor-simple-schema

**Exemple:**

```js

BookSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  author: {
    type: String,
    label: "Author"
  },
  copies: {
    type: Number,
    label: "Number of copies",
    min: 0
  },
  lastCheckedOut: {
    type: Date,
    label: "Last date this book was checked out",
    optional: true
  },
  summary: {
    type: String,
    label: "Brief summary",
    optional: true,
    max: 1000
  }
});

```

## Les types de champs

**En version simple:**

    String
    Number
    Boolean
    Object

**La même chose comme tableau:**

    [String]
    [Number]
    [Boolean]
    [Object]
    [Date]




