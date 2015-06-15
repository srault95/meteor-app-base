Schemas.Settings = new SimpleSchema({
    global: {
		type: Boolean,
        unique: true,
        defaultValue: true,
    },
	mailUrl: {
		type: String,
		label: "SMTP / Mail URL",
	},
	captcha: {
		type: Object,
		label: "Captcha",
		optional: true
	},
	'captcha.siteKey': {
		type: String
	},
	'captcha.secret': {
		type: String
	},
	kadira: {
		type: Object,
		label: "Kadira",
		optional: true
	},
	'kadira.appId': {
		type: String
	},
	'kadira.appSecret': {
		type: String
	}
});