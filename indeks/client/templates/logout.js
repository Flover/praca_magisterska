Template.logout.events({
  'click .logOut': function(event){
    event.preventDefault();
    Meteor.logout();
  }
});
