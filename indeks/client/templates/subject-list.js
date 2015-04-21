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
