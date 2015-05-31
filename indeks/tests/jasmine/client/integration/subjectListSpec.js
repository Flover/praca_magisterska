var Profile = function(id, username){
    this.id = id;
    this.username = username;
    return this;
};

var Subs = function(id, name, leading){
  this.id = id;
  this.name = name;
  this.leading = leading;
}

// describe("Subject assigining to student", function () {
//   it("should add student to subject and subject to student", function () {
//
//
//
//     var Student = new Profile('1', 'username1');
//     var sub = new Subs('1', 'Subject 1', 'Leading 1');
//     // var subject = Subjects.find({"_id": 1}).fetch();
//     // var user = Meteor.users.find({}).fetch();
//
//     // Meteor.call('addStudentToSubject', sub.name, sub.id, Student.username, Student.id, sub.leading);
//     // expect(Grades.find().count()).toBeGreaterThan(0);
//   });
// });
