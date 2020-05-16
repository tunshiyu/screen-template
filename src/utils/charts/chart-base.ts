/*
 * @文件描述: echarts 基础option配置获取 及常用方法
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2019-10-24 18:14:00
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-15 17:34:23
 */
import {
  BaseChartOption,
  EChartOption,
  FetchDataType,
} from '@/interfaces/common';
import { getBaseMapOption } from './chart-option-utils';
import 'echarts/lib/chart/map';
import 'echarts/map/js/china';

/**
 * 普通地图
 * @param data
 */
export const getGeneralMapOption = (data: FetchDataType<BaseChartOption>) => {
  const { metadata } = data;
  const defaultOption = getBaseMapOption(data.data);
  let scale = 1;
  // 最大点的直径
  const maxPointDia = 30;
  // 地图圆点大小的比例控制
  if (metadata && metadata.maxCount) {
    scale = maxPointDia / metadata.maxCount;
  }
  const { series = [] } = defaultOption;
  const newSeries: object[] = series.map(config => ({
    ...config,
    type: 'effectScatter',
    coordinateSystem: 'geo',
    encode: {
      value: 2,
    },
    symbolSize: (arr: number[]) => arr[2] * scale,
    showEffectOn: 'render',
    rippleEffect: {
      brushType: 'stroke',
    },
    hoverAnimation: true,
    label: {
      normal: {
        formatter: '{b}',
        position: 'right',
        show: true,
      },
    },
    itemStyle: {
      normal: {
        color: '#3eeaff',
        shadowBlur: 10,
        shadowColor: '#333',
      },
    },
    zlevel: 1,
  }));
  const option: EChartOption = {
    ...defaultOption,
    series: newSeries,
  };
  return option;
};
