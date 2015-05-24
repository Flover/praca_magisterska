Template.subjectDetails.events({
  'click .deleteSubject': function(event){
    var selectedSubject = Router.current().params.subjectId;
    Meteor.call('removeSubject', selectedSubject);
    Router.go('/');
  },
  'click .assignSubject': function(event){
    event.preventDefault();
    var selectedSubjectId = Router.current().params.subjectId;
    var selectedSubject = Subjects.findOne({"_id": selectedSubjectId}).subject;
    var selectedUser = Meteor.users.findOne({'_id': this._id}).username;
    var selectedUserId = Meteor.users.findOne({'_id': this._id})._id;
    var subjectLeading = Subjects.findOne({"_id": selectedSubjectId}).leading;

    Meteor.call('addStudentToSubject', selectedSubject, selectedSubjectId, selectedUser, selectedUserId, subjectLeading);

  },
  'click .updateExamGrade': function (event, template) {
    var examGrade = template.find('#subjectExamGrade_'+this._id).value;
    //console.log(examGrade);
    Meteor.call('updateExamGrade', this._id, Router.current().params.subjectId, examGrade);
  },
  'click .updateExerciseGrade': function (event, template) {
    var exerciseGrade = template.find('#subjectExerciseGrade_'+this._id).value;
    Meteor.call('updateExerciseGrade', this._id, Router.current().params.subjectId, exerciseGrade);
  }
});
