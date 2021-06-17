module.exports = () => ({
  autoDetect: true,
  files: [
    '!**/packages/tests/integration/**/*',
    { pattern: 'node_modules/@company/**', ignore: true }
  ],
  tests: [
    '**/tests/unit/**/*.test.*',
    { pattern: 'node_modules/@company/**', ignore: true }
  ],
  testFramework: {
    // the jest configuration file path
    // (relative to project root)
    configFile: './jest.config.js'
  },
  debug: true
});
