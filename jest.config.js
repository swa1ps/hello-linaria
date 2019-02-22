module.exports = {
  setupFilesAfterEnv: ['<rootDir>/internals/testing/test-bundler.js'],
  setupFiles: [
    'raf/polyfill',
    '<rootDir>/internals/testing/enzyme-setup.js',
  ],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__mocks__/fileMock.js',
    '\\.css$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['src/**/*.js'],
};
