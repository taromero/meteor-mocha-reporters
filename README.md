## This doesn't work anymore (compatibility issues with newer versions of Velocity)

I probably won't fix the compatibility issue. Try out my https://github.com/taromero/latte for a nice Meteor testing framework alternative.

Details at https://github.com/taromero/meteor-mocha-reporters/issues/1.

---

Adaptations of Mocha's reporters for use with mike:mocha (Meteor testing framework).

Currently it has 3 reporters adapted: `min`, `spec` and `list`.

The default is `min`, but you can change it by either:

- Setting `MOCHA_REPORTER` env var to the desired reporter.
- Setting `Meteor.settings.mochaReporter` to the desired reporter.

Env var will take precedence over Meteor.settings.
