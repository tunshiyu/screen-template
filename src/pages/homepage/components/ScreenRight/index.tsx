/*
 * @文件描述: 右边大屏图表
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-16 19:32:19
 */
import React from 'react';
import styles from './index.module.less';
import Row1Col1 from './components/Row1Col1';
import Row2Col1 from './components/Row2Col1';
import Row3Col1 from './components/Row3Col1';
import Row4Col1 from './components/Row4Col1';
import Row4Col2 from './components/Row4Col2';

const ScreenRight = () => {
  return (
    <div className={styles.rightScreen}>
      {/** 第一行 */}
      <Row1Col1 />
      {/** 第二行 */}
      <Row2Col1 />
      {/** 第三行 */}
      <Row3Col1 />
      {/** 第四行 */}
      <Row4Col1 />
      <Row4Col2 />
    </div>
  );
};

export default ScreenRight;
