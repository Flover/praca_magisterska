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
  'uploadSubjectsFile':function(fileid,filename){
    var fs = Meteor.npmRequire('fs');
    var file = Uploads.find({_id:fileid});
    Meteor.setTimeout(function(){
      console.log('uploads-' + fileid + '-' + filename);
      var filepath = 'indeks/public/imports/uploads-' + fileid + '-' + filename;
      CSV().from.stream(
        fs.createReadStream(filepath),
        {'escape':'\\'})
        .on('record',Meteor.bindEnvironment(function(row,index){
          Subjects.insert({
            '_id': row[0],
            'subject':row[1],
            'leading':row[2],
            'semester':row[3],
            'students':row[4],

          })
        }, function(error){
          console.log(error);
        }))
        .on('error',function(err){
          console.log(err);
        })
        .on('end',function(count){

        })
    },1000)
  },
  //'uploadUsersFile':function(fileid,filename){
  //   var fs = Meteor.npmRequire('fs');
  //   var file = Uploads.find({_id:fileid});
  //   Meteor.setTimeout(function(){
  //     console.log('uploads-' + fileid + '-' + filename);
  //     var filepath = 'indeks/public/imports/uploads-' + fileid + '-' + filename;
  //     CSV().from.stream(
  //       fs.createReadStream(filepath),
  //       {'escape':'\\'})
  //       .on('record',Meteor.bindEnvironment(function(row,index){
  //         //TODO
  //         })
  //       }, function(error){
  //         console.log(error);
  //       }))
  //       .on('error',function(err){
  //         console.log(err);
  //       })
  //       .on('end',function(count){
  //
  //       })
  //   },1000)
  // },
  'uploadGradesFile':function(fileid,filename){
    var fs = Meteor.npmRequire('fs');
    var file = Uploads.find({_id:fileid});
    Meteor.setTimeout(function(){
      console.log('uploads-' + fileid + '-' + filename);
      var filepath = 'indeks/public/imports/uploads-' + fileid + '-' + filename;
      CSV().from.stream(
        fs.createReadStream(filepath),
        {'escape':'\\'})
        .on('record',Meteor.bindEnvironment(function(row,index){
          Grades.insert({
            '_id':row[0],
            'studentId':row[1],
            'subjectId':row[2],
            'studentName':row[3],
            'subjectName':row[4],
            'subjectLeading':row[5],
            'exerciseGrade':row[6],
            'examGrade':row[7],

          })
        }, function(error){
          console.log(error);
        }))
        .on('error',function(err){
          console.log(err);
        })
        .on('end',function(count){

        })
    },1000)
  },
  'downloadExcelFile' : function() {
    var Future = Npm.require('fibers/future');
    var futureResponse = new Future();

    var excel = new Excel('xlsx'); // Create an excel object  for the file you want (xlsx or xls)
    var workbook = excel.createWorkbook(); // Create a workbook (equivalent of an excel file)
    var worksheet = excel.createWorksheet(); // Create a worksheet to be added to the workbook
    var worksheet2 = excel.createWorksheet(); // Create a worksheet to be added to the workbook
    var worksheet3 = excel.createWorksheet(); // Create a worksheet to be added to the workbook


    if(Roles.userIsInRole(this.userId, 'admin')){
      var row = 0;
      Subjects.find({}).forEach(function(subject) {
        worksheet.writeToCell(row, 0, subject._id);
        worksheet.writeToCell(row, 1, subject.subject);
        worksheet.writeToCell(row, 2, subject.leading);
        worksheet.writeToCell(row, 3, subject.semester);
        worksheet.writeToCell(row, 4, subject.students);

        row++;
      });
      row = 0
      Meteor.users.find({}).forEach(function(users) {
        worksheet2.writeToCell(row, 0, users._id);
        worksheet2.writeToCell(row, 1, users.username);
        worksheet2.writeToCell(row, 2, users.profile.name);
        worksheet2.writeToCell(row, 3, users.profile.title);
        worksheet2.writeToCell(row, 4, users.profile.firstName);
        worksheet2.writeToCell(row, 5, users.profile.lastName);
        worksheet2.writeToCell(row, 6, users.profile.subjects);
        worksheet2.writeToCell(row, 7, users.roles);
        worksheet2.writeToCell(row, 8, users.services.password.bcrypt);
        worksheet2.writeToCell(row, 9, users.emails[0].address);

        row++;
      });

      row = 0
      Grades.find({}).forEach(function(grades) {
        worksheet3.writeToCell(row, 0, grades._id);
        worksheet3.writeToCell(row, 1, grades.studentId);
        worksheet3.writeToCell(row, 2, grades.subjectId);
        worksheet3.writeToCell(row, 3, grades.studentName);
        worksheet3.writeToCell(row, 4, grades.subjectName);
        worksheet3.writeToCell(row, 5, grades.subjectLeading);
        worksheet3.writeToCell(row, 6, grades.exerciseGrade);
        worksheet3.writeToCell(row, 7, grades.examGrade);

        row++;
      });

      workbook.addSheet('Subjects', worksheet);
      workbook.addSheet('Users', worksheet2);
      workbook.addSheet('Grades', worksheet3);
    } else if (Roles.userIsInRole(this.userId, 'wykładowca')){
      var row = 0;
      utitle = Meteor.users.findOne({'_id': this.userId}).profile.title;
      fname = Meteor.users.findOne({'_id': this.userId}).profile.firstName;
      lname = Meteor.users.findOne({'_id': this.userId}).profile.lastName;
      Subjects.find({'leading': utitle + ' ' + fname + ' ' + lname}).forEach(function(subject) {
        worksheet.writeToCell(row, 0, subject._id);
        worksheet.writeToCell(row, 1, subject.subject);
        worksheet.writeToCell(row, 2, subject.leading);
        worksheet.writeToCell(row, 3, subject.semester);
        worksheet.writeToCell(row, 4, subject.students);

        row++;
      });
      row = 0
      Meteor.users.find({}).forEach(function(users) {
        worksheet2.writeToCell(row, 0, users._id);
        worksheet2.writeToCell(row, 1, users.username);
        worksheet2.writeToCell(row, 2, users.profile.name);
        worksheet2.writeToCell(row, 3, users.profile.title);
        worksheet2.writeToCell(row, 4, users.profile.firstName);
        worksheet2.writeToCell(row, 5, users.profile.lastName);
        worksheet2.writeToCell(row, 6, users.profile.subjects);
        worksheet2.writeToCell(row, 7, users.roles);
        worksheet2.writeToCell(row, 8, users.services.password.bcrypt);
        worksheet2.writeToCell(row, 9, users.emails[0].address);

        row++;
      });

      row = 0
      Grades.find({'subjectLeading': utitle + ' ' + fname + ' ' + lname}).forEach(function(grades) {
        worksheet3.writeToCell(row, 0, grades._id);
        worksheet3.writeToCell(row, 1, grades.studentId);
        worksheet3.writeToCell(row, 2, grades.subjectId);
        worksheet3.writeToCell(row, 3, grades.studentName);
        worksheet3.writeToCell(row, 4, grades.subjectName);
        worksheet3.writeToCell(row, 5, grades.subjectLeading);
        worksheet3.writeToCell(row, 6, grades.exerciseGrade);
        worksheet3.writeToCell(row, 7, grades.examGrade);

        row++;
      });

      workbook.addSheet('Subjects', worksheet);
      workbook.addSheet('Users', worksheet2);
      workbook.addSheet('Grades', worksheet3);
    } else {
      var row = 0;
      utitle = Meteor.users.findOne({'_id': this.userId}).profile.title;
      fname = Meteor.users.findOne({'_id': this.userId}).profile.firstName;
      lname = Meteor.users.findOne({'_id': this.userId}).profile.lastName;
      Subjects.find({}).forEach(function(subject) {
        worksheet.writeToCell(row, 0, subject._id);
        worksheet.writeToCell(row, 1, subject.subject);
        worksheet.writeToCell(row, 2, subject.leading);
        worksheet.writeToCell(row, 3, subject.semester);
        worksheet.writeToCell(row, 4, subject.students);

        row++;
      });
      row = 0;
      Meteor.users.find({'roles': 'student'}).forEach(function(users) {
        worksheet2.writeToCell(row, 0, users._id);
        worksheet2.writeToCell(row, 1, users.username);
        worksheet2.writeToCell(row, 2, users.profile.name);
        worksheet2.writeToCell(row, 3, users.profile.title);
        worksheet2.writeToCell(row, 4, users.profile.firstName);
        worksheet2.writeToCell(row, 5, users.profile.lastName);
        worksheet2.writeToCell(row, 6, users.profile.subjects);
        worksheet2.writeToCell(row, 7, users.roles);
        worksheet2.writeToCell(row, 8, users.services.password.bcrypt);
        worksheet2.writeToCell(row, 9, users.emails[0].address);


        row++;
      });

      row = 0;

      Grades.find({}).forEach(function(grades) {
        worksheet3.writeToCell(row, 0, grades._id);
        worksheet3.writeToCell(row, 1, grades.studentId);
        worksheet3.writeToCell(row, 2, grades.subjectId);
        worksheet3.writeToCell(row, 3, grades.studentName);
        worksheet3.writeToCell(row, 4, grades.subjectName);
        worksheet3.writeToCell(row, 5, grades.subjectLeading);
        worksheet3.writeToCell(row, 6, grades.exerciseGrade);
        worksheet3.writeToCell(row, 7, grades.examGrade);

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
