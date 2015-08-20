Template.menu.events({
  'click .logOut': function(event){
    event.preventDefault();
    Meteor.logout();
    Router.go("/login");
    Materialize.toast('Wróć jeszcze kiedyś!', 4000, 'rounded');
  }
});
