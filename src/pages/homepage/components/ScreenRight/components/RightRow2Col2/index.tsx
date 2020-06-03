/*
 * @文件描述: 瀑布图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-16 16:12:38
 */
import React from 'react';
import { ChartDom, createWaterfallPlot } from '@td-design/charts';
import { barData } from '@/pages/homepage/data';
import styles from '../../index.module.less';

const RightRow2Col2 = () => (
  <ChartDom
    title="瀑布图"
    className={styles.block}
    getDom={(dom: HTMLElement) =>
      createWaterfallPlot({
        dom,
        data: barData,
        config: {
          xField: 'date',
          yField: 'value',
        },
      })
    }
  />
);

export default RightRow2Col2;
