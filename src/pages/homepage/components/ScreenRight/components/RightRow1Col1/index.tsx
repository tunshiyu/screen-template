/*
 * @文件描述: 玫瑰图-螺旋堆叠
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-02 16:06:23
 */
import React from 'react';
import { ChartDom, createStackRosePlot } from '@td-design/charts';
import { roseData } from '@/pages/homepage/data';
import styles from '../../index.module.less';

const RightRow1Col1 = () => (
  <ChartDom
    title="螺旋玫瑰图"
    className={styles.block}
    getDom={(dom: HTMLElement) =>
      createStackRosePlot({
        dom,
        data: roseData,
        config: {
          radiusField: 'value',
          categoryField: 'category',
          stackField: 'type',
          isSpiral: true,
          padding: [20, 50, 50, 50],
        },
      })
    }
  />
);

export default RightRow1Col1;
