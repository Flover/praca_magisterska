Template.menu.rendered = function() {

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
  },
  "change .importSubjects": function(evt, tmpl){
     FS.Utility.eachFile(event,function(file){
       var theFile = new FS.File(file);
       Uploads.insert(theFile,function(err,fileObj){
         if(!err){
           Meteor.call('uploadSubjectsFile',fileObj._id,file.name);
         }
       })
     })
  },
  "change .importUsers": function(evt, tmpl){
     FS.Utility.eachFile(event,function(file){
       var theFile = new FS.File(file);
       Uploads.insert(theFile,function(err,fileObj){
         if(!err){
           Meteor.call('uploadUsersFile',fileObj._id,file.name);
         }
       })
     })
  },
  "change .importGrades": function(evt, tmpl){
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
