module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'transform-inline-environment-variables',
        {
          include: ['REACT_NATIVE_SANTOKU_ENCRYPTION_SECRET'],
        },
      ],
    ],
  };
};
