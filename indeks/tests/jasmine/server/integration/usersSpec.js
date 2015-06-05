describe("Users Ordering", function(){
  it("check is there any users in database", function(){
    if (Meteor.users.find().count() === 1) {
      Accounts.createUser({
        username: 'username1',
        email: 'username1@test.pl',
        password: 'abcdef',
        profile:{
          name: 'student',
          firstName: 'firstName1',
          lastName: 'lastName1',
          subjects:[]
        }
      });
      Accounts.createUser({
        username: 'username2',
        email: 'username2@test.pl',
        password: 'abcdef',
        profile:{
          name: 'student',
          firstName: 'firstName2',
          lastName: 'lastName2',
          subjects:[]
        }
      });
    }

    var users = Meteor.users.find({}, {sort: { 'profile.lastName': 1 }}).fetch();
    expect(users[0].profile.lastName <= users[1].profile.lastName).toBe(true);

    Meteor.users.remove({'username': 'username1'});
    Meteor.users.remove({'username': 'username2'});

  });
});

describe('Adding user', function () {
  it('Should add new users', function () {
    if (Meteor.users.find().count() === 1) {
      Accounts.createUser({
        username: 'username1',
        email: 'username1@test.pl',
        password: 'abcdef',
        profile:{
          name: 'student',
          firstName: 'firstName1',
          lastName: 'lastName1',
          subjects:[]
        }
      });
      Accounts.createUser({
        username: 'username2',
        email: 'username2@test.pl',
        password: 'abcdef',
        profile:{
          name: 'student',
          firstName: 'firstName2',
          lastName: 'lastName2',
          subjects:[]
        }
      });
    }

    expect(Meteor.users.find({}).count()).toBe(3);

    Meteor.users.remove({'username': 'username1'});
    Meteor.users.remove({'username': 'username2'});
  });
});

describe('Set user a role', function () {
  it('Should assign user to role', function () {
    if (Meteor.users.find().count() === 1) {
      Accounts.createUser({
        username: 'username1',
        email: 'username1@test.pl',
        password: 'abcdef',
        profile:{
          name: 'student',
          firstName: 'firstName1',
          lastName: 'lastName1',
          subjects:[]
        }
      });
      Accounts.createUser({
        username: 'username2',
        email: 'username2@test.pl',
        password: 'abcdef',
        profile:{
          name: 'student',
          firstName: 'firstName2',
          lastName: 'lastName2',
          subjects:[]
        }
      });
    }

    user = Meteor.users.find({'username': 'username1'}).fetch();

    Meteor.call('assignRole', user[0], 'student');
    expect(Meteor.users.findOne({'username': 'username1'}).roles[0]).toBe('student');

    Meteor.users.remove({'username': 'username1'});
    Meteor.users.remove({'username': 'username2'});
  });

});
