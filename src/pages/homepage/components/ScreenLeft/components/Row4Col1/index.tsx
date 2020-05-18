/*
 * @文件描述: 玫瑰图-螺旋堆叠
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-16 17:21:12
 */
import React from 'react';
import { ChartDom, createStackRosePlot } from '@td-design/charts';
import { roseData } from '@/pages/homepage/data';
import styles from './index.module.less';

const Row4Col1 = () => (
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
        },
      })
    }
  />
);

export default Row4Col1;
