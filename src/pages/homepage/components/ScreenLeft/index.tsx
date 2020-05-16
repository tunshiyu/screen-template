/*
 * @文件描述: 左边大屏图表
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-16 16:08:05
 */
import React from 'react';
import styles from './index.module.less';
import LeftRow1Col1 from './components/LeftRow1Col1';
import LeftRow1Col2 from './components/LeftRow1Col2';
import LeftRow2Col1 from './components/LeftRow2Col1';
import LeftRow2Col2 from './components/LeftRow2Col2';
import LeftRow2Col3 from './components/LeftRow2Col3';
import LeftRow3 from './components/LeftRow3';

const ScreenLeft = () => {
  return (
    <div className={styles.leftScreen}>
      {/** 第一行 */}
      <LeftRow1Col1 />
      <LeftRow1Col2 />
      {/** 第二行 */}
      <LeftRow2Col1 />
      <LeftRow2Col2 />
      <LeftRow2Col3 />
      {/** 第三行 */}
      <LeftRow3 />
    </div>
  );
};

export default ScreenLeft;
