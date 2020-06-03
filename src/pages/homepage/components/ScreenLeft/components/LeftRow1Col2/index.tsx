/*
 * @文件描述: 环形图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-02 15:33:22
 */
import React from 'react';
import { ChartDom, createDonutPlot } from '@td-design/charts';
import { pieData } from '@/pages/homepage/data';
import styles from '../../index.module.less';

const LeftRow1Col2 = () => (
  <ChartDom
    title="环形图"
    className={styles.block}
    getDom={(dom: HTMLElement) =>
      createDonutPlot({
        dom,
        data: pieData,
        config: {
          angleField: 'value',
          colorField: 'type',
        },
      })
    }
  />
);

export default LeftRow1Col2;
