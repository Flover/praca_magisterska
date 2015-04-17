Template.subjectDetails.helpers({
  'showSelectedSubject': function(){
    var selectedSubject = Session.get('selectedSubject');
    return Subjects.findOne(selectedSubject);
  }
});

Template.subjectDetails.events({
  'click .deleteSubject': function(){
    var selectedSubject = Session.get("selectedSubject");
    Subjects.remove(selectedSubject)
  }
})
