module.exports = {
  rootDir: '.',
  preset: './jest.unit.preset.js',
  projects: [
    '<rootDir>/packages/npm-scripts/jest.config.js',
    '<rootDir>/packages/core-sdk/jest.config.js',
    '<rootDir>/packages/http-client-sdk/jest.config.js',
    '<rootDir>/packages/testing/jest.config.js',
    '<rootDir>/packages/utils-sdk/jest.config.js'
  ],
  coverageDirectory: './coverage/all'
};
