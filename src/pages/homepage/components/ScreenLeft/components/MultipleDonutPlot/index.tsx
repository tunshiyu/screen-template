/*
 * @文件描述: 多例环形图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-15 15:02:21
 */
import React from 'react';
import { createDonutPlot, ChartPlot } from '@td-design/charts';
import styles from './index.module.less';
import { pieData } from '@/pages/homepage/data';

const MultipleDonutPlot = () => (
  <ChartPlot
    className={styles.plotBlock}
    getDom={(dom: HTMLElement) =>
      createDonutPlot({
        dom,
        data: pieData,
        config: {
          titleName: '图例1',
          bordered: false,
        },
      })
    }
  />
);

export default MultipleDonutPlot;
