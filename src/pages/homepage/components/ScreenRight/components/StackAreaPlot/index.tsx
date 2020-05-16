/*
 * @文件描述: 面积图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-15 15:57:29
 */
import React from 'react';
import { ChartDom, createStackAreaPlot } from '@td-design/charts';
import styles from './index.module.less';
import { barData } from '@/pages/homepage/data';

const StackAreaPlot = () => (
  <ChartDom
    title="面积图"
    className={styles.block}
    getDom={(dom: HTMLElement) =>
      createStackAreaPlot({
        dom,
        data: barData,
        config: {
          xField: 'date',
          yField: 'value',
          stackField: 'type',
        },
      })
    }
  />
);

export default StackAreaPlot;
