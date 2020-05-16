/*
 * @文件描述: 左边大屏图表
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-15 15:02:33
 */
import React from 'react';
import { ComBlock, ComCard } from '@td-design/charts';
import styles from './index.module.less';
import SingleDonutPlot from '../SingleDonutPlot';
import MultipleDonutPlot from '../MultipleDonutPlot';

const PiePlotGroup = () => {
  return (
    <ComBlock className={styles.piePlotWrap}>
      <ComCard title="饼图">
        <div className={styles.pieCardWrap}>
          <SingleDonutPlot />
          <MultipleDonutPlot />
          <MultipleDonutPlot />
          <MultipleDonutPlot />
        </div>
      </ComCard>
    </ComBlock>
  );
};

export default PiePlotGroup;
