/*
 * @文件描述: 面积图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-02 16:07:20
 */
import React from 'react';
import { ChartDom, createStackAreaPlot } from '@td-design/charts';
import styles from '../../index.module.less';
import { barData } from '@/pages/homepage/data';

const RightRow4Col3 = () => (
  <ChartDom
    title="面积图"
    className={styles.block}
    getDom={(dom: HTMLElement) =>
      createStackAreaPlot({
        dom,
        data: barData,
        config: {
          xField: 'date',
          yField: 'value',
          stackField: 'type',
        },
      })
    }
  />
);

export default RightRow4Col3;
