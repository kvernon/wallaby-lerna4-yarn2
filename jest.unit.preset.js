module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json'
    }
  },
  testMatch: ['**/unit/**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest'
  },
  verbose: true,
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: [
    '**/*.ts',
    '!**/tests/integration/**',
    '!**/**/.eslintrc.js',
    '!**/**/jest.config.js',
    '!**/**/jest.integration.config.js',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
};
