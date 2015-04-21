// /
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
        'mySubjects': Subjects.find()
      //  'myGrades': Grades.find()
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
    this.layout('appLayout');
    this.render('subjectDetails', {
      'data': {
        'User': Meteor.user(),
        'subject': Subjects.findOne({'_id': this.params.subjectId}),
        'grade': Grades.findOne({'subjectId': this.params.subjectId, 'studentId': Meteor.user().username}),
        'students': Meteor.users.find()
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

// /register
Router.route('/register', {
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
});
