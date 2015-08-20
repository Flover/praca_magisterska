checkBeforeAction = function(studentId, exercise, exam){
  if(exercise > 2 && exercise <=5){
    Meteor.call('updateExamGrade', studentId, Router.current().params.subjectId, exam);
  } else {
    Materialize.toast('Twoja ocena z ćwiczeń to: ' + exercise + '. Nie możesz uczestniczyć w egzaminie.', 4000);
  }
}

checkIfChooseTeacher = function(subjectLeadingVar, subjectNameVar, subjectSemesterVar){
  if(subjectLeadingVar === undefined || subjectLeadingVar === null || subjectLeadingVar === ''){
    Materialize.toast('Musisz wybrać prowadzącego!', 4000);
  } else if (subjectNameVar === null || subjectNameVar === undefined || subjectNameVar === ''){
    Materialize.toast('Musisz podać nazwę przedmiotu', 4000);
  } else {
    Meteor.call('addSubject',subjectNameVar, subjectLeadingVar, subjectSemesterVar);
    Router.go('/');
  }
}
