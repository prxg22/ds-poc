const path = require('path');

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules'
        }
      ]
    }
  },
  sections: [
    {
      name: 'UI Components',
      components: 'src/components/**/*.jsx',
      exampleMode: 'expand',
      usageMode: 'expand',
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/ThemeWrapper'),
  },
};
