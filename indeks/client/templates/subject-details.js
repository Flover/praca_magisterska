Template.subjectDetails.events({
  'click .deleteSubject': function(event){
    var selectedSubject = Router.current().params.subjectId;
    Meteor.call('removeSubject', selectedSubject);
    Router.go('/');
  },
  'click .assignSubject': function(event){
    event.preventDefault();
    var selectedSubject = Router.current().params.subjectId;
    var selectedUser = Meteor.user().username;
    Meteor.call('addStudentToSubject', selectedSubject, selectedUser);

  },
  'click .updateGrade': function (event, template) {
    var grade = template.find('#subjectGrade_'+this.username).value;
    Meteor.call('updateGrade', this.username,
      Router.current().params.subjectId, grade);
  }
});
