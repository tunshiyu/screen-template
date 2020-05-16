/*
 * @文件描述: 冰山图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-15 15:49:47
 */
import React from 'react';
import { ChartDom, createLinePlot } from '@td-design/charts';
import { barData } from '@/pages/homepage/data';
import styles from './index.module.less';

// TODO: 冰山图图表组件
const IcebergPlot = () => (
  <ChartDom
    title="冰山图"
    className={styles.block}
    getDom={(dom: HTMLElement) =>
      createLinePlot({
        dom,
        data: barData,
        config: { xField: 'date', yField: 'value', seriesField: 'type' },
      })
    }
  />
);

export default IcebergPlot;
