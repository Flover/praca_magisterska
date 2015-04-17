var ERRORS_KEY = 'registerErrors';

Template.register.helpers({
  errorMessages: function() {
    return _.values(Session.get(ERRORS_KEY));
  },
  errorClass: function(key) {
    return Session.get(ERRORS_KEY)[key] && 'error';
  }
});

Template.register.events({
   'submit #register-form' : function(event, template) {
     event.preventDefault();
     var username = template.find('#account-text').value
       , email = template.find('#account-email').value
       , password = template.find('#account-password').value;

       // trim helper
     /*var trimInput = function(val) {
       return val.replace(/^\s*|\s*$/g, "");
     }*/

    var errors = {};

    if (! email) {
      errors.email = 'Email required';
    }

    if (! password) {
      errors.password = 'Password required';
    }

    if (! username) {
      errors.username = 'Album number required';
    }

    Session.set(ERRORS_KEY, errors);
    if (_.keys(errors).length) {
      return;
    }

    // email = trimInput(email);

    // Trim and validate the input

     Accounts.createUser({username: username, email: email, password: password}, function(err){
         if (err) {
           // Inform the user that account creation failed
           console.log('something goes wrong :(');
           return Session.set(ERRORS_KEY, {'none': err.reason});
         } else {
           console.log('Hurray!')
           // Success. Account has been created and the user
           // has logged in successfully.
         }

       });

     return false;
   }
 });
