const { defaults } = require('jest-config');

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  coverageDirectory: 'coverage',
  globals: {
    'ts-jest': {
      babelConfig: '.babelrc.json',
      compiler: 'typescript',
      tsconfig: 'tsconfig.json'
    }
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  moduleNameMapper: {
    '^.+\\.scss$': '<rootDir>/test/unit/jest.style.mock.js',
    '^@/(.*)$': '<rootDir>/$1'
  },
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/test/unit/jest.setup.js'],
  snapshotResolver: '<rootDir>/test/unit/jest.snapshot.resolver.js',
  testEnvironment: 'node',
  testRegex: '((\\.|/)(spec|test))\\.(ts|tsx?)$',
  transform: {
    '^.+\\.ts(x)$': 'ts-jest'
  },
  verbose: true
};
