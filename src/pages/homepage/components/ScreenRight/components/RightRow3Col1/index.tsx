/*
 * @文件描述: 分组条形图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-02 16:06:52
 */
import React from 'react';
import { ChartDom, createCustomGroupedBarPlot } from '@td-design/charts';
import { groupedBarData } from '@/pages/homepage/data';
import styles from '../../index.module.less';

const RightRow3Col1 = () => (
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

export default RightRow3Col1;
