const packageFile = require('./package.json');
const preset = require('../../jest.unit.preset');

delete preset.testMatch;
delete preset.globals;
delete preset.transform;
delete preset.coverageThreshold;

module.exports = {
  ...preset,
  testMatch: ['**/tests/**/?(*.)+(spec|test).[jt]s?(x)'],
  displayName: packageFile.name,
  coverageDirectory: `../../coverage/packages/${packageFile.name}`
};
