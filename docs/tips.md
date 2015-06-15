# Tips

## Affecter automatiquement le user.id au document

```javascript

DockerImages.before.insert(function (userId, doc) {
    doc.userId = Meteor.userId();
});

```