/*
 * @文件描述: 单象限散点图示例
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-16 19:29:56
 */
import React from 'react';
import { ChartDom, createScatterPlot } from '@td-design/charts';
import { scatterData } from '@/pages/homepage/data';
import styles from './index.module.less';

const Row1Col1 = () => (
  <ChartDom
    title="单象限散点图示例"
    className={styles.block}
    getDom={dom =>
      createScatterPlot({
        dom,
        data: scatterData,
        config: {
          xField: 'date',
          yField: 'type',
          sizeField: 'value',
          yPrefixName: '条件',
        },
      })
    }
  />
);

export default Row1Col1;
