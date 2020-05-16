/*
 * @文件描述: 右边大屏图表
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-16 12:02:28
 */
import React from 'react';
import styles from './index.module.less';
import StackSpiralRosePlot from './components/StackSpiralRosePlot';
import GroupedColumnLinePlot from './components/GroupedColumnLinePlot';
import CustomBarPlot from './components/CustomBarPlot';
import WaterfallPlot from './components/WaterfallPlot';
import StackRosePlot from './components/StackRosePlot';
import CustomGroupedBarPlot from './components/CustomGroupedBarPlot';
import IcebergPlot from './components/IcebergPlot';
import LiquidPlot from './components/LiquidPlot';
import RadialStackPlot from './components/RadialStackPlot';
import StackAreaPlot from './components/StackAreaPlot';

const ScreenRight = () => {
  return (
    <div className={styles.rightScreen}>
      {/** 第一行 */}
      <StackSpiralRosePlot />
      <StackRosePlot />
      <CustomBarPlot />
      {/** 第二行 */}
      <GroupedColumnLinePlot />
      <WaterfallPlot />
      {/** 第三行 */}
      <CustomGroupedBarPlot />
      <IcebergPlot />
      {/** 第四行 */}
      <LiquidPlot />
      <RadialStackPlot />
      <StackAreaPlot />
    </div>
  );
};

export default ScreenRight;
