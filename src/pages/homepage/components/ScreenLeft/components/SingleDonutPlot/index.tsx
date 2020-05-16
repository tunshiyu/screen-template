/*
 * @文件描述: 单例环形图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-15 11:40:47
 */
import React from 'react';
import { createDonutPlot, ChartPlot } from '@td-design/charts';
import styles from './index.module.less';

const SingleDonutPlot = () => (
  <ChartPlot
    className={styles.plotBlock}
    getDom={(dom: HTMLElement) =>
      createDonutPlot({
        dom,
        data: 73,
        config: {
          isSingle: true,
          titleName: '图例1',
        },
      })
    }
  />
);

export default SingleDonutPlot;
