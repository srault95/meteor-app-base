Schemas = {};
UI.registerHelper("Schemas", Schemas);

coreSubscriptions = new SubsManager({
  // cache recent 50 subscriptions
  cacheLimit: 50,
  // expire any subscription after 30 minutes
  expireIn: 30
});


SimpleSchema.debug = true;

SimpleSchema.extendOptions({
	editable: Match.Optional(Boolean),
	hidden: Match.Optional(Boolean),
});

/*


SimpleSchema.extendOptions({
  private: Match.Optional(Boolean),
  editable: Match.Optional(Boolean),  //
  hidden: Match.Optional(Boolean),     //
  editableBy: Match.Optional([String]), //editableBy: ["member", "admin"],
  publishedTo: Match.Optional([String]),
  required: Match.Optional(Boolean), // required: true means the field is required to have a complete profile
  public: Match.Optional(Boolean), // public: true means the field is published freely
  profile: Match.Optional(Boolean), // profile: true means the field is shown on user profiles
  template: Match.Optional(String) // template used to display the field
  // editableBy: Match.Optional(String)
});
*/



/*
Schema.SimpleDomain = new SimpleSchema({
	names: {
		type: [String],
		label: "Domaines",
	},
});
*/