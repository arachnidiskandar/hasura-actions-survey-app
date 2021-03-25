module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@handlers': './src/handlers',
        '@middlewares': './src/middlewares',
      },
    }],
  ],
  ignore: [
    '**/*.spec.ts',
  ],
};
