Package.describe({
  name: 'canotto90:mocha-reporters',
  summary: 'Adaptations of mocha reporters for mike:mocha',
  version: '0.0.1',
  git: 'https://github.com/taromero/meteor-mocha-reporters',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('canotto90:mocha-reporters.js');
});
