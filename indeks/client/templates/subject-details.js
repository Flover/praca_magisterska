Template.subjectDetails.events({
  'click .deleteSubject': function(){
    var selectedSubject = Router.current().params.subjectId;
    Subjects.remove(selectedSubject);
    Router.go('/');
  },
  'click .assignSubject': function(event){
    event.preventDefault();
    var selectedSubject = Router.current().params.subjectId;
    var selectedUser = Meteor.user().username;
    console.log("ZAPISANO!");
    console.log(selectedUser);
    console.log(selectedSubject);
  //  var subjectGradeVar = event.target.subjectGrade.value;
    //console.log(selectedSubject);
    //console.log(selectedUser);

    Grades.insert({
      studentId: selectedUser,
      subjectId: selectedSubject,
      grade: null
    });
  //  return Grades.find({'studentId': selectedUser});
  },
  'click .updateGrade': function (event, template) {
    var grade = template.find('#subjectGrade_'+this.username).value;
    Meteor.call('updateGrade', this.username,
      Router.current().params.subjectId, grade);
  }
});
