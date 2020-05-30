/*
 * @文件描述: 环形图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-16 19:32:57
 */
import React from 'react';
import { ChartDom, createDonutPlot } from '@td-design/charts';
import styles from '../../index.module.less';

const Row4Col1 = () => (
  <ChartDom
    title="单例环形图示例"
    className={styles.block}
    getDom={dom =>
      createDonutPlot({
        dom,
        data: 26,
        config: {
          isSingle: true,
          titleName: '图例1',
        },
      })
    }
  />
);

export default Row4Col1;
