/*
 * @文件描述: 注水图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-02 16:07:02
 */
import React from 'react';
import { ChartDom, createLiquidPlot } from '@td-design/charts';
import styles from '../../index.module.less';

const RightRow4Col1 = () => (
  <ChartDom
    title="注水图"
    className={styles.block}
    getDom={(dom: HTMLElement) =>
      createLiquidPlot({
        dom,
        data: 80,
      })
    }
  />
);

export default RightRow4Col1;
