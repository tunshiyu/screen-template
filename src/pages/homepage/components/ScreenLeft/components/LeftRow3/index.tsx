/*
 * @文件描述: 饼图组合
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-16 16:09:24
 */
import React from 'react';
import { ComBlock, ComCard } from '@td-design/charts';
import styles from './index.module.less';
import LeftRow3Col1 from '../LeftRow3Col1';
import LeftRow3Col2 from '../LeftRow3Col2';

const LeftRow3 = () => {
  return (
    <ComBlock className={styles.piePlotWrap}>
      <ComCard title="饼图">
        <div className={styles.pieCardWrap}>
          <LeftRow3Col1 />
          <LeftRow3Col2 />
          <LeftRow3Col2 />
          <LeftRow3Col2 />
        </div>
      </ComCard>
    </ComBlock>
  );
};

export default LeftRow3;
