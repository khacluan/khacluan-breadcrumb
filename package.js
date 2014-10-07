Package.describe({
  summary: "breadcrumb for your meteor application",
  version: "0.0.4",
  git: "git@github.com:khacluan/khacluan-breadcrumb.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.addFiles([
    'client/khacluan:breadcrumb.coffee',
    'client/khacluan:helpers.coffee',
    'client/views/breadcrumb/crumb.coffee',
    'client/views/breadcrumb/crumb.html'
  ], 'client');

  api.addFiles('server/khacluan:breadcrumb.coffee', 'server');

  api.export('Breadcrumb', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('khacluan:breadcrumb');
  api.addFiles('test/breadcrumb-tests.js');
});
