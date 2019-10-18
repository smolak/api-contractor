module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.test.json',
    },
  },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|js)$',
  testPathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/.home'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coverageReporters: ['cobertura', 'text', 'html'],
  coverageDirectory: 'test-output',
  moduleFileExtensions: ['ts', 'js', 'json'],
  transformIgnorePatterns: ['<rootDir>/src/node_modules/(?!@hc)'],
  modulePathIgnorePatterns: ['<rootDir>[/\\\\](dist|docs|node_modules)[/\\\\]'],
  testEnvironment: 'node',
  errorOnDeprecated: true,
};
