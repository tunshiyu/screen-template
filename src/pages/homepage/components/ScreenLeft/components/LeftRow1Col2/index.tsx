/*
 * @文件描述: 环形图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-16 16:06:11
 */
import React from 'react';
import { ChartDom, createDonutPlot } from '@td-design/charts';
import { pieData } from '@/pages/homepage/data';
import styles from './index.module.less';

const LeftRow1Col2 = () => (
  <ChartDom
    title="环形图"
    className={styles.block}
    getDom={(dom: HTMLElement) =>
      createDonutPlot({
        dom,
        data: pieData,
        config: {
          angleField: 'value',
          colorField: 'type',
        },
      })
    }
  />
);

export default LeftRow1Col2;
