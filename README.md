Adaptations of Mocha's reporters for use with mike:mocha (Meteor testing framework).

Currently is has 3 reporters adapted: `min`, `spec` and `list`.

The default is `min`, but you can change it by either:

- Setting `MOCHA_REPORTER` env var to the desired reporter.
- Setting `Meteor.settings.mochaReporter` to the desired reporter.

Env var will take precedence over Meteor.settings.
