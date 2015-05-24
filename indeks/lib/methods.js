Meteor.methods({
  'updateExamGrade': function (studentId, subjectId, grade) {
    console.log(studentId);
    console.log(subjectId);
    console.log(grade);
    Grades.update({'studentId': studentId, 'subjectId': subjectId }, {$set: {'examGrade': grade } });
  },
  'updateExerciseGrade': function (studentId, subjectId, grade) {
    Grades.update({'studentId': studentId, 'subjectId': subjectId }, {$set: {'exerciseGrade': grade } });
  },
  'removeSubject': function(selectedSubject){
    Subjects.remove(selectedSubject);
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
    //console.log(Meteor.users.findOne({$query:{'roles': 'student'},$orderby:{'username':-1}}).username);
  },
  'addSubject': function(subjectNameVar, subjectLeadingVar, subjectSemesterVar){

    Subjects.insert({
      subject: subjectNameVar,
      leading: subjectLeadingVar,
      semester: subjectSemesterVar,
      students: []
    });
  //  Meteor.users.update({'profile.semester': subjectSemesterVar}, {$addToSet: {'profile.subjects': {$each: [subjectNameVar]}}});
  },
  'assignRole': function(user, role){
    Roles.setUserRoles(user, role);
  }
});
