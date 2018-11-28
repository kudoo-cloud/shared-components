module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  globals: {
    NODE_ENV: 'test',
  },
  verbose: false,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(scss|css|less)$': '<rootDir>/__mocks__/fileMock.js',
    '^components/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['<rootDir>/test/shimSetup.js', '<rootDir>/test/enzymeSetup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testURL: 'http://localhost:6006',
};
