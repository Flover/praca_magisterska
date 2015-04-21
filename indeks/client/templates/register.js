var ERRORS_KEY = {};

Template.register.helpers({
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

Template.register.events({
   'submit #register-form' : function(event, template) {
     event.preventDefault();
     var username = template.find('#account-text').value;
     var email = template.find('#account-email').value;
     var password = template.find('#account-password').value;
     var role = template.find('#account-role').value;
     var firstName = template.find('#account-firstName').value;
     var lastName = template.find('#account-lastName').value;


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

     Accounts.createUser({
       username: username,
       email: email,
       password: password,
       profile:{
         name: role,
         firstName: firstName,
         lastName: lastName,
         semester: 1,
         subjects:[]
       }
     }, function(err){
         if (err) {
           // Inform the user that account creation failed
           console.log('something goes wrong :(');
           return Session.set(ERRORS_KEY, {'none': err.reason});
         } else {
           console.log('Hurray!')
           Router.go('/');
           // Success. Account has been created and the user
           // has logged in successfully.
         }

       });

     return false;
   }
 });
