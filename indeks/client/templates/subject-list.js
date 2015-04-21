Template.subjectList.helpers({
  'Subject': function(){
    return Subjects.find({},{sort: {subject: 1}});
  },
  'selectedClass': function(){
    var subjectId = this._id;
    var selectedSubject = Session.get('selectedSubject');
    if(subjectId === selectedSubject){
      return "selected";
    }
}
});
/*
Template.subjectList.events({
  'click .subject': function(){
    var subjectId = this._id;
    Session.set('selectedSubject', subjectId);
    //console.log("you touched me!")
  },
  'dblclick .subject': function(){
    var subjectId = undefined;
    Session.set('selectedSubject', subjectId);
    //console.log("you touched me!")
  }
});*/
