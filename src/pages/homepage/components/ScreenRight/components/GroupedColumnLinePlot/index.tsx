/*
 * @文件描述: 分组柱状图+折线图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-16 14:59:49
 */
import React from 'react';
import { ChartDom, createGroupedColumnLinePlot } from '@td-design/charts';
import { groupedComboData } from '@/pages/homepage/data';
import styles from './index.module.less';

const GroupedColumnLinePlot = () => {
  const { barData, lineData } = groupedComboData;
  return (
    <ChartDom
      title="分组柱状图+折线图"
      className={styles.block}
      getDom={(dom: HTMLElement) =>
        createGroupedColumnLinePlot({
          dom,
          data: [barData, lineData],
          config: {
            xField: 'time',
            yField: ['value', 'count'],
            columnGroupField: 'type',
          },
        })
      }
    />
  );
};

export default GroupedColumnLinePlot;
