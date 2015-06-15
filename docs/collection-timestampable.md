# collection-timestampable

https://atmospherejs.com/zimme/collection-timestampable

Peut ajouter les champs createdAt, createdBy, updatedAt, updatedBy à chaque document

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

