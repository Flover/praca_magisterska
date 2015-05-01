//
Router.route('/', {
  loadingTemplate: 'loading',
  waitOn: function () {
  //  console.log('wating');
    return [ Meteor.subscribe('theSubjects'),
      Meteor.subscribe('theGrades') ];
  },
  onBeforeAction: function () {
//    console.log('onBefore');
    if(!Meteor.user()){
  //    console.log('not logged in');
      this.layout('appLayout');
      this.render('login');
    }
    else {
    //  console.log('logged in');
      this.next();
    }
  },
  action: function () {
  //  console.log('action');
    this.layout('appLayout');
    this.render('subjectList', {
      'data': {
        'User': Meteor.user(),
        'mySubjects': Subjects.find(),
        'myStudents': Meteor.users.find(/*{'roles': 'student'}*/),
        'myLeaders': Meteor.users.find({'roles': 'wykładowca'}),
        'myGrades': Grades.find()
      }
    });
  }
});

// /subjects/add
Router.route('/subjects/add', {
  loadingTemplate: 'loading',
  waitOn: function () {
    return [ Meteor.subscribe('theSubjects'),
      Meteor.subscribe('theGrades') ];
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
        'myGrades': Grades.find()
      }
    });
  }
});

// /subjects/:subjectId
Router.route('/subjects/:subjectId', {
  loadingTemplate: 'loading',
  waitOn: function () {
    return [ Meteor.subscribe('theSubjects'),
      Meteor.subscribe('theGrades'),
      Meteor.subscribe('TheSubjectStudents', this.params.subjectId) ];
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
    subjectName = Subjects.findOne({"_id": this.params.subjectId}).subject;
    this.layout('appLayout');
    this.render('subjectDetails', {
      'data': {
        'User': Meteor.user(),
        'subject': Subjects.findOne({'_id': this.params.subjectId}),
        'grade': Grades.findOne({'subjectId': this.params.subjectId}, {$in: {'studentName': Meteor.user().username}}),
        'student': Meteor.users.find({'profile.subjects': subjectName}),
        'students': Meteor.users.find({'roles': 'student'})
      }
    });
  }

});
// /students/:studentUsername
Router.route('/students/:studentUsername', {
  loadingTemplate: 'loading',
  waitOn: function () {
    console.log("waitON");
    return [ Meteor.subscribe('theSubjects') ];
  },
  onBeforeAction: function () {
  //  subjectId = Subjects.find({"students": this.param.studentUsername})
  console.log("before");
  console.log(Subjects.find({}).count());
    if(!Meteor.user()){
      this.layout('appLayout');
      this.render('login');
    }
    else {
      this.next();
    }
  },
  action: function () {
  //  console.log(Meteor.users.find({"profile.subjects": this.params.subjectId}).fetch());
  //  console.log(this.params.studentUsername);
  //  subjectName = Subjects.findOne({"subjects": this.params.studentUsername}).subject;

  console.log("action");
  console.log(Meteor.users.findOne({"username": this.params.studentUsername}).username);
    this.layout('appLayout');
    this.render('studentDetails', {
      'data': {
         'User': Meteor.users.findOne({"username": this.params.studentUsername}).username,
         'subjects': Subjects.find({"students": this.params.studentUsername})
  //       'grade': Grades.findOne({}, {$in: {'studentName': Meteor.user().username}}),'students': Meteor.users.find()
      }
    });
  }

});



// /login
Router.route('/login', {
  loadingTemplate: 'loading',
  // waitOn: function () {
  //   return [ Meteor.subscribe('theSubjects'),
  //     Meteor.subscribe('theGrades') ];
  // },
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
  this.route('register', {
    path: '/register',

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
      this.render('register', {
        'data': {
          'User': Meteor.user()
          }
      });
    }
  })
});


// /register
/*Router.route('/register', {
  loadingTemplate: 'loading',
  // waitOn: function () {
  //   return [ Meteor.subscribe('theSubjects'),
  //     Meteor.subscribe('theGrades') ];
  // },
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
    this.render('register', {
      'data': {
        'User': Meteor.user()
        }
    });
  }
});*/
