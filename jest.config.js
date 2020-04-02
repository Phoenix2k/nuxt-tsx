const { defaults } = require('jest-config');

module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  coverageDirectory: 'tests/coverage',
  globals: {
    'ts-jest': {
      babelConfig: '.babelrc.json',
      compiler: 'typescript',
      tsconfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  moduleNameMapper: {
    '^.+\\.scss$': '<rootDir>/tests/unit/jest/jest.mock.scss.js',
    '^@/(.*)$': '<rootDir>/$1'
  },
  modulePathIgnorePatterns: [...defaults.modulePathIgnorePatterns, 'tests/e2e'],
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/tests/unit/jest/jest.setup.js'],
  snapshotResolver: '<rootDir>/tests/unit/jest/jest.snapshot.resolver.js',
  testEnvironment: 'node',
  testRegex: '((\\.|/)test)\\.(ts|tsx?)$',
  transform: {
    '^.+\\.(ts|tsx?)$': 'ts-jest'
  },
  verbose: true
};
