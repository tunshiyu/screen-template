/*
 * @文件描述: 中间大屏地图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-15 17:56:49
 */
import React from 'react';
import styles from './index.module.less';
import CenterMap from './components/CenterMap';

const ScreenCenter = () => {
  return (
    <div className={styles.centerScreen}>
      <CenterMap />
    </div>
  );
};

export default ScreenCenter;
