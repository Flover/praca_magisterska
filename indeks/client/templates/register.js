var ERRORS_KEY = {};

Template.registerStudent.helpers({
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

Template.registerStudent.events({
   'submit #register-form' : function(event, template) {
     event.preventDefault();
     var username = template.find('#account-text').value;
     var password = template.find('#account-password').value;
     var firstName = template.find('#account-firstName').value;
     var lastName = template.find('#account-lastName').value;
     var email = (firstName.substring(0,1)+lastName+'@sigma.ug.edu.pl').toLowerCase();

     email = s.replaceAll(email, 'ą', 'a');
     email = s.replaceAll(email, 'ń', 'n');
     email = s.replaceAll(email, 'ę', 'e');
     email = s.replaceAll(email, 'ć', 'c');
     email = s.replaceAll(email, 'ż', 'z');
     email = s.replaceAll(email, 'ź', 'z');
     email = s.replaceAll(email, 'ó', 'o');
     email = s.replaceAll(email, 'ł', 'l');
     email = s.replaceAll(email, 'ć', 'c');

     var errors = {};


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

        //Meteor.users.update
        Accounts.createUser({
          username: username,
          email: email,
          password: password,
          profile:{
            name: 'student',
            firstName: firstName,
            lastName: lastName,
            semester: 1,
            subjects:[]
          }
        }, function(err){
            if (err) {
              // Inform the user that account creation failed
             return Session.set(ERRORS_KEY, {'none': err.reason});
            } else {
              user = Meteor.user();

              Meteor.call('assignRole', user, 'student');
              Router.go('/');
            //  Subjects.update({'semester': 1}, {$addToSet: {'students': username}});
              // Success. Account has been created and the user
              // has logged in successfully.
            }

          });

        return false;
   }
 });


 Template.registerTeacher.helpers({
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

 Template.registerTeacher.events({
    'submit #register-form' : function(event, template) {
      event.preventDefault();
      var username = template.find('#account-text').value;
      var password = template.find('#account-password').value;
      var academicTitle = template.find('#account-title').value;
      var firstName = template.find('#account-firstName').value;
      var lastName = template.find('#account-lastName').value;
      var email = (firstName.substring(0,1)+lastName+'@sigma.ug.edu.pl').toLowerCase();

      email = s.replaceAll(email, 'ą', 'a');
      email = s.replaceAll(email, 'ń', 'n');
      email = s.replaceAll(email, 'ę', 'e');
      email = s.replaceAll(email, 'ć', 'c');
      email = s.replaceAll(email, 'ż', 'z');
      email = s.replaceAll(email, 'ź', 'z');
      email = s.replaceAll(email, 'ó', 'o');
      email = s.replaceAll(email, 'ł', 'l');
      email = s.replaceAll(email, 'ć', 'c');

      var errors = {};


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

         //Meteor.users.update
         Accounts.createUser({
           username: username,
           email: email,
           password: password,
           profile:{
             name: 'wykładowca',
             title: academicTitle,
             firstName: firstName,
             lastName: lastName,
             subjects:[]
           }
         }, function(err){
             if (err) {
               // Inform the user that account creation failed
              return Session.set(ERRORS_KEY, {'none': err.reason});
             } else {
               user = Meteor.user();

               Meteor.call('assignRole', user, 'wykładowca');
               Router.go('/');
               // Success. Account has been created and the user
               // has logged in successfully.
             }

           });

         return false;
    }
  });


  Template.registerAdmin.helpers({
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

  Template.registerAdmin.events({
     'submit #register-form' : function(event, template) {
       event.preventDefault();
       var username = template.find('#account-text').value;
       var password = template.find('#account-password').value;
       var firstName = template.find('#account-firstName').value;
       var lastName = template.find('#account-lastName').value;
       var email = (firstName.substring(0,1)+lastName+'@sigma.ug.edu.pl').toLowerCase();

       email = s.replaceAll(email, 'ą', 'a');
       email = s.replaceAll(email, 'ń', 'n');
       email = s.replaceAll(email, 'ę', 'e');
       email = s.replaceAll(email, 'ć', 'c');
       email = s.replaceAll(email, 'ż', 'z');
       email = s.replaceAll(email, 'ź', 'z');
       email = s.replaceAll(email, 'ó', 'o');
       email = s.replaceAll(email, 'ł', 'l');
       email = s.replaceAll(email, 'ć', 'c');

       var errors = {};


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

         // Trim and validate the input
          //Meteor.users.update
          Accounts.createUser({
            username: username,
            email: email,
            password: password,
            profile:{
              name: 'admin',
              firstName: firstName,
              lastName: lastName
            }
          }, function(err){
              if (err) {
                // Inform the user that account creation failed
               return Session.set(ERRORS_KEY, {'none': err.reason});
              } else {
                user = Meteor.user();

                Meteor.call('assignRole', user, 'admin');
                Router.go('/');
                // Success. Account has been created and the user
                // has logged in successfully.
              }

            });

          return false;
     }
   });


   Template.registerDeanery.helpers({
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

   Template.registerDeanery.events({
      'submit #register-form' : function(event, template) {
        event.preventDefault();
        var username = template.find('#account-text').value;
        var password = template.find('#account-password').value;
        var firstName = template.find('#account-firstName').value;
        var lastName = template.find('#account-lastName').value;
        var email = (firstName.substring(0,1)+lastName+'@sigma.ug.edu.pl').toLowerCase();

        email = s.replaceAll(email, 'ą', 'a');
        email = s.replaceAll(email, 'ń', 'n');
        email = s.replaceAll(email, 'ę', 'e');
        email = s.replaceAll(email, 'ć', 'c');
        email = s.replaceAll(email, 'ż', 'z');
        email = s.replaceAll(email, 'ź', 'z');
        email = s.replaceAll(email, 'ó', 'o');
        email = s.replaceAll(email, 'ł', 'l');
        email = s.replaceAll(email, 'ć', 'c');


        var errors = {};


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

           //Meteor.users.update
           Accounts.createUser({
             username: username,
             email: email,
             password: password,
             profile:{
               name: 'dziekanat',
               firstName: firstName,
               lastName: lastName,
             }
           }, function(err){
               if (err) {
                 // Inform the user that account creation failed
                return Session.set(ERRORS_KEY, {'none': err.reason});
               } else {
                 user = Meteor.user();

                 Meteor.call('assignRole', user, 'dziekanat');
                 Router.go('/');
                 // Success. Account has been created and the user
                 // has logged in successfully.
               }

             });

           return false;
      }
    });
