module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          '@components': './app/components',
          '@screens': './app/screens',
          '@router': './app/router',
          '@store': './app/store',
          '@theme': './app/theme',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
