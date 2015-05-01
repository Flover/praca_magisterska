Meteor.methods({
  'updateGrade': function (studentName, subjectId, grade) {
    Grades.update({'studentName': studentName, 'subjectId': subjectId }, {$set: {'grade': grade } });
  },
  'removeSubject': function(selectedSubject){
    Subjects.remove(selectedSubject);
  },
  'addStudentToSubject': function(selectedSubject, selectedSubjectId, selectedUser, selectedUserId){
    Grades.insert({
      studentId: selectedUserId,
      subjectId: selectedSubjectId,
      studentName: selectedUser,
      subjectName: selectedSubject,
      grade: null
    });
    Meteor.users.update({'_id': selectedUserId}, {$addToSet: {'profile.subjects': selectedSubject}});
    Subjects.update({'_id': selectedSubjectId}, {$addToSet: {'students': selectedUser}});
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
  }
});
