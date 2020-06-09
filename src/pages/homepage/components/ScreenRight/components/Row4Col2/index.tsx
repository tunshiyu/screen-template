/*
 * @文件描述: 玫瑰图-螺旋堆叠
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-08 16:20:26
 */
import React from 'react';
import { ChartDom, createStackRosePlot } from '@td-design/charts';
import { roseData } from '@/pages/homepage/data';
import styles from '../../index.module.less';

const Row4Col2 = () => (
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
          legend: {
            flipPage: true,
            position: 'bottom-center',
            text: {
              formatter: txt => {
                if (txt !== '空') {
                  return txt;
                }
                return '';
              },
              style: { fill: 'rgba(255, 255, 255, 0.7)' },
            },
          },
        },
      })
    }
  />
);

export default Row4Col2;
