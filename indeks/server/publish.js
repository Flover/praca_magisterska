Meteor.publish('theSubjects', function () {
  if(this.userId){
    var sem = Meteor.users.findOne({'_id': this.userId}).profile.semester;
    return Subjects.find({'semester': {$lte: sem }});
  }
  else {
    this.ready();
  }
});

Meteor.publish('theGrades', function () {
  //var subjectId = Session.get('selectedSubject');
  if(this.userId){
    var currentUserId = this.userId;
    var userName = Meteor.users.findOne({'_id': currentUserId}).username;
    return Grades.find({'studentId': userName});
  }
  else {
    this.ready();
  }
});

Meteor.publish('TheSubjectStudents', function (subjectId) {
  var grades = Grades.find({'subjectId': subjectId}).fetch();
  var usersIds = [];
  for(var i = 0; i < grades.length; i+=1){
    usersIds.push(grades[i].studentId);
  }
  return Meteor.users.find({'username': {$in: usersIds }});
});
