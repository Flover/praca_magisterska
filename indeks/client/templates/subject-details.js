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

    // console.log(selectedSubjectId);
    // console.log(selectedSubject);
    // console.log(selectedUser);
    // console.log(selectedUserId);
    Meteor.call('addStudentToSubject', selectedSubject, selectedSubjectId, selectedUser, selectedUserId);

  },
  'click .updateGrade': function (event, template) {
    var grade = template.find('#subjectGrade_'+this.username).value;
    //console.log(this.username);
    //console.log(this._id);
  //  username = Meteor.users.findOne({'_id': this._id}).username;
  //  console.log(username);
  console.log(grade)
    Meteor.call('updateGrade', this.username, Router.current().params.subjectId, grade);
  }
});
