Meteor.methods({
  'updateExamGrade': function (studentId, subjectId, grade) {
    Grades.update({'studentId': studentId, 'subjectId': subjectId }, {$set: {'examGrade': grade } });
  },
  'updateExerciseGrade': function (studentId, subjectId, grade) {
    Grades.update({'studentId': studentId, 'subjectId': subjectId }, {$set: {'exerciseGrade': grade } });
  },
  'addStudentToSubject': function(selectedSubject, selectedSubjectId, selectedUser, selectedUserId, selectedLeading){
    Grades.insert({
      studentId: selectedUserId,
      subjectId: selectedSubjectId,
      studentName: selectedUser,
      subjectName: selectedSubject,
      subjectLeading: selectedLeading,
      exerciseGrade: null,
      examGrade: null
    });
    Meteor.users.update({'_id': selectedUserId}, {$addToSet: {'profile.subjects': selectedSubjectId}});
    Subjects.update({'_id': selectedSubjectId}, {$addToSet: {'students': selectedUserId}});
  },
  'addSubject': function(subjectNameVar, subjectLeadingVar, subjectSemesterVar){

    Subjects.insert({
      subject: subjectNameVar,
      leading: subjectLeadingVar,
      semester: subjectSemesterVar,
      students: []
    });
  },
  'assignRole': function(user, role){
    Roles.setUserRoles(user, role);
  },
  'downloadExcelFile' : function() {
    var Future = Npm.require('fibers/future');
    var futureResponse = new Future();

    var excel = new Excel('xlsx'); // Create an excel object  for the file you want (xlsx or xls)
    var workbook = excel.createWorkbook(); // Create a workbook (equivalent of an excel file)
    var worksheet = excel.createWorksheet(); // Create a worksheet to be added to the workbook
    var worksheet2 = excel.createWorksheet(); // Create a worksheet to be added to the workbook
    var worksheet3 = excel.createWorksheet(); // Create a worksheet to be added to the workbook
     // Example : writing to a cell

    worksheet.writeToCell(0,0, 'subject');
    worksheet.writeToCell(0,1, 'leading');
    worksheet.writeToCell(0,2, 'semester');
    worksheet.writeToCell(0,3, 'students');
    worksheet2.writeToCell(0,0, 'username');
    worksheet2.writeToCell(0,1, 'profile.name');
    worksheet2.writeToCell(0,2, 'profile.title');
    worksheet2.writeToCell(0,3, 'profile.firstName');
    worksheet2.writeToCell(0,4, 'profile.lastName');
    worksheet2.writeToCell(0,5, 'profile.subjects');
    worksheet2.writeToCell(0,6, 'roles');
    worksheet3.writeToCell(0,0, 'studentId');
    worksheet3.writeToCell(0,1, 'subjectId');
    worksheet3.writeToCell(0,2, 'studentName');
    worksheet3.writeToCell(0,3, 'subjectName');
    worksheet3.writeToCell(0,4, 'subjectLeading');
    worksheet3.writeToCell(0,5, 'exerciseGrade');
    worksheet3.writeToCell(0,6, 'examGrade');

    // worksheet.setColumnProperties([ // Example : setting the width of columns in the file
    //   { wch: 20 },
    //   { wch: 30 }
    // ]);


    if(Roles.userIsInRole(this.userId, 'admin')){
      var row = 1;
      Subjects.find({}).forEach(function(subject) {
        worksheet.writeToCell(row, 0, subject.subject);
        worksheet.writeToCell(row, 1, subject.leading);
        worksheet.writeToCell(row, 2, subject.semester);
        worksheet.writeToCell(row, 3, subject.students);

        row++;
      });
      row = 1
      Meteor.users.find({}).forEach(function(users) {
        worksheet2.writeToCell(row, 0, users.username);
        worksheet2.writeToCell(row, 1, users.profile.name);
        worksheet2.writeToCell(row, 2, users.profile.title);
        worksheet2.writeToCell(row, 3, users.profile.firstName);
        worksheet2.writeToCell(row, 4, users.profile.lastName);
        worksheet2.writeToCell(row, 5, users.profile.subjects);
        worksheet2.writeToCell(row, 6, users.roles);

        row++;
      });

      row = 1
      Grades.find({}).forEach(function(grades) {
        worksheet3.writeToCell(row, 0, grades.studentId);
        worksheet3.writeToCell(row, 1, grades.subjectId);
        worksheet3.writeToCell(row, 2, grades.studentName);
        worksheet3.writeToCell(row, 3, grades.subjectName);
        worksheet3.writeToCell(row, 4, grades.subjectLeading);
        worksheet3.writeToCell(row, 5, grades.exerciseGrade);
        worksheet3.writeToCell(row, 6, grades.examGrade);

        row++;
      });

      workbook.addSheet('Subjects', worksheet);
      workbook.addSheet('Users', worksheet2);
      workbook.addSheet('Grades', worksheet3);
    } else if (Roles.userIsInRole(this.userId, 'wykładowca')){
      var row = 1;
      utitle = Meteor.users.findOne({'_id': this.userId}).profile.title;
      fname = Meteor.users.findOne({'_id': this.userId}).profile.firstName;
      lname = Meteor.users.findOne({'_id': this.userId}).profile.lastName;
      Subjects.find({'leading': utitle + ' ' + fname + ' ' + lname}).forEach(function(subject) {
        worksheet.writeToCell(row, 0, subject.subject);
        worksheet.writeToCell(row, 1, subject.leading);
        worksheet.writeToCell(row, 2, subject.semester);
        worksheet.writeToCell(row, 3, subject.students);

        row++;
      });
      row = 1
      Meteor.users.find({}).forEach(function(users) {
        worksheet2.writeToCell(row, 0, users.username);
        worksheet2.writeToCell(row, 1, users.profile.name);
        worksheet2.writeToCell(row, 2, users.profile.title);
        worksheet2.writeToCell(row, 3, users.profile.firstName);
        worksheet2.writeToCell(row, 4, users.profile.lastName);
        worksheet2.writeToCell(row, 5, users.profile.subjects);
        worksheet2.writeToCell(row, 6, users.roles);

        row++;
      });

      row = 1
      Grades.find({'subjectLeading': utitle + ' ' + fname + ' ' + lname}).forEach(function(grades) {
        worksheet3.writeToCell(row, 0, grades.studentId);
        worksheet3.writeToCell(row, 1, grades.subjectId);
        worksheet3.writeToCell(row, 2, grades.studentName);
        worksheet3.writeToCell(row, 3, grades.subjectName);
        worksheet3.writeToCell(row, 4, grades.subjectLeading);
        worksheet3.writeToCell(row, 5, grades.exerciseGrade);
        worksheet3.writeToCell(row, 6, grades.examGrade);

        row++;
      });

      workbook.addSheet('Subjects', worksheet);
      workbook.addSheet('Users', worksheet2);
      workbook.addSheet('Grades', worksheet3);
    } else {
      var row = 1;
      utitle = Meteor.users.findOne({'_id': this.userId}).profile.title;
      fname = Meteor.users.findOne({'_id': this.userId}).profile.firstName;
      lname = Meteor.users.findOne({'_id': this.userId}).profile.lastName;
      Subjects.find({}).forEach(function(subject) {
        worksheet.writeToCell(row, 0, subject.subject);
        worksheet.writeToCell(row, 1, subject.leading);
        worksheet.writeToCell(row, 2, subject.semester);
        worksheet.writeToCell(row, 3, subject.students);

        row++;
      });
      row = 1
      Meteor.users.find({'roles': 'student'}).forEach(function(users) {
        worksheet2.writeToCell(row, 0, users.username);
        worksheet2.writeToCell(row, 1, users.profile.name);
        worksheet2.writeToCell(row, 2, users.profile.title);
        worksheet2.writeToCell(row, 3, users.profile.firstName);
        worksheet2.writeToCell(row, 4, users.profile.lastName);
        worksheet2.writeToCell(row, 5, users.profile.subjects);
        worksheet2.writeToCell(row, 6, users.roles);

        row++;
      });

      row = 1

      Grades.find({}).forEach(function(grades) {
        worksheet3.writeToCell(row, 0, grades.studentId);
        worksheet3.writeToCell(row, 1, grades.subjectId);
        worksheet3.writeToCell(row, 2, grades.studentName);
        worksheet3.writeToCell(row, 3, grades.subjectName);
        worksheet3.writeToCell(row, 4, grades.subjectLeading);
        worksheet3.writeToCell(row, 5, grades.exerciseGrade);
        worksheet3.writeToCell(row, 6, grades.examGrade);

        row++;
      });

      workbook.addSheet('Subjects', worksheet);
      workbook.addSheet('Users', worksheet2);
      workbook.addSheet('Grades', worksheet3);
    }
    mkdirp('tmp', Meteor.bindEnvironment(function (err) {
      if (err) {
        console.log('Error creating tmp dir', err);
        futureResponse.throw(err);
      }
      else {
        var uuid = UUID.v4();
        var filePath = './tmp/' + uuid;
        workbook.writeToFile(filePath);

        temporaryFiles.importFile(filePath, {
          filename : uuid,
          contentType: 'application/octet-stream'
        }, function(err, file) {
          if (err) {
            futureResponse.throw(err);
          }
          else {
            futureResponse.return('/gridfs/temporaryFiles/' + file._id);
          }
        });
      }
    }));

    return futureResponse.wait();
  }
});
