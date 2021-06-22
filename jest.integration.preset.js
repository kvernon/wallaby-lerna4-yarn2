const unitPreset = require('./jest.unit.preset');

delete unitPreset['coverageReporters'];
delete unitPreset['coverageThreshold'];

module.exports = {
  ...unitPreset,
  testMatch: ['**/integration/**/?(*.)+(spec|test).[jt]s?(x)']
};
