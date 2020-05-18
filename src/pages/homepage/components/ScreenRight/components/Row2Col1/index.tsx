/*
 * @文件描述: 玫瑰图示例
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-18 16:46:10
 */
import React from 'react';
import { ChartDom, createDonutRosePlot } from '@td-design/charts';
import { pieData } from '@/pages/homepage/data';
import styles from './index.module.less';

const Row2Col1 = () => {
  return (
    <ChartDom
      title="玫瑰图示例"
      className={styles.block}
      getDom={dom =>
        createDonutRosePlot({
          dom,
          data: pieData,
          config: {
            layout: 'half',
            colorField: 'type',
            radiusField: 'value',
          },
        })
      }
    />
  );
};

export default Row2Col1;
