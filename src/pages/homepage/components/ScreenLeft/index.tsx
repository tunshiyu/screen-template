/*
 * @文件描述: 左边大屏图表
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-16 11:58:25
 */
import React from 'react';
import styles from './index.module.less';
import ColumnLinePlot from './components/ColumnLinePlot';
import LinePlot from './components/LinePlot';
import PiePlot from './components/PiePlot';
import CustomBarPlot from './components/CustomBarPlot';
import RadarPlot from './components/RadarPlot';
import PiePlotGroup from './components/PiePlotGroup';

const ScreenLeft = () => {
  return (
    <div className={styles.leftScreen}>
      {/** 第一行 */}
      <ColumnLinePlot />
      <PiePlot />
      {/** 第二行 */}
      <LinePlot />
      <CustomBarPlot />
      <RadarPlot />
      {/** 第三行 */}
      <PiePlotGroup />
    </div>
  );
};

export default ScreenLeft;
