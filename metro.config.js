// metro.config.js
const { getDefaultConfig } = require('@react-native/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver = {
  ...config.resolver,
  extraNodeModules: {
    'react-native-web': require.resolve('react-native-web'),
    // Add other aliases here
  },
};

module.exports = config;
