module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // Define your aliases here
            components: './src/components',
            utils: './src/utils',
          },
        },
      ],
    ],
  };
  