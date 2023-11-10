import '@testing-library/jest-dom'

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  /* The `setupFiles` configuration option in Jest is used to specify an array of setup files that will
  be run before each test file. In this case, `['./jest.setup.js']` is specifying that the
  `jest.setup.js` file should be run before each test file. This file can be used to set up any
  necessary configurations or global variables that are needed for the tests. */
  setupFiles: ['./jest.setup.js'],
  moduleNameMapper: {
      "^.+\\.svg$": "jest-svg-transformer",
"\\.(css|less|scss)$": "identity-obj-proxy",
},
setupFilesAfterEnv: ['<rootDir>/jest-setup.js']
}