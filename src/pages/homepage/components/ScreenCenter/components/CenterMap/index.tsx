/*
 * @文件描述: 中心地图
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2019-10-30 15:45:00
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-18 16:15:20
 */
import React, { useEffect, useRef } from 'react';
import echarts from 'echarts';
import styles from './index.module.less';

import { BaseChartOption } from '@/interfaces/common';
import {
  getBaseMapOption,
  getMapTooltipOption,
  getCustomPointMapOption,
} from '@/utils/charts/chart-option-utils';
import { heatMapData } from '@/pages/homepage/data';

const CenterMap: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const option = getBaseMapOption(heatMapData as BaseChartOption);
    const customPointOption = getCustomPointMapOption(option, {
      symbol:
        option['symbol'] || `image://${require('@/assets/icon_map_order.png')}`,
    });
    const opt = getMapTooltipOption(customPointOption);

    const chart = echarts.init(chartRef.current!);
    chart.setOption(opt as echarts.EChartOption);
    return () => {
      // 释放图表实例
      chart.dispose();
    };
  }, []);

  return (
    <div className={styles.comChart}>
      <div className={styles.chart} ref={chartRef} />
    </div>
  );
};

export default CenterMap;
