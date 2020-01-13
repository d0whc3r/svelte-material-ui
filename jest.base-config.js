const svelteConfig = require('./svelte.config');

module.exports = (name, tsTransform = 'ts-jest') => ({
  testPathIgnorePatterns: ['/node_modules/(?!@smui)/', '/cypress/'],
  moduleDirectories: ['node_modules'],
  transform: {
    '^.+\\.svelte$': 'jest-transform-svelte',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': tsTransform
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'json', 'node', 'mjs', 'svelte'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: `../../report`,
        outputName: `${name}-junit.xml`
      }
    ]
  ],
  collectCoverage: false,
  collectCoverageFrom: ['*/**/*.{ts,svelte}', '!*/**/*.{spec,e2e}.ts', '!src/**/*.d.ts'],
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: `../../report/coverage/jest/${name}`,
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  setupFilesAfterEnv: ['<rootDir>/../../jest.setup.js'],
  globals: {
    svelte: {
      preprocess: svelteConfig.preprocess,
      compilerOptions: {
        accessors: true
      }
    }
  }
});
