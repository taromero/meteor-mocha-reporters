Package.describe({
  name: 'canotto90:mocha-reporters',
  summary: 'Adaptations of mocha reporters for mike:mocha',
  version: '0.1.0',
  git: 'https://github.com/taromero/meteor-mocha-reporters',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles([
    'lib/0_namespace.js',
    'lib/color.js',
    'lib/epilogue.js',
    'lib/cursor.js',
    'reporters/list.js',
    'reporters/min.js',
    'reporters/spec.js',
    'mocha-reporters.js'
  ], 'server');
});
