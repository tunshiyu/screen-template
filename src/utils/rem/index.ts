/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2020-05-30 16:02:10
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-01 15:20:09
 */

export const RootValue = 10;
export const rem = (px: number) => `${px / RootValue}rem`;

export function remFunc() {
  // rem适配
  const styleN = document.createElement('style');
  styleN.innerHTML = 'html{font-size:' + RootValue + 'px}';
  styleN.innerHTML += ` @media screen and (min-width: 1280px) {
    html {
      font-size: ${RootValue}px;
    }
  }
  @media screen and (max-width: 1280px) {
    html {
      font-size: 8px;
    }
  }
  @media screen and (max-width: 960px) {
    html {
      font-size: 6px;
    }
  }`;
  document.head.appendChild(styleN);
}
