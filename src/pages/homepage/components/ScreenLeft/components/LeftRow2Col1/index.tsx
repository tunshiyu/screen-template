/*
 * @文件描述: 折线图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-02 15:35:11
 */
import React from 'react';
import { ChartDom, createLinePlot } from '@td-design/charts';
import { barData } from '@/pages/homepage/data';
import styles from '../../index.module.less';

const LeftRow2Col1 = () => (
  <ChartDom
    title="折线图"
    className={styles.block}
    getDom={(dom: HTMLElement) =>
      createLinePlot({
        dom,
        data: barData,
        config: { xField: 'date', yField: 'value', seriesField: 'type' },
      })
    }
  />
);

export default LeftRow2Col1;
