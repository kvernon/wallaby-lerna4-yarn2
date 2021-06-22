module.exports = {
  rootDir: '.',
  preset: './jest.integration.preset.js',
  projects: [
    '<rootDir>/packages/core-sdk/jest.integration.config.js'
  ],
  coverageDirectory: './coverage/all'
};
