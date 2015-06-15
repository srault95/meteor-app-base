Settings = Collections.Settings = new Mongo.Collection("settings");

Collections.Settings.attachSchema(Schemas.Settings);

Settings.attachBehaviour('timestampable');

Settings.attachBehaviour('softRemovable');

var is_allow_settings = function(){
    var loggedInUser = Meteor.user();
    return Roles.userIsInRole(loggedInUser, [AppConfig.roles.admin, AppConfig.roles.site_manager]);
}

Settings.userCanInsert = function(userId, doc) {
	return Settings.find().count() === 0 && is_allow_settings();
}

Settings.userCanUpdate = function(userId, doc) {
	return is_allow_settings();
}

Settings.userCanRemove = function(userId, doc) {
	return is_allow_settings();
}

