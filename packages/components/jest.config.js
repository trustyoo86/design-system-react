const { shallow, render, mount } = require('enzyme');
global.shallow = shallow;
global.render = render;
global.mount = mount;

module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'json'],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
  ],
  testMatch: [
    '<rootDir>/__tests__/**/*.test.js',
  ],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  testEnvironment: 'node',
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer',
  ],
  moduleNameMapper: {
    '_src/(.+)$': '<rootDir>/src/$1',
  },
};