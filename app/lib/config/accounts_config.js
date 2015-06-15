T9n.setLanguage('fr');

/*
Accounts.validateNewUser(function (user) {
    var loggedInUser = Meteor.user();

    if (Roles.userIsInRole(loggedInUser, ['admin','manage-users'])) {
      return true;
    }

    throw new Meteor.Error(403, "Not authorized to create new users");
});
*/

/*
- https://github.com/meteor-useraccounts/core/blob/master/Guide.md#routing

Config par default:
    AccountsTemplates.configureRoute('signIn');
Ou custom:
    AccountsTemplates.configureRoute('signIn', {
        name: 'signin',
        path: '/login',
        template: 'myLogin',
        layoutTemplate: 'myLayout', //facultatif car définit dans la config iron:router
        redirect: '/user-profile',
        OU
        redirect: function(){
            var user = Meteor.user();
            if (user)
              Router.go('/user/' + user._id);
        }
    });


States:
    changePwd	    Change password form asking to set a new password
    enrollAccount	Account Enrollment form asking to set a password
    forgotPwd	    Forgot Password form asking for the email address where to send a reset password link
    hide	        None at all...
    resendVerificationEmail	Login form with an additional button to get another verification email
    resetPwd	    Reset Password form asking to set a password
    signIn	        Login form
    signUp	        Registration form
    verifyEmail	    Only the result about email verification

*/

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');

AccountsTemplates.configure({

    reCaptcha: {
        theme: "light",
        data_type: "image"
    },
    showReCaptcha: false,

    //defaultLayout: 'emptyLayout',
    overrideLoginErrors: true,
    enablePasswordChange: true,
    sendVerificationEmail: false,

    // Appearance
    showAddRemoveServices: true,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    //enforceEmailVerification: true,
    //confirmPassword: true,
    //continuousValidation: false,
    //displayFormLabels: true,
    //forbidClientAccountCreation: false,
    //formValidationFeedback: true,
    //homeRoutePath: '/',
    //showAddRemoveServices: false,
    //showPlaceholders: true,

    negativeValidation: true,
    positiveValidation:true,
    negativeFeedback: false,
    positiveFeedback:true,

    // Privacy Policy and Terms of Use
    //privacyUrl: 'privacy',
    //termsUrl: 'terms-of-use',
});

/*
if (! _.isUndefined(Meteor.settings.sikka)){
    //TODO: AccountsTemplates.options.showReCaptcha = true
}
*/

/*
AccountsTemplates :  {"options":{"showReCaptcha":true,"overrideLoginErrors":true,"enablePasswordChange":true,"sendVerificationEmail":false,"showAddRemoveServices":true,"showForgotPasswordLink":true,"showLabels":true,"showPlaceholders":true,"showResendVerificationEmailLink":false,"negativeValidation":true,"positiveValidation":true,"negativeFeedback":false,"positiveFeedback":true,"confirmPassword":true,"defaultState":"signIn","forbidClientAccountCreation":false,"lowercaseUsername":false,"socialLoginStyle":"popup","homeRoutePath":"/","redirectTimeout":2000,"reCaptcha":{"theme":"light","data_type":"image"}}}
*/

/*
AccountsTemplates.configure({

    reCaptcha: {
        siteKey: '6Lfy2gcTAAAAAKnsML6lr46PHNJMIC-XyH8QKSLl',
        secret: '6Lfy2gcTAAAAAJrcx1pMcwSpw-MG7IOkLJAZG6HM',
        theme: "light",
        data_type: "image"
    },
    showReCaptcha: false,

    // Behaviour
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    //privacyUrl: 'privacy',
    //termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,

    // Hooks
    //onLogoutHook: myLogoutFunc,
    //onSubmitHook: mySubmitFunc,
    //preSignUpHook: myPreSubmitFunc,

    // Texts
    texts: {
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },
});
*/