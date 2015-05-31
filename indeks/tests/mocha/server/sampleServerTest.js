if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("subjects init", function(){
      it("check is there any subjects in database", function(){
        if (Subjects.find().count() === 0) {
          Subjects.insert({
            subject: 'Subject 1',
            leading: 'Leading 1',
            semester: 1,
            students: []
          });
          Subjects.insert({
            subject: 'Subject 2',
            leading: 'Leading 1',
            semester: 1,
            students: []
          });
        }

        doc = Subjects.find().count();
        if(doc){
          chai.assert(doc > 0);
        }

      });
    });

    describe("users init", function(){
      it("check is there any users in database", function(){
        if (Meteor.users.find().count() === 0) {
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

        doc = Meteor.users.find().count();
        if(doc){
          chai.assert(doc > 0);
        }

      });
    });
    describe("grades init", function(){
      it("check is there any grades in database", function(){
        if (Grades.find().count() === 0) {
          Grades.insert({
            studentId: 'TPd47yc4PapALzASi',
            subjectId: 'oBow5A5jANhLTRvgp',
            studentName: 'username1',
            subjectName: 'Subject 1',
            subjectLeading: 'Leading 1',
            exerciseGrade: null,
            examGrade: null
          });
          Meteor.users.update({'_id': 'TPd47yc4PapALzASi'}, {$addToSet: {'profile.subjects': 'oBow5A5jANhLTRvgp'}});
          Subjects.update({'_id': 'oBow5A5jANhLTRvgp'}, {$addToSet: {'students': 'TPd47yc4PapALzASi'}});

          Grades.insert({
            studentId: 'TPd47yc4PapALzASi',
            subjectId: '9p6cWy9AaKfZkoSgJ',
            studentName: 'username1',
            subjectName: 'Subject 2',
            subjectLeading: 'Leading 1',
            exerciseGrade: null,
            examGrade: null
          });
          Meteor.users.update({'_id': 'TPd47yc4PapALzASi'}, {$addToSet: {'profile.subjects': '9p6cWy9AaKfZkoSgJ'}});
          Subjects.update({'_id': '9p6cWy9AaKfZkoSgJ'}, {$addToSet: {'students': 'TPd47yc4PapALzASi'}});
        }

        doc = Grades.find().count();
        if(doc){
          chai.assert(doc > 0);
        }

      });
    });

    describe("Subject List Ordering", function(){
      it("Should return list of subjects in alphabetical order", function(){
        sub = Subjects.find({}, {sort:{ 'subject': 1 }}).fetch();
        if(sub){
          chai.assert(sub[0].subject <= sub[1].subject);
        }
      });
    });
    describe("Users List Ordering", function(){
      it("Should return list of users in alphabetical order", function(){
        users = Meteor.users.find({}, {sort:{ 'profile.lastName': 1 }}).fetch();
        if(users){
          chai.assert(users[0].profile.lastName <= users[1].profile.lastName);
        }
      });
    });
  });
}
