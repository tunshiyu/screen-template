/*
 * @文件描述: 条形图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-16 16:05:54
 */
import React from 'react';
import { ChartDom, createCustomBarPlot } from '@td-design/charts';
import { pieData } from '@/pages/homepage/data';
import styles from './index.module.less';

const LeftRow2Col2 = () => (
  <ChartDom
    title="条形图"
    className={styles.block}
    getDom={(dom: HTMLElement) =>
      createCustomBarPlot({
        dom,
        data: pieData,
        config: {
          xField: 'type',
          yField: 'value',
        },
      })
    }
  />
);

export default LeftRow2Col2;
