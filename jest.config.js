module.exports = {
  rootDir: '.',
  preset: './jest.unit.preset.js',
  projects: [
    '<rootDir>/packages/core-sdk/jest.config.js'
  ],
  coverageDirectory: './coverage/all'
};
