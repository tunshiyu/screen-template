/*
 * @文件描述: 运行时配置，可以在项目运行过程中执行一些操作。
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-10-25 13:43:18
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-01 11:42:54
 */
import { remFunc } from './utils/rem';

/**
 * 改写整个应用render到dom树里。
 * 可能场景：
 *  1. 在渲染应用之前做权限校验，不通过则跳转到登录页（单点登录场景会很有用）
 *  2. 和pathRoutes配合，在render时请求后端接口，拿到动态路由
 * @param oldRender
 */
export async function render(oldRender: Function) {
  window.onresize = remFunc;
  remFunc();

  oldRender();
}
