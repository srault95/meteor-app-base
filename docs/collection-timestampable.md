# collection-timestampable

https://atmospherejs.com/zimme/collection-timestampable

Peut ajouter les champs createdAt, createdBy, updatedAt, updatedBy à chaque document

## Packages utilisés

    'matb33:collection-hooks@0.7.6'
    'zimme:collection-behaviours@1.0.3'
    'aldeed:autoform@4.0.0 || 5.0.0'
    'aldeed:collection2@2.0.0'
    'aldeed:simple-schema@1.0.3'

## Installation

  $ meteor add zimme:collection-timestampable

## Usage

```
    Posts = new Mongo.Collection('posts');

    // Default options
    Posts.attachBehaviour('timestampable');

    // Custom options
    Posts.attachBehaviour('timestampable', {
      createdAt: 'insertedAt' // nom du champs dans le document
      createdBy: 'insertedBy'
      updatedAt: 'modifiedAt'
      updatedBy: false
    });
```

