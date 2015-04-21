Meteor.methods({
  'updateGrade': function (studentId, subjectId, grade) {
    Grades.update({'studentId': studentId, 'subjectId': subjectId },
      {$set: {'grade': grade } });
  }
});
