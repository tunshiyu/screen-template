/*
 * @文件描述: 右边大屏图表
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-16 16:18:14
 */
import React from 'react';
import styles from './index.module.less';
import RightRow1Col1 from './components/RightRow1Col1';
import RightRow1Col2 from './components/RightRow1Col2';
import RightRow2Col1 from './components/RightRow2Col1';
import RightRow1Col3 from './components/RightRow1Col3';
import RightRow2Col2 from './components/RightRow2Col2';
import RightRow3Col1 from './components/RightRow3Col1';
import RightRow3Col2 from './components/RightRow3Col2';
import RightRow4Col1 from './components/RightRow4Col1';
import RightRow4Col2 from './components/RightRow4Col2';
import RightRow4Col3 from './components/RightRow4Col3';

const ScreenRight = () => {
  return (
    <div className={styles.rightScreen}>
      {/** 第一行 */}
      <RightRow1Col1 />
      <RightRow1Col2 />
      <RightRow1Col3 />
      {/** 第二行 */}
      <RightRow2Col1 />
      <RightRow2Col2 />
      {/** 第三行 */}
      <RightRow3Col1 />
      <RightRow3Col2 />
      {/** 第四行 */}
      <RightRow4Col1 />
      <RightRow4Col2 />
      <RightRow4Col3 />
    </div>
  );
};

export default ScreenRight;
