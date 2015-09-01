Template.menu.rendered = function() {
  $(document).ready(function(){
      $('.dropdown-button').dropdown();
    });
};

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

Template.usersImport.events({
  "change .importUsers": function(evt, tmpl){

     FS.Utility.eachFile(event,function(file){
       var theFile = new FS.File(file);
       Uploads.insert(theFile,function(err,fileObj){
         if(!err){
           Meteor.call('uploadUsersFile',fileObj._id,file.name);
           Router.go("/");
         }
       })
     })
  }
});

Template.subjectsImport.events({
  "change .importSubjects": function(evt, tmpl){
    console.log("cokolwiek");
     FS.Utility.eachFile(event,function(file){
       var theFile = new FS.File(file);
       Uploads.insert(theFile,function(err,fileObj){
         if(!err){
           Meteor.call('uploadSubjectsFile',fileObj._id,file.name);
           Router.go("/");
         }
       })
     })
  }
});

Template.gradesImport.events({
  "change .importGrades": function(evt, tmpl){
    console.log("cokolwiek");
     FS.Utility.eachFile(event,function(file){
       var theFile = new FS.File(file);
       Uploads.insert(theFile,function(err,fileObj){
         if(!err){
           Meteor.call('uploadGradesFile',fileObj._id,file.name);
         }
       })
     })
  }
});
