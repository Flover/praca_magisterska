Package.describe({
  name: 'emflover:validation',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});


Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.add_files("validation-client.js", "client");
  api.export('checkBeforeAction', 'client');
  api.export('checkIfChooseTeacher', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use(['mizzao:bootboxjs']);
  api.use('emflover:validation');
  api.addFiles('validation-tests.js');
});
