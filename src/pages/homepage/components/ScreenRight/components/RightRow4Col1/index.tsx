/*
 * @文件描述: 注水图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-18 14:37:33
 */
import React from 'react';
import { ChartDom, createLiquidPlot } from '@td-design/charts';
import styles from './index.module.less';

const RightRow4Col1 = () => (
  <ChartDom
    title="注水图"
    className={styles.block}
    getDom={(dom: HTMLElement) =>
      createLiquidPlot({
        dom,
        data: 80,
        config: {
          padding: [0, 0, 30, -50],
        },
      })
    }
  />
);

export default RightRow4Col1;
