Subjects = new Mongo.Collection('subjects');
Grades = new Mongo.Collection('grades');


//Set default album number for new student
/*Subjects.defaultStudentNumber = function(){
  var nextNumber = 0;
  while(Subjects.findOne({number: nextNumber})){
    nextNumber = nextNumber + 1;
  }
}*/
