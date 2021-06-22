/* eslint-disable import/no-extraneous-dependencies */
const { pathsToModuleNameMapper } = require("ts-jest/utils");
// Load the config which holds the path aliases.
const { compilerOptions } = require("../../tsconfig.json");

const packageFile = require('./package.json');

module.exports = {
  displayName: packageFile.name,
  preset: '../../jest.integration.preset.js',
  verbose: true,
  silent: false,
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json'
    }
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    // This has to match the baseUrl defined in tsconfig.json.
    prefix: "<rootDir>/../../",
  }),
  coverageDirectory: `../../coverage/packages/${packageFile.name}`
};
