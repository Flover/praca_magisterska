//
Router.route('/', {
  loadingTemplate: 'loading',
  waitOn: function () {
    return [ Meteor.subscribe('theSubjects') ];
  },
  onBeforeAction: function () {
    if(!Meteor.user()){
      this.layout('appLayout');
      this.render('login');
    }
    else {
      this.next();
    }
  },
  action: function () {
    this.layout('appLayout');
    this.render('subjectList', {
      'data': {
        'User': Meteor.user(),
        'mySubjects': Subjects.find(),
        'teacherSubjects': Subjects.find({'leading': Meteor.user().profile.title + " " + Meteor.user().profile.firstName + " " + Meteor.user().profile.lastName}, {sort: {'subject': 1}}),
        'myStudents': Meteor.users.find({'roles': 'student'}, {sort: {'profile.lastName': 1, 'profile.firstName': 1, 'username': 1}}),
        'myLeaders': Meteor.users.find({'roles': 'wykładowca'}, {sort: {'profile.lastName': 1, 'profile.firstName': 1, 'username': 1}}),
        'myGrades': Grades.find()
      }
    });
  }
});

// /subjects/add
Router.route('/subjects/add', {
  loadingTemplate: 'loading',
  waitOn: function () {
    return [ Meteor.subscribe('theSubjects') ];
  },
  onBeforeAction: function () {
    if(!Meteor.user()){
      this.layout('appLayout');
      this.render('login');
    }
    else {
      this.next();
    }
  },
  action: function () {
    this.layout('appLayout');
    this.render('addSubject', {
      'data': {
        'User': Meteor.user(),
        'mySubjects': Subjects.find(),
        'myGrades': Grades.find(),
        'teachers': Meteor.users.find({'roles': 'wykładowca'}, {sort: {'profile.lastName': 1, 'profile.firstName': 1, 'username': 1}})
      }
    });
  }
});

// /subjects/:subjectId
Router.route('/subjects/:subjectId', {
  loadingTemplate: 'loading',
  waitOn: function () {
    return [ Meteor.subscribe('theSubjects'), Meteor.subscribe('theGrades') ];
  },
  onBeforeAction: function () {
    if(!Meteor.user()){
      this.layout('appLayout');
      this.render('login');
    }
    else {
      this.next();
    }
  },
  action: function () {
    this.layout('appLayout');
    this.render('subjectDetails', {
      'data': {
        'User': Meteor.user(),
        'subject': Subjects.findOne({'_id': this.params.subjectId}),
        'grade': Grades.find({'subjectId': this.params.subjectId}, {sort:{ 'studentName': 1 }}),
        'grades': Grades.findOne({'subjectId': this.params.subjectId, 'studentId': Meteor.user()._id}),
        'student': Meteor.users.find({'profile.subjects': this.params.subjectId}, {sort: {'profile.lastName': 1, 'profile.firstName': 1, 'username': 1 }}),
        'students': Meteor.users.find({'profile.subjects': {$nin: [this.params.subjectId]}, 'roles': 'student'}, {sort: {'profile.lastName': 1, 'profile.firstName': 1, 'username': 1 }})
      }
    });
  }

});
// /students/:studentId
Router.route('/students/:studentId', {
  loadingTemplate: 'loading',
  waitOn: function () {
    return [ Meteor.subscribe('theSubjects'), Meteor.subscribe('theGrades'), Meteor.subscribe('TheSubjectStudents') ];
  },
  onBeforeAction: function () {
    if(!Meteor.user()){
      this.layout('appLayout');
      this.render('login');
    }
    else {
      this.next();
    }
  },
  action: function () {
    this.layout('appLayout');
    this.render('studentDetails', {
      'data': {
         'User': Meteor.users.findOne({"_id": this.params.studentId}),
         'subjects': Subjects.find({"students": this.params.studentId}),
         'grade': Grades.find({'studentId': this.params.studentId}, {sort:{ 'subjectName': 1 }}),
      }
    });
  }

});

// /teachers/:teacherUsername
Router.route('/teachers/:teacherUsername', {
  loadingTemplate: 'loading',
  waitOn: function () {
    return [ Meteor.subscribe('theSubjects') ];
  },
  onBeforeAction: function () {
    if(!Meteor.user()){
      this.layout('appLayout');
      this.render('login');
    }
    else {
      this.next();
    }
  },
  action: function () {
    leading = s.join(" ",Meteor.users.findOne({'_id': this.params.teacherUsername}).profile.title, Meteor.users.findOne({'_id': this.params.teacherUsername}).profile.firstName, Meteor.users.findOne({'_id': this.params.teacherUsername}).profile.lastName);
    this.layout('appLayout');
    this.render('teacherDetails', {
      'data': {
         //'User': Meteor.users.findOne({"username": this.params.studentUsername}).username,
         'subjects': Subjects.find({'leading': leading}),
         //'grade': Grades.findOne({}, {$in: {'studentName': Meteor.user().username}}),'students': Meteor.users.find()
      }
    });
  }

});

// /login
Router.route('/login', {
  loadingTemplate: 'loading',
  waitOn: function () {
    return [ Meteor.subscribe('theSubjects'),
      Meteor.subscribe('theGrades') ];
   },
  onBeforeAction: function () {
    if(Meteor.user()){
      Router.go('/');
    }
    else {
      this.next();
    }
  },
  action: function () {
    this.layout('appLayout');
    this.render('login', {
      'data': {
        'User': Meteor.user()
        }
    });
  }
});

Router.map(function() {
  this.route('registerStudent', {
    path: '/registerStudent',

    onBeforeAction: function() {
      user = Meteor.user();
      if(!Roles.userIsInRole(user, ['admin'])) {
        this.layout('appLayout');
        this.redirect('/');
        this.stop();
      }
      this.next();
    },
    action: function () {
      this.layout('appLayout');
      this.render('registerStudent', {
        'data': {
          'User': Meteor.user()
          }
      });
    }
  })
});

Router.map(function() {
  this.route('registerTeacher', {
    path: '/registerTeacher',

    onBeforeAction: function() {
      user = Meteor.user();
      if(!Roles.userIsInRole(user, ['admin'])) {
        this.layout('appLayout');
        this.redirect('/');
        this.stop();
      }
      this.next();
    },
    action: function () {
      this.layout('appLayout');
      this.render('registerTeacher', {
        'data': {
          'User': Meteor.user()
          }
      });
    }
  })
});
Router.map(function() {
  this.route('registerAdmin', {
    path: '/registerAdmin',

    onBeforeAction: function() {
      user = Meteor.user();
      if(!Roles.userIsInRole(user, ['admin'])) {
        this.layout('appLayout');
        this.redirect('/');
        this.stop();
      }
      this.next();
    },
    action: function () {
      this.layout('appLayout');
      this.render('registerAdmin', {
        'data': {
          'User': Meteor.user()
          }
      });
    }
  })
});
Router.map(function() {
  this.route('registerDeanery', {
    path: '/registerDeanery',

    onBeforeAction: function() {
      user = Meteor.user();
      if(!Roles.userIsInRole(user, ['admin'])) {
        this.layout('appLayout');
        this.redirect('/');
        this.stop();
      }
      this.next();
    },
    action: function () {
      this.layout('appLayout');
      this.render('registerDeanery', {
        'data': {
          'User': Meteor.user()
          }
      });
    }
  })
});
