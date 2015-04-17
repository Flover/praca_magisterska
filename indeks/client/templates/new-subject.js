Template.addSubject.events({
  'submit form': function(event){
    event.preventDefault();
    var subjectNameVar = event.target.subjectName.value;
    var subjectLeadingVar = event.target.subjectLeading.value;
    var subjectGradeVar = event.target.subjectGrade.value;
    Subjects.insert({
      Subject: subjectNameVar,
      Leading: subjectLeadingVar,
      Grade: subjectGradeVar
    });
  }
})
