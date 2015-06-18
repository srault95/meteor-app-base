
Schemas.UserCountry = new SimpleSchema({
    name: {
        type: String
    },
    code: {
        type: String,
        regEx: /^[A-Z]{2}$/
    }
});

Schemas.UserProfile = new SimpleSchema({
    name: {
        type: String,
        optional: true
    },
    firstName: {
        type: String,
        regEx: /^[a-zA-Z-]{2,25}$/,
        optional: true
    },
    lastName: {
        type: String,
        regEx: /^[a-zA-Z]{2,25}$/,
        optional: true
    },
    birthday: {
        type: Date,
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['Male', 'Female'],
        optional: true
    },
    organization : {
        type: String,
        regEx: /^[a-z0-9A-z .]{3,30}$/,
        optional: true
    },
    website: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    bio: {
        type: String,
        optional: true
    },
    country: {
        type: Schemas.UserCountry,
        optional: true
    }
});

Schemas.UserSchema = new SimpleSchema({
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/
    },
    emails: {
        type: [Object],
        // this must be optional if you also use other login services like facebook,
        // but if you use only accounts-password, then it can be required
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schemas.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    roles: {
        type: [Object],
        optional: true,
        //blackbox: true
    },
});

Meteor.users.attachSchema(Schemas.UserSchema);

debug_schema = function(ss){
    schema = ss.schema();
    console.log(JSON.stringify(schema));
    for (schemaK in schema) {
        field = schema[schemaK];
        console.info("field : ", schemaK, field);
    }
}

debug_schema(Schemas.UserSchema);
/*
{"username":{"regEx":{}},"emails":{"optional":true},"emails.$.address":{"regEx":{}},"emails.$.verified":{},"createdAt":{},"profile":{"optional":true},"services":{"optional":true,"blackbox":true},"roles":{"optional":true},"profile.name":{"optional":true},"profile.firstName":{"regEx":{},"optional":true},"profile.lastName":{"regEx":{},"optional":true},"profile.birthday":{"optional":true},"profile.gender":{"allowedValues":["Male","Female"],"optional":true},"profile.organization":{"regEx":{},"optional":true},"profile.website":{"regEx":{},"optional":true},"profile.bio":{"optional":true},"profile.country":{"optional":true},"profile.country.name":{},"profile.country.code":{"regEx":{}},"emails.$":{"optional":true},"roles.$":{"optional":true,"blackbox":true}}
*/