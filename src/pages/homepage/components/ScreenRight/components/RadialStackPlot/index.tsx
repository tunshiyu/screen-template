/*
 * @文件描述: 极坐标柱状图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-15 15:58:58
 */
import React from 'react';
import { ChartDom, createRadialStackPlot } from '@td-design/charts';
import styles from './index.module.less';
import { radialStackData } from '@/pages/homepage/data';

const RadialStackPlot = () => (
  <ChartDom
    title="极坐标柱状图"
    className={styles.block}
    getDom={(dom: HTMLElement) =>
      createRadialStackPlot({
        dom,
        data: radialStackData,
        config: {
          colorField: 'type',
          angleField: 'value',
        },
      })
    }
  />
);

export default RadialStackPlot;
