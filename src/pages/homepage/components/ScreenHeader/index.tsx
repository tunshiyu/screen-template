/*
 * @文件描述: 大屏头部
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-14 16:22:50
 */
import React from 'react';
import styles from './index.module.less';

const ScreenHeader = () => {
  return (
    <div className={styles.headerWrap}>
      <div className={styles.header}>可视化大屏</div>
    </div>
  );
};

export default ScreenHeader;
