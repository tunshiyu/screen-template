/*
 * @文件描述: 左边大屏图表
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-16 17:21:29
 */
import React from 'react';
import styles from './index.module.less';
import Row1Col1 from './components/Row1Col1';
import Row2Col1 from './components/Row2Col1';
import Row3Col1 from './components/Row3Col1';
import Row4Col1 from './components/Row4Col1';
import Row4Col2 from './components/Row4Col2';

const ScreenLeft = () => {
  return (
    <div className={styles.leftScreen}>
      <Row1Col1 />
      <Row2Col1 />
      <Row3Col1 />
      <Row4Col1 />
      <Row4Col2 />
    </div>
  );
};

export default ScreenLeft;
