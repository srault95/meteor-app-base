
var createUserAdminDefault = function(){

    if (Meteor.users.find().count() === 0) {
        var userId = Accounts.createUser({
          email: AppConfig.default_admin.email,
          password: AppConfig.default_admin.password,
          profile: { name: 'Admin' },
        });
        Meteor.users.update({_id: userId}, {$set:{'emails.0.verified': true}});
        Roles.addUsersToRoles(userId, [AppConfig.roles.admin]);
    }
}

Meteor.startup(function() {
    createUserAdminDefault();

    if (Settings.find().count() > 0) {
        AppConfig.configured = true
    }

});
