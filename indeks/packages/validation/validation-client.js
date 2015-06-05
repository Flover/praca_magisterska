// capitalise = function(str){
//   return str + " actually can't be capitalised";
// }

checkBeforeAction = function(studentId, exercise, exam){
  if(exercise > 2 && exercise <=5){
    Meteor.call('updateExamGrade', studentId, Router.current().params.subjectId, exam);
  } else {
    bootbox.alert("Twoja ocena z ćwiczeń to: " + exercise + ". Nie możesz uczestniczyć w egzaminie.");
  }
}

checkIfChooseTeacher = function(subjectLeadingVar, subjectNameVar, subjectSemesterVar){
  if(subjectLeadingVar === undefined || subjectLeadingVar === null || subjectLeadingVar === ''){
    bootbox.alert('Musisz wybrać prowadzącego!');
  } else if (subjectNameVar === null || subjectNameVar === undefined || subjectNameVar === ''){
    bootbox.alert('Musisz podać nazwę przedmiotu');
  } else {
    Meteor.call('addSubject',subjectNameVar, subjectLeadingVar, subjectSemesterVar);
    Router.go('/');
  }
}
