module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^nanoid(/(.*)|$)': 'nanoid$1',
    '.(css|less|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  transformIgnorePatterns: [`/node_modules/(?!nanoid)`],
};
