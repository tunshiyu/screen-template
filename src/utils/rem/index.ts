/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2020-05-30 16:02:10
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-30 16:02:50
 */

export const rem = (px: number) => `${px / 18}rem`;

export function remFunc() {
  // rem适配
  const styleN = document.createElement('style');
  const width = document.documentElement.clientWidth / 160 + 6;
  styleN.innerHTML = 'html{font-size:' + width + 'px!important}';
  document.head.appendChild(styleN);
}
