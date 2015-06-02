describe("Assigning users to subjects", function(){
  it("assign users to subjects", function(){

    if (Meteor.users.find().count() === 1) {
      Accounts.createUser({
        username: 'username1',
        email: 'username1@test.pl',
        password: 'abcdef',
        profile:{
          name: 'student',
          firstName: 'firstName1',
          lastName: 'lastName1',
          subjects:[]
        }
      });
      Accounts.createUser({
        username: 'username2',
        email: 'username2@test.pl',
        password: 'abcdef',
        profile:{
          name: 'student',
          firstName: 'firstName2',
          lastName: 'lastName2',
          subjects:[]
        }
      });
    }

    Meteor.call('addSubject','Subject 1', 'Leading 1', 1);
    Meteor.call('addSubject','Subject 2', 'Leading 1', 1);

    var users = Meteor.users.find({"username": 'username1'}).fetch();
    var subjects = Subjects.find({'subject': 'Subject 2'}).fetch();

    if (Grades.find().count() === 0) {
      Meteor.call('addStudentToSubject', subjects[0].subject, subjects[0]._id, users[0].username, users[0]._id, subjects[0].leading);
    }

    expect(Grades.find().count()).toBeGreaterThan(0);
    expect(users[0].profile.subjects === subjects[0].students);

    Subjects.remove({'subject': 'Subject 1'});
    Subjects.remove({'subject': 'Subject 2'});

    Meteor.users.remove({'username': 'username1'});
    Meteor.users.remove({'username': 'username2'});

    Grades.remove({'studentId': users[0]._id, 'subjectId': subjects[0]._id});

  });
});

describe("Update grades", function(){
  it("Should update exerciseGrade and examGrade", function(){

    if (Meteor.users.find().count() === 1) {
      Accounts.createUser({
        username: 'username1',
        email: 'username1@test.pl',
        password: 'abcdef',
        profile:{
          name: 'student',
          firstName: 'firstName1',
          lastName: 'lastName1',
          subjects:[]
        }
      });
      Accounts.createUser({
        username: 'username2',
        email: 'username2@test.pl',
        password: 'abcdef',
        profile:{
          name: 'student',
          firstName: 'firstName2',
          lastName: 'lastName2',
          subjects:[]
        }
      });
    }

    Meteor.call('addSubject','Subject 1', 'Leading 1', 1);
    Meteor.call('addSubject','Subject 2', 'Leading 1', 1);

    var users = Meteor.users.find({'username': 'username1'}).fetch();
    var subjects = Subjects.find({'subject': 'Subject 2'}).fetch();

    if (Grades.find().count() === 0) {
      Meteor.call('addStudentToSubject', subjects[0].subject, subjects[0]._id, users[0].username, users[0]._id, subjects[0].leading);
    }

    Meteor.call('updateExerciseGrade', users[0]._id, subjects[0]._id,  '5');
    Meteor.call('updateExamGrade', users[0]._id, subjects[0]._id, '4');

    expect(Grades.findOne({'subjectId': subjects[0]._id, 'studentId': users[0]._id}).exerciseGrade).toBe('5');
    expect(Grades.findOne({'subjectId': subjects[0]._id, 'studentId': users[0]._id}).examGrade).toBe('4');

    Subjects.remove({'subject': 'Subject 1'});
    Subjects.remove({'subject': 'Subject 2'});

    Meteor.users.remove({'username': 'username1'});
    Meteor.users.remove({'username': 'username2'});

    Grades.remove({'studentId': users[0]._id, 'subjectId': subjects[0]._id});

  });
});
