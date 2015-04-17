var ERRORS_KEY = 'loginErrors';

Template.login.helpers({
  errorMessages: function() {
    return _.values(Session.get(ERRORS_KEY));
  },
  errorClass: function(key) {
    return Session.get(ERRORS_KEY)[key] && 'error';
  }
});

Template.login.events({

    'submit #login-form' : function(event, template){
      event.preventDefault();
      // retrieve the input field values
      var username = template.find('#login-text').value
        , password = template.find('#login-password').value;

      var errors = {};

      if (! username) {
          errors.username = 'Your album number is required';
      }

      if (! password) {
          errors.password = 'Password is required';
      }

      Session.set(ERRORS_KEY, errors);
      if (_.keys(errors).length) {
        return;
      }
        // Trim and validate your fields here....

        // If validation passes, supply the appropriate fields to the
        // Meteor.loginWithPassword() function.
        Meteor.loginWithPassword(username, password, function(err){
        if (err){
          // The user might not have been found, or their passwword
          // could be incorrect. Inform the user that their
          // login attempt has failed.
          console.log("Go away! You don't exist!")
          return Session.set(ERRORS_KEY, {'none': err.reason});
        } else {
          // The user has been logged in.
          console.log("everything is ok :)")
        }
      });
         return false;
      }
  });
