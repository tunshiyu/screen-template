/*
 * @文件描述: 冰山图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-16 16:13:43
 */
import React from 'react';
import { ChartDom, createLinePlot } from '@td-design/charts';
import { barData } from '@/pages/homepage/data';
import styles from '../../index.module.less';

// TODO: 冰山图图表组件
const RightRow3Col2 = () => (
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

export default RightRow3Col2;
