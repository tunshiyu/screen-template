/*
 * @文件描述: 玫瑰图-螺旋堆叠
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-16 17:11:32
 */
import React from 'react';
import { ChartDom, createCustomRangeBarPlot } from '@td-design/charts';
import { data2 } from '@/pages/homepage/data';
import styles from './index.module.less';

const StackSpiralRosePlot = () => (
  <ChartDom
    title="区间条形图示例"
    className={styles.block}
    getDom={dom =>
      createCustomRangeBarPlot({
        dom,
        data: data2,
        config: {
          xField: 'type',
          yField: 'values',
        },
      })
    }
  />
);

export default StackSpiralRosePlot;
