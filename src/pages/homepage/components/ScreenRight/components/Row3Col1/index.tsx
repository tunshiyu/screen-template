/*
 * @文件描述: 基础条形图示例
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-29 15:46:36
 */
import React from 'react';
import { ChartDom, createCustomBarPlot } from '@td-design/charts';
import { pieData } from '@/pages/homepage/data';
import styles from '../../index.module.less';

const Row3Col1 = () => (
  <ChartDom
    title="基础条形图示例"
    className={styles.block}
    getDom={dom =>
      createCustomBarPlot({
        dom,
        data: pieData,
        config: {
          xField: 'type',
          yField: 'value',
        },
      })
    }
  />
);

export default Row3Col1;
