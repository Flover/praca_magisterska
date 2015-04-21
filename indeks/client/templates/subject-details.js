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

    Grades.insert({
      studentId: selectedUser,
      subjectId: selectedSubject,
      grade: null
    });
  },
  'click .updateGrade': function (event, template) {
    var grade = template.find('#subjectGrade_'+this.username).value;
    Meteor.call('updateGrade', this.username,
      Router.current().params.subjectId, grade);
  }
});
