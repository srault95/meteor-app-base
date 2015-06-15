Settings = Collections.Settings = new Mongo.Collection("Settings");
Collections.Settings.attachSchema(Schemas.Settings);

var is_allow_settings = function(){
    var loggedInUser = Meteor.user();
    return Roles.userIsInRole(loggedInUser, [AppConfig.roles.admin, AppConfig.roles.site_manager]);
}

Settings.allow({
    insert: function (userId, doc) {
        return is_allow_settings();
    },
    update: function (userId, doc, fieldsName, modifier) {
        return is_allow_settings();
    },
    remove: function (userId, doc) {
        return is_allow_settings();
    }
});
