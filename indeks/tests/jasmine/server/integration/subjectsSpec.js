describe('Adding subject', function () {
  it('Should add new subject', function () {
    Meteor.call('addSubject','Subject 1', 'Leading 1', 1);
    Meteor.call('addSubject','Subject 2', 'Leading 1', 1);

    expect(Subjects.find({}).count()).toBe(2);

    Subjects.remove({'subject': 'Subject 1'});
    Subjects.remove({'subject': 'Subject 2'});
  });

});

describe("Subject Ordering", function (){
  it("should result in a list with alphabetical order", function(){

    Meteor.call('addSubject','Subject 1', 'Leading 1', 1);
    Meteor.call('addSubject','Subject 2', 'Leading 1', 1);

    var subjects = Subjects.find({}, {sort: { 'subject': 1 }}).fetch();
    expect(subjects[0].subject <= subjects[1].subject).toBe(true);

    Subjects.remove({'subject': 'Subject 1'});
    Subjects.remove({'subject': 'Subject 2'});
  });

})

describe('Collection: Subjects', function () {
  it('some subjects are available in the collection', function () {
    Meteor.call('addSubject','Subject 1', 'Leading 1', 1);
    Meteor.call('addSubject','Subject 2', 'Leading 1', 1);

    expect(Subjects.find({}).count()).toBeGreaterThan(0);

    Subjects.remove({'subject': 'Subject 1'});
    Subjects.remove({'subject': 'Subject 2'});
  });

});
