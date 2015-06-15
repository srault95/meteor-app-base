/*
Restivus.configure({
  apiPath: 'api/',
  prettyJson: true,
  defaultHeaders: { 'Content-Type': 'application/json' },
  enableCors: true,
  useAuth: true, //If true, POST /login and GET /logout added
  auth: {
    token: 'auth.apiKey', // services.resume.loginTokens.token
    user: function() {
      return {
        userId: this.request.headers['user-id'],
        token: this.request.headers['login-token']
      };
    }
  },
  onLoggedIn: function() {
    return console.log(this.user.username + " (" + this.userId + ") logged in");
  },
  onLoggedOut: function() {
    return console.log(this.user.username + " (" + this.userId + ") logged out");
  },
  useClientRouter: true
});

//curl -X POST http://localhost:3000/api/items/ -d "title=Witty Title" -d "author=Jack Rose"
Restivus.addCollection(Items);

Restivus.addCollection(Meteor.users, {
    excludedEndpoints: ['deleteAll', 'put'],
    routeOptions: {
      authRequired: true
    },
    endpoints: {
      post: {
        authRequired: false
      },
      delete: {
        roleRequired: 'admin' // requis: alanning:roles
      }
    }
});
*/