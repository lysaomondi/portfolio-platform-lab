module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // Handles CSS imports and image imports
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};