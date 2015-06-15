

// Pas besoin de souscription coté client
Meteor.publish(null, function (){
  return Meteor.roles.find({})
})

/*
// Filtrage d'une collection par role et group. Ne renvoit que données du group

Meteor.publish('secrets', function (group) {
  if (Roles.userIsInRole(this.userId, ['view-secrets','admin'], group)) {

    return Meteor.secrets.find({group: group});

  } else {

    // user not authorized. do not publish secrets
    this.stop();
    return;

  }
});

*/