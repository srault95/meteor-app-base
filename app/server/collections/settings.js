Settings.allow({
    insert: function (userId, doc) {
        return Settings.userCanInsert(userId, doc);
    },
    update: function (userId, doc, fieldsName, modifier) {
        return Settings.userCanUpdate(userId, doc);
    },
    remove: function (userId, doc) {
        return Settings.userCanRemove(userId, doc);
    }
});

var set_or_update = function(doc){

    console.log("set or update settings : ", JSON.stringify(doc));

    //MAIL_URL='smtp://user:password@mailhost:port/'
    process.env['MAIL_URL'] = doc.mailUrl;

    /*
    Sikka: starting with these configurations:
        {"captcha":{"siteKey":"6LdkcgMTAAAAAJosMQhYSfKeFldhn644i9w9c4Oi","secret":"6LdkcgMTAAAAADftIWaISsvQ7SqIeLqHM3PWu79Q"},
        "rateLimits":{"perIp":20,"perHuman":20,"perSession":20},
        "times":{"blockIpFor":120000,"humanLivesUpto":3600000},
        "onlyForHumans":false}
    */

    /*
    Doc:
     {  "maintenance":false,
        "global":true,
        "captcha":{"enable":false},
        "sikka":{"rateLimits":{"perIp":50}},
        "_id":"9eMtZMAMks9y69pes",
        "createdAt":"2015-06-15T16:45:33.504Z","createdBy":"0"}
        doc.sikka.rateLimits.perIp
        doc.sikka.rateLimits.perIp
    */

    if (doc.captcha){
        if (doc.captcha.enabled){

            Sikka.Config.captcha.siteKey = doc.captcha.siteKey;
            Sikka.Config.captcha.secret = doc.captcha.secret;

            AccountsTemplates.options.showReCaptcha = true;
            AccountsTemplates.options.siteKey = doc.captcha.siteKey;
            AccountsTemplates.options.secret = doc.captcha.secret;

        }

        console.info("Sikka.Config.rateLimits.perIp : ", Sikka.Config.rateLimits.perIp);
        Sikka.Config.rateLimits.perIp = doc['sikka']['rateLimits']['perIp'];
        console.info("Sikka.Config.rateLimits.perIp : ", Sikka.Config.rateLimits.perIp);

        //JSON.stringify(Sikka.Config);
    }

}

Settings.after.insert(function(userId, doc) {
    //Mise à jour Meteor.settings
    //Meteor.settings
    return set_or_update(doc);
});

Settings.after.update(function(userId, doc, fieldNames, modifier, options) {
    return set_or_update(doc);
});

Settings.after.remove(function(userId, doc) {
    return set_or_update(doc);
});

Meteor.startup(function() {

    if (Settings.find().count() === 0) {
        console.info('no settings in database!  creating a configuration file.');

        //TODO: charger yaml si existe

        configurationId = Settings.insert({
          //installed: false,
          maintenance: false,
          mailUrl: process.env.MAIL_URL
        });

        console.info('Configuration file created: ' + configurationId);
    } else {
        console.info('Update from existing settings');
        //doc = Settings.find().fetch()[0]
        //doc = Settings.find()[0]
        var doc = Settings.findOne();
        set_or_update(doc);
    }

});

