Meteor.startup(function() {
    AutoForm.setDefaultTemplate("semanticUI");
});

FlashMessages.configure({
    autoHide: true,
    hideDelay: 3000, //3 secondes
    autoScroll: true
});
