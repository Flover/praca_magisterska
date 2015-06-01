Template.menu.events({
  'click .backup': function () {
    Meteor.call('downloadExcelFile', function(err, fileUrl) {
      console.log(fileUrl);
      var link = document.createElement("a");
      link.download = 'personalBackup.xlsx';
      link.href = fileUrl;
      link.click();
    });
    console.log("pobieram");
  }
});
