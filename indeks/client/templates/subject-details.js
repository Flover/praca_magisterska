Template.subjectDetails.onRendered(function(){
  $('select').material_select();
});

Template.subjectDetails.events({
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
    var exerciseGrade = Grades.findOne({'subjectId': Router.current().params.subjectId, 'studentId': this._id}).exerciseGrade;
    checkBeforeAction(this._id, exerciseGrade, examGrade);
  },
  'click .updateExerciseGrade': function (event, template) {
    var exerciseGrade = template.find('#subjectExerciseGrade_'+this._id).value;
    Meteor.call('updateExerciseGrade', this._id, Router.current().params.subjectId, exerciseGrade);
  },

});
