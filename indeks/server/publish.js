Meteor.startup(function (){
  ar = Roles.getAllRoles().count();
  if(ar === 0){
    console.log("Dodaje role 'admin'");
    Roles.createRole('admin');
    console.log("Dodaje role 'student'");
    Roles.createRole('student');
    console.log("Dodaje role 'dziekanat'");
    Roles.createRole('dziekanat');
    console.log("Dodaje role 'wykładowca'");
    Roles.createRole('wykładowca');
    console.log("koniec");
    console.log(ar);
  }

  if(Meteor.users.find().count()===0){
    Accounts.createUser({
      username: 'admin',
      email: 'admin@sigma.ug.edu.pl',
      password: 'abcdef',
      profile:{
        name: 'admin',
        firstName: 'Jan',
        lastName: 'Kowalski',
        subjects:[]
      }
    });

    user = Meteor.users.find({'username': 'admin'}).fetch();
    Meteor.call('assignRole', user, 'admin');

    console.log(Meteor.users.find({'username': 'admin'}).fetch());
  }

  temporaryFiles.allow({
  insert: function (userId, file) {
    return true;
  },
  remove: function (userId, file) {
    return true;
  },
  read: function (userId, file) {
    return true;
  },
  write: function (userId, file, fields) {
    return true;
  }
});

/*        // store the default createUser method handler
        var default_create_user = Meteor.server.method_handlers.createUser;

        // remove it so we can register our own
        delete Meteor.server.method_handlers.createUser;

        Meteor.methods({createUser: function (options) {

            var default_login_method = Accounts._loginMethod;

            // check if noAutoLogin flag is present
            if (options.noAutoLogin)
            {
                // temporarily disable the login method while creating our user

                // NB: it might be possible that simultaneous calls to createUser that do want the default behavior
                // would use the altered Accounts._loginMethod instead

                Accounts._loginMethod = function(s, m, a, p, fn)
                {
                    // this is the callback that is constructed with a closure of the options array and calls internal create functions
                    fn();

                    // restore default _loginMethod so other calls are not affected
                    Accounts._loginMethod = default_login_method;
                }
            }

            // invoke the default create user now that the login behavior has been short-circuited
            default_create_user(options);

        }});*/
    });

Meteor.publish('theSubjects', function () {
  if(this.userId){
    if (Roles.userIsInRole(this.userId, 'admin')) {
      return [Meteor.users.find({}), Subjects.find({})];
    } else if(Roles.userIsInRole(this.userId, 'dziekanat')){
        return [Meteor.users.find({}), Subjects.find({})];
    } else if(Roles.userIsInRole(this.userId, 'student')){
        var user = Meteor.users.findOne({'_id': this.userId})._id;
        return Subjects.find({"students": user});
    } else if(Roles.userIsInRole(this.userId, 'wykładowca')){
        return [Subjects.find({}), Meteor.users.find({})];
      }
    }
    else {
      this.ready();
    }
});

Meteor.publish('theGrades', function () {
  if(this.userId){
    var currentUserId = this.userId;
    var userId = Meteor.users.findOne({'_id': currentUserId})._id;
    if(Roles.userIsInRole(this.userId, 'student')){
      return Grades.find({"studentId": userId});
    } else if(Roles.userIsInRole(this.userId, 'dziekanat')){
      return Grades.find({});
    } else {
      return Grades.find({});
    }
  }
  else {
    this.ready();
  }
});

Meteor.publish('TheSubjectStudents', function (subjectId) {
  var grades = Grades.find({'subjectId': subjectId}).fetch();
  var usersIds = [];
  for(var i = 0; i < grades.length; i+=1){
    usersIds.push(grades[i].studentName);
  }
  return Meteor.users.find({'username': {$in: usersIds }});
});
