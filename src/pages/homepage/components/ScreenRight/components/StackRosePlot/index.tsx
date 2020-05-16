/*
 * @文件描述: 玫瑰图-螺旋堆叠
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-15 15:31:16
 */
import React from 'react';
import { ChartDom, createStackRosePlot } from '@td-design/charts';
import { roseData } from '@/pages/homepage/data';
import styles from './index.module.less';

const StackRosePlot = () => (
  <ChartDom
    title="玫瑰图"
    className={styles.block}
    getDom={(dom: HTMLElement) =>
      createStackRosePlot({
        dom,
        data: roseData,
        config: {
          radiusField: 'value',
          categoryField: 'category',
          stackField: 'type',
        },
      })
    }
  />
);

export default StackRosePlot;
