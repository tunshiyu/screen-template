/*
 * @文件描述: 折线图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-18 14:28:57
 */
import React from 'react';
import { ChartDom, createLinePlot } from '@td-design/charts';
import { barData } from '@/pages/homepage/data';
import styles from './index.module.less';

const Row3Col1 = () => (
  <ChartDom
    title="折线图"
    className={styles.block}
    getDom={(dom: HTMLElement) =>
      createLinePlot({
        dom,
        data: barData,
        config: {
          xField: 'date',
          yField: 'value',
          seriesField: 'type',
          padding: [20, 50, 40, 50],
        },
      })
    }
  />
);

export default Row3Col1;
