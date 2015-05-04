Template.addSubject.events({
  'submit form': function (event, template) {
    event.preventDefault();
    var subjectNameVar = template.find('#subjectName').value;
    var subjectLeadingVar = template.find('#subjectLeading').value;
    var subjectSemesterVar = parseInt(template.find('#subjectSemester').value);

    Meteor.call('addSubject',subjectNameVar, subjectLeadingVar, subjectSemesterVar);
    Router.go('/');
  }
});
