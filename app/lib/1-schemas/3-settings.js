
// TODO: faire plutot un global et 1 par client ?
// TODO: email from/... settings

//custom: option_captcha
var option_captcha = function () {
	var customCondition = this.field('captcha.enable').value === true;
	if (customCondition) {
        return "required";
    }
}

var option_sikka = function () {
	var customCondition = this.field('sikka.enable').value === true;
	if (customCondition) {
        return "required";
    }
}

Schemas.Settings = new SimpleSchema({
    global: {
		type: Boolean,
        unique: true,
        defaultValue: true,
        hidden: true
    },
    maintenance: {
		type: Boolean,
        defaultValue: false,
        label: "Mode Maintenance",
        autoform: {
        	checkboxType: 'toggle',
        },
    },
	mailUrl: {
		type: String, //TODO: validator
		label: "SMTP / Mail URL",
		optional: true
	},
	captcha: {
		type: Object,
		label: "Captcha",
		optional: true,
	},
	'captcha.enable': {
		type: Boolean,
        defaultValue: false,
        label: "Actif",
        autoform: {
        	checkboxType: 'toggle',
        }
	},
	'captcha.siteKey': {
		type: String,
		optional: true,
		custom: option_captcha
	},
	'captcha.secret': {
		type: String,
		optional: true,
		custom: option_captcha
	},
	sikka: {
		type: Object,
		label: "Sikka Configuration",
		optional: true
	},
	'sikka.enable': {
		type: Boolean,
        defaultValue: false,
        label: "Actif",
        autoform: {
        	checkboxType: 'toggle',
        }
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