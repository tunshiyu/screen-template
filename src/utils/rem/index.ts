/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2020-05-30 16:02:10
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-01 17:20:35
 */

export const RootValue = 10;

/**
 * @功能描述: 组件行内样式或者特殊属性需要rem时，可使用该函数
 * @参数: UI图px
 * @返回值: rem
 */
export const rem = (px: number) => `${px / RootValue}rem`;
