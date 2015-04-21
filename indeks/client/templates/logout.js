Template.menu.events({
  'click .logOut': function(event){
    event.preventDefault();
    Meteor.logout();
  }
});
