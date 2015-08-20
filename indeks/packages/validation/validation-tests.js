// Write your tests here!
// Here is an example.
if(Meteor.isClient){
  Tinytest.add('validation-client - checkBeforeAction', function (test) {
    var exerciseGrade = 2;
    var examGrade = 3;

    var Person = function(id, username){
      this.id = id;
      this.username - username;
    }

    var Subject = function(id, subjectName, leading){
      this.id = id;
      this.subjectName = subjectName;
      this.leading = leading;
    }

    var Grade = function(id, subjectId, studentId, exercise, exam){
      this.id = id;
      this.subjectId = subjectId;
      this.studentId = studentId;
      this.exercise = exercise;
      this.exam = exam;
    }

    var student = new Person('1', 'username1');
    var sub = new Subject('1', 'Subject 1', 'Leading 1');
    var gradez = new Grade('1', '1', '1', exerciseGrade, null);

    checkBeforeAction('1', exerciseGrade, examGrade);

    test.equal(gradez.exercise, 2, 'Should be grade 2');
    test.equal(gradez.exam, null, 'should be default grade');

  });


  // Tinytest.add('validation-client - checkIfChooseTeacher Leader', function (test) {
  //   var userId = '1';
  //   var subjectId = '1';
  //   var exerciseGrade = 2;
  //   var examGrade = 3;
  //
  //   var Person = function(id, username){
  //     this.id = id;
  //     this.username - username;
  //   }
  //
  //   var Subject = function(id, subjectName, leading, semester){
  //     this.id = id;
  //     this.subjectName = subjectName;
  //     this.leading = leading;
  //     this.semester = semester;
  //   }
  //
  //   var leader = new Person('2', 'username2');
  //   var sub2 = new Subject('2', 'Subject 1', undefined, 1);
  //
  //   checkIfChooseTeacher(sub2.leading, sub2.subjectName, sub2.semester);
  //
  //   test.isUndefined(sub2.leading, 'should be undefined and call modal with information about choosing subject leader');
  //
  // });

  Tinytest.add('validation-client - checkIfChooseTeacher Name', function (test) {

    var Person = function(id, username){
      this.id = id;
      this.username - username;
    }

    var Subject = function(id, subjectName, leading, semester){
      this.id = id;
      this.subjectName = subjectName;
      this.leading = leading;
      this.semester = semester;
    }

    var leader = new Person('3', 'username3');

    var sub3 = new Subject('3', undefined, 'Leading 3', 1);

    checkIfChooseTeacher(sub3.leading, sub3.subjectName, sub3.semester);

    test.isUndefined(sub3.subjectName, 'should be undefined and call modal with information about choosing subject name');

  });

}
