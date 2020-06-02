/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2020-05-22 14:22:59
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-02 15:03:33
 */

import { defineConfig } from 'umi';
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
import routeConfig from './routeConfig';
import { RootValue } from '../src/utils/rem/index';

const px2rem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');

export default defineConfig({
  extraPostCSSPlugins: [
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
      rootValue: RootValue, // 换算基数
      selectorBlackList: ['ant-', 'td-'], // 忽略rem转换
      replace: false, // 保留px
      minPixelValue: 0,
    }),
  ],
  dynamicImport: {
    loading: '@/components/Loading.tsx',
  },
  hash: true,
  outputPath: 'build',
  routes: routeConfig,
  polyfill: {
    imports: ['core-js/stable'],
  },
  esbuild: {},
  metas: [
    { name: 'msapplication-TileColor', content: '#da532c' },
    { name: 'theme-color', content: '#ffffff' },
  ],
  links: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    {
      rel: 'stylesheet',
      href: '//at.alicdn.com/t/font_1509107_vaarx0n4zz.css',
    },
  ],
  chainWebpack(config) {
    config.plugin('dayjs').use(AntdDayjsWebpackPlugin);
  },
});
