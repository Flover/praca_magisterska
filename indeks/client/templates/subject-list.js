Template.subjectList.helpers({
  'Subject': function(){
    return Subjects.find({},{sort: {subject: 1}});
  }
});
