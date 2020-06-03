/*
 * @文件描述: 雷达图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-18 16:41:19
 */
import React from 'react';
import { ChartDom, createRadarPlot } from '@td-design/charts';
import { radarData } from '@/pages/homepage/data';
import styles from '../../index.module.less';

const LeftRow2Col3 = () => (
  <ChartDom
    title="雷达图"
    className={styles.block}
    getDom={(dom: HTMLElement) =>
      createRadarPlot({
        dom,
        data: radarData,
        config: {
          angleField: 'item',
          radiusField: 'score',
          seriesField: 'user',
        },
      })
    }
  />
);

export default LeftRow2Col3;
