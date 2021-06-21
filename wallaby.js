module.exports = () => ({
  autoDetect: true,
  files: [
    '**/packages/lib/**/*',
    { pattern: 'node_modules/@company/**', ignore: true }
  ],
  tests: [
    '**/tests/**/**/*.test.*',
    { pattern: 'node_modules/@company/**', ignore: true }
  ],
  testFramework: {
    // the jest configuration file path
    // (relative to project root)
    configFile: './jest.config.js'
  },
  debug: true
});
