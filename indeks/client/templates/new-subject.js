Template.addSubject.events({
  'submit form': function (event, template) {
    event.preventDefault();
    var subjectNameVar = template.find('#subjectName').value;
    var subjectLeadingVar = template.find('#subjectLeading').value;
    var subjectSemesterVar = parseInt(template.find('#subjectSemester').value);
    checkIfChooseTeacher(subjectLeadingVar, subjectNameVar, subjectSemesterVar);
  }
});
