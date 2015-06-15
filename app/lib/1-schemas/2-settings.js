
// TODO: faire plutot un global et 1 par client ?
// TODO: email from/... settings
Schemas.Settings = new SimpleSchema({
    global: {
		type: Boolean,
        unique: true,
        defaultValue: true,
    },
    maintenance: {
		type: Boolean,
        defaultValue: false,
        label: "Activé ?"
    },
	mailUrl: {
		type: String, //TODO: validator
		label: "SMTP / Mail URL",
		optional: true
	},
	captcha: {
		type: Object,
		label: "Captcha",
		optional: true
	},
	'captcha.enable': {
		type: Boolean,
        defaultValue: false,
        label: "Activé ?"
	},
	'captcha.siteKey': {
		type: String,
		optional: true //TODO: requis si captcha.enable true
	},
	'captcha.secret': {
		type: String,
		optional: true
	},
	sikka: {
		type: Object,
		label: "Sikka Configuration",
		optional: true
	},
	'sikka.rateLimits': {
		type: Object,
		label: "rateLimits",
		optional: true
	},
	'sikka.rateLimits.perIp': {
		type: Number,
		optional: true,
		defaultValue: 50
	},
	kadira: {
		type: Object,
		label: "Kadira",
		optional: true
	},
	'kadira.appId': {
		type: String,
		optional: true
	},
	'kadira.appSecret': {
		type: String,
		optional: true
	}
});