/*
 * @文件描述: 极坐标柱状图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-02 16:07:12
 */
import React from 'react';
import { ChartDom, createRadialStackPlot } from '@td-design/charts';
import styles from '../../index.module.less';
import { radialStackData } from '@/pages/homepage/data';

const RightRow4Col2 = () => (
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

export default RightRow4Col2;
