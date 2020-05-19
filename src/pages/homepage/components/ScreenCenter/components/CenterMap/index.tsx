import React, { useEffect, useRef } from 'react';
import echarts from 'echarts';
import styles from './index.module.less';
import {
  getBlueGeoMapOption,
  getBaseMapOption,
  getMapTooltipOption,
} from '@/utils/charts/chart-option-utils';
import mapJson from './mapJson.json';
import lscache from 'lscache';
import { mapData } from '@/pages/homepage/data';

const CenterMap: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  function getOption() {
    const baseOption = getBaseMapOption(mapData.data, 'hebei');
    // 设置该值为0，当点击的时候改变省市value控制
    baseOption.visualMap = [
      {
        // 图例值控制
        show: false,
        type: 'piecewise',
        pieces: [
          {
            min: 0,
            color: '#0C8FEB',
          }, // 不指定 max，表示 max 为无限大（Infinity）。
          {
            max: 1,
            color: '#5ACCFB',
          }, // 不指定 max，表示 max 为无限大（Infinity）。
        ],
      },
    ];
    const blueGeoOption = getBlueGeoMapOption(baseOption);
    const option = getMapTooltipOption(blueGeoOption, {});
    return option;
  }

  useEffect(() => {
    const option = getOption() as echarts.EChartOption;

    echarts.registerMap('hebei', mapJson);
    const chart = echarts.init(chartRef.current!);

    chart.setOption(option);
    return () => {
      lscache.flush();
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
