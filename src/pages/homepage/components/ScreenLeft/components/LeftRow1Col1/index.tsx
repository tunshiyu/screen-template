/*
 * @文件描述: 柱状图+折线图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-16 16:02:49
 */
import React from 'react';
import { ChartDom, createColumnLinePlot } from '@td-design/charts';
import { comboData } from '@/pages/homepage/data';
import styles from './index.module.less';

const LeftRow1Col1 = () => {
  const { barData, lineData } = comboData;
  return (
    <ChartDom
      title="柱状图+折线图"
      className={styles.block}
      getDom={(dom: HTMLElement) =>
        createColumnLinePlot({
          dom,
          data: [barData, lineData],
          config: {
            xField: 'time',
            yField: ['value', 'count'],
          },
        })
      }
    />
  );
};

export default LeftRow1Col1;
