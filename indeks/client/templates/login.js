var ERRORS_KEY = 'loginErrors';

Template.login.helpers({
  errorMessages: function() {
    return _.values(Session.get(ERRORS_KEY) || {});
  },
  errorClass: function(key) {
    if(Session.get(ERRORS_KEY) && Session.get(ERRORS_KEY)[key]){
      return 'error';
    }
    else {
      return '';
    }
  }
});

Template.login.events({
    'submit #login-form' : function(event, template){
      event.preventDefault();

      // retrieve the input field values
      var username = template.find('#login-text').value;
      var password = template.find('#login-password').value;

      var errors = {};

      if (! username) {
          Materialize.toast('Musisz podać nazwę użytkownika', 4000);
      }

      if (! password) {
          Materialize.toast('Musisz podać hasło', 4000);
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
          //console.log("Go away! You don't exist!");
          if(username !== '' && password !== ''){
              Materialize.toast('Podałeś błędne hasło', 4000);
          }
        } else {
          Materialize.toast('Witaj!', 4000, 'rounded');
          // The user has been logged in.
      //    console.log("everything is ok :)");
        }
      });
         return false;
      }
  });
