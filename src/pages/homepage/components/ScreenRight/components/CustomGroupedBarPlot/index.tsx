/*
 * @文件描述: 分组条形图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-15 18:26:03
 */
import React from 'react';
import { ChartDom, createCustomGroupedBarPlot } from '@td-design/charts';
import { groupedBarData } from '@/pages/homepage/data';
import styles from './index.module.less';

const CustomGroupedBarPlot = () => (
  <ChartDom
    title="分组条形图"
    className={styles.block}
    getDom={(dom: HTMLElement) =>
      createCustomGroupedBarPlot({
        dom,
        data: groupedBarData,
        config: {
          xField: 'country',
          yField: 'value',
          groupField: 'type',
        },
      })
    }
  />
);

export default CustomGroupedBarPlot;
