/*
 * @文件描述: 分组柱状图+折线图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-02 16:06:43
 */
import React from 'react';
import { ChartDom, createGroupedColumnLinePlot } from '@td-design/charts';
import { groupedComboData } from '@/pages/homepage/data';
import styles from '../../index.module.less';

const RightRow2Col1 = () => {
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

export default RightRow2Col1;
