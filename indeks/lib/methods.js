Meteor.methods({
  'updateGrade': function (studentId, subjectId, grade) {
    Grades.update({'studentId': studentId, 'subjectId': subjectId },
      {$set: {'grade': grade } });
  },
  'removeSubject': function(selectedSubject){
    Subjects.remove(selectedSubject);
  },
  'addStudentToSubject': function(selectedSubject, selectedUser){
    Grades.insert({
      studentId: selectedUser,
      subjectId: selectedSubject,
      grade: null
    });
  },
  'addSubject': function(subjectNameVar, subjectLeadingVar, subjectSemesterVar){

    Subjects.insert({
      subject: subjectNameVar,
      leading: subjectLeadingVar,
      semester: subjectSemesterVar
    });
  },
  'assignRole': function(user, role){
    console.log(user._id);
    console.log(role);
    Roles.setUserRoles(user, role);
  }
});
