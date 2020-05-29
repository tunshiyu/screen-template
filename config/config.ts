/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2020-05-16 14:33:48
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-29 17:25:05
 */

import { defineConfig } from 'umi';
import routeConfig from './routeConfig';

export default defineConfig({
  hash: true,
  outputPath: 'build',
  esbuild: {},
  metas: [
    { name: 'msapplication-TileColor', content: '#da532c' },
    { name: 'theme-color', content: '#ffffff' },
  ],
  routes: routeConfig,
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
  ],
});
