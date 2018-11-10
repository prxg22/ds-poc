const path = require('path');

module.exports = {
  sections: [
    {
      name: 'UI Components',
      components: 'src/components/**/*.jsx',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand',
    },
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'styleguide/ThemeWrapper'),
  },
};
