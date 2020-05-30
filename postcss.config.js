const autoprefixer = require('autoprefixer');
const px2rem = require('postcss-pxtorem');

module.exports = {
  plugins: [
    autoprefixer({
      overrideBrowserslist: [
        '>= 0.5%',
        'chrome >= 42',
        'and_chr >= 42',
        'and_ff >= 38',
        'android >= 4.4',
        'edge >= 12',
        'firefox >= 38',
        'ie >= 11',
        'ios_saf >= 9',
        'safari >= 9',
        'node 10',
      ],
    }),
    px2rem({
      rootValue: 18,
      propList: ['*'],
      selectorBlackList: ['ant-*'],
      replace: false, // 保留px
      minPixelValue: 0,
    }),
  ],
};
