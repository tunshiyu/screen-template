/*
 * @文件描述: echarts 基础option配置获取 及常用方法
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2019-10-24 18:14:00
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-18 16:55:17
 */
import echarts from 'echarts';
import {
  BaseChartOption,
  EChartOption,
  Legend,
  SelectOption,
  HeatMapOption,
} from '@/interfaces/common';
import string from '../string';
import { isObject } from 'lodash';
import 'echarts/lib/chart/map';
import 'echarts/map/js/china';

interface BaseLegendsProps {
  rowNumber?: number;
  basePadding?: number;
  baseHeight?: number;
  maxHeight?: number;
}

// 图表初始化标准高度
const BASE_HEIGHT = 300;
// 一行图例的占高
export const BASE_LEGEND_HEIGHT = 14;
// 一行图例的数量
const BASE_LEGEND_ROW_NUMBER = 6;
// dataZoom 的高度
const DATA_ZOOM_HEIGHT = 50;
// grid bottom 默认底部边距
const GRID_BOTTOM_PADDING = 30;
// 基础间距
const BASE_PADDING = 5;

export const isDot = (num: string | number) => {
  return num.toString().indexOf('.') !== -1;
};

export const fixDecimalPlace = (num: number, fixNum = 2) => {
  return ('' + num).includes('.') ? num.toFixed(fixNum) : num;
};
/**
 * 返回value 与 unit区分开
 * @param value
 */
export const valueFormatWithUnit = (value: number | string) => {
  let valueStr: number | string = value;
  let unit = '';
  if (value >= 10000 && value < 100000000) {
    valueStr = fixDecimalPlace(+value / 10000);
    unit = '万';
  }
  if (value >= 100000000) {
    valueStr = fixDecimalPlace(+value / 100000000);
    unit = '亿';
  }
  // 后端提出,如果小于一万，四舍五入两位小数
  if (value < 10000 && isDot(value)) valueStr = Number(value).toFixed(2);
  return { value: valueStr, unit };
};

/** 根据数的大小进行单位转换 */
export const valueFormat = (value: number | string) => {
  const prefix = Number(value) < 0 ? '-' : '';

  const valueItem = valueFormatWithUnit(Math.abs(Number(value)) || value);
  return `${prefix + valueItem.value}${valueItem.unit}`;
};

/**
 * 从series中获取所有图例的data
 * @param series
 */
export const getLegendData = (series: echarts.EChartOption.Series[] = []) => {
  const allLegendData: echarts.EChartOption.Legend.LegendDataObject[] = [];
  series.forEach(item => {
    const data = (item['data'] as { name: string; value: number }[]) || [];
    const defaultConfig = {
      textStyle: {
        color: '#a3a2a7',
        fontSize: 12,
      },
    };
    // 饼图的图例在series.data里面
    if (item.type === 'pie') {
      allLegendData.push(
        ...data.map(({ name, value, ...rest }) => ({
          ...rest,
          ...defaultConfig,
          name,
          icon: 'roundRect',
          value,
        })),
      );
    } else {
      allLegendData.push({
        ...item,
        ...defaultConfig,
        name: item['name'],
        icon:
          item.type === 'line'
            ? 'path://M 100 100 L 300 100 L 300 140 L 100 140 z'
            : 'roundRect',
      });
    }
  });
  return allLegendData;
};

export const getLegendHeightByData = (props: GetLegendHeightByDataProps) => {
  const {
    data,
    rowNumber = BASE_LEGEND_ROW_NUMBER,
    basePadding = BASE_PADDING,
    baseHeight = BASE_LEGEND_HEIGHT,
  } = props;
  return Math.ceil(data.length / rowNumber) * (baseHeight + basePadding);
};

/**
 * 获取图例占用的高度
 * @param option
 */
export const getLegendHeight = (option: echarts.EChartOption) => {
  const { legend, series = [] } = option;
  // 不存在图例的情况
  if (
    isObject(legend) &&
    (legend as echarts.EChartOption.Legend).show === false
  ) {
    return 0;
  }
  const allLegendData: echarts.EChartOption.Legend.LegendDataObject[] = getLegendData(
    series,
  );
  return getLegendHeightByData({ data: allLegendData });
};

/**
 * 获取基础地图的配置项
 */
export const getBaseMapOption = (
  fetchOption: BaseChartOption,
  name = 'china',
) => {
  const { series = [], visualMap = [] } = fetchOption || {};
  // map的通用默认配置
  const mapConfig: echarts.EChartOption.Series = {
    type: 'map',
    map: name,
    geoIndex: 0,
    aspectScale: 0.75, // 长宽比
    showLegendSymbol: true, // 存在legend时显示
    // 大药房大屏点击可以使用这种方式但是没效果
    // selectedMode: 'multiple',
    label: {
      normal: {
        show: true,
      },
      emphasis: {
        show: false,
        textStyle: {
          color: '#fff',
        },
      },
    },
    roam: false,
    itemStyle: {
      normal: {
        areaColor: '#ccc',
        borderColor: '#3B5077',
      },
      emphasis: {
        areaColor: '#fff',
      },
    },
    animation: true,
  };
  const linesConfig = {
    type: 'lines',
    map: name,
    geoIndex: 0,
    zlevel: 1,
    effect: {
      show: true,
      period: 6,
      trailLength: 0.7,
      symbol: 'arrow',
      color: '#fff',
      symbolSize: 4,
    },
    // 配置地图线条
    lineStyle: {
      normal: {
        color: 'rgba(251,177,29,0.5)',
        width: 0.4, // 尾迹线条宽度
        opacity: 1, // 尾迹线条透明度
        curveness: 0.3, // 尾迹线条曲直度
      },
      emphasis: {
        color: 'rgba(49,181,52,1)',
        width: 1, // 尾迹线条宽度
        opacity: 1, // 尾迹线条透明度
        curveness: 0.3, // 尾迹线条曲直度
      },
    },
  };

  const visualMapConfig = {
    show: false,
    // calculable: true,
    inRange: {
      color: ['#00BAFF', '#162D59'],
    },
    textStyle: {
      fontWeight: '400',
      color: 'rgba(255,255,255,0.7)',
    },
  };
  const option: EChartOption = {
    tooltip: {
      trigger: 'item',
    },

    geo: {
      map: name,
      label: {
        emphasis: {
          show: false,
        },
      },
      center: [104, 36],
      roam: false,
      zoom: 1,
      itemStyle: {
        normal: {
          areaColor: '#00BBFF',
          borderColor: '#1f84ae',
          borderWidth: 1,
        },
        emphasis: {
          areaColor: '#163466',
        },
      },
    },
    series: series.map(dataConfig => {
      let config: object = { ...dataConfig };
      if (dataConfig.type === 'map') {
        config = { ...config, ...mapConfig };
      }
      if (dataConfig.type === 'lines') {
        config = { ...config, ...linesConfig };
      }
      return config;
    }),

    visualMap: visualMap.map(dataConfig => {
      let config: object = { ...dataConfig };
      config = { ...visualMapConfig, ...visualMap[0] };
      return config;
    }),
  };

  return option;
};

/** 判断echarts是否是空数据 */
export const isOptionEmpty = (option: EChartOption) =>
  !option || !option.series || option.series.length === 0;

/**
 * 根据配置项中是否有图例以及图例的个数返回自适应的高度
 * @param option echarts option
 */
export const getChartHeight = (option: EChartOption) => {
  const addZoomHeight = option.dataZoom ? DATA_ZOOM_HEIGHT : 0;
  const legendHeight = getLegendHeight(option as echarts.EChartOption);
  const addLegendHeight = legendHeight - BASE_LEGEND_HEIGHT - BASE_PADDING;
  const chartHeight =
    BASE_HEIGHT + (addLegendHeight < 0 ? 0 : addLegendHeight) + addZoomHeight;
  return chartHeight;
};

/**
 * 根据配置项中
 * 是否有图例以及图例的个数
 * 是否有zoom
 * 返回option grid的bottom值
 * @param option echarts option
 * @param showDataZoom 是否有zoom
 */
export const getGridBottom = (option: EChartOption, showDataZoom: boolean) => {
  const { legend } = option;
  const addZoomHeight = showDataZoom ? DATA_ZOOM_HEIGHT : 0;
  // 不存在图例的情况
  if (
    isObject(legend) &&
    (legend as echarts.EChartOption.Legend).show === false
  ) {
    return addZoomHeight;
  }
  // 存在图例的情况
  // 图例占用高度
  const legendHeight = getLegendHeight(option as echarts.EChartOption);
  return (showDataZoom ? DATA_ZOOM_HEIGHT : GRID_BOTTOM_PADDING) + legendHeight;
};

interface GetLegendHeightByDataProps extends BaseLegendsProps {
  data: echarts.EChartOption.Legend.LegendDataObject[];
}

/**
 * 获取到两个不同格式的legend format
 * @param data
 */
export const getLegendFormatObject = (
  data?: echarts.EChartOption.Legend.LegendDataObject[],
) => {
  if (data !== undefined) {
    const dataObject = {};
    data.forEach(item => {
      if (item.name) {
        dataObject[item.name] = {
          value: item['value'],
          unit: item['unit'] || '',
        };
      }
    });
    return {
      formatter: (name: string) =>
        `{name|${name}}\n{value|${valueFormat(dataObject[name].value)}}{unit|${
          dataObject[name].unit
        }}`,
      textStyle: {
        rich: {
          name: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 12,
            padding: [0, 0, 0, 5],
          },
          value: {
            color: '#2fbbff',
            align: 'left',
            fontFamily: 'PUTHIAfont',
            fontSize: 22,
            padding: [10, 0, 10, 5],
          },
          unit: {
            color: '#2fbbff',
            align: 'left',
            fontSize: 12,
            padding: [10, 0, 10, 5],
          },
        },
      },
    };
  }
  return {
    formatter: (name: string) => `{a|${string.textEllipsis(name, 14)}}`,
    textStyle: {
      rich: {
        a: {
          color: '#8f8f97',
          fontSize: 12,
          // width: 120,
        },
      },
    },
  };
};

/**
 * 从系列中创建多行图例
 */
interface CreateHorizontalLegendsFromSeriesProps extends BaseLegendsProps {
  series: echarts.EChartOption.Series[];
  itemWidth?: number;
  itemHeight?: number;
  botoom?: number;
}
export const createHorizontalLegendsFromSeries = (
  props: CreateHorizontalLegendsFromSeriesProps,
) => {
  const {
    series,
    rowNumber = BASE_LEGEND_ROW_NUMBER,
    basePadding = BASE_PADDING,
    baseHeight = BASE_LEGEND_HEIGHT,
    itemWidth = BASE_LEGEND_HEIGHT,
    itemHeight,
    botoom,
  } = props;
  const legends: echarts.EChartOption.Legend[] = [];
  const allLegendData: echarts.EChartOption.Legend.LegendDataObject[] = getLegendData(
    series,
  );
  const legendNumber = Math.ceil(allLegendData.length / rowNumber);
  const maxHeight =
    getLegendHeightByData({ data: allLegendData }) - basePadding;
  for (let i = 0; i < legendNumber; i += 1) {
    const legendData = allLegendData.slice(
      i * rowNumber,
      i * rowNumber + rowNumber,
    );
    const config: Legend = {
      bottom: botoom || maxHeight - (i + 1) * baseHeight - i * basePadding,
      orient: 'horizontal',
      data: legendData,
      ...getLegendFormatObject(),
      itemHeight: itemHeight || baseHeight,
      itemWidth,
    };
    legends.push(config);
  }
  return legends;
};

/**
 * 从系列中创建多列图例
 */
interface CreateVerticalLegendsFromSeriesProps extends BaseLegendsProps {
  series: echarts.EChartOption.Series[];
  top?: string | number;
  baseLeft?: number;
  leftAdd?: number;
  itemWidth?: number;
}
export const createVerticalLegendsFromSeries = (
  props: CreateVerticalLegendsFromSeriesProps,
) => {
  const {
    series,
    rowNumber = BASE_LEGEND_ROW_NUMBER,
    baseHeight = BASE_LEGEND_HEIGHT,
    top = '12%',
    baseLeft = 22,
    leftAdd = 60,
    itemWidth = BASE_LEGEND_HEIGHT,
  } = props;
  const legends: echarts.EChartOption.Legend[] = [];
  const allLegendData: echarts.EChartOption.Legend.LegendDataObject[] = getLegendData(
    series,
  );
  const legendNumber = Math.ceil(allLegendData.length / rowNumber);
  for (let i = 0; i < legendNumber; i += 1) {
    const legendData = allLegendData.slice(
      i * rowNumber,
      i * rowNumber + rowNumber,
    );
    const config: Legend = {
      orient: 'vertical',
      top,
      left: `${leftAdd + i * baseLeft}%`,
      bottom: 0,
      data: legendData,
      ...getLegendFormatObject(allLegendData),
      itemHeight: baseHeight,
      itemWidth,
    };
    legends.push(config);
  }
  return legends;
};

/**
 * 根据series数据判断是否存在对应的坐标轴
 * @param series
 * @param index 对应的yAxisIndex
 */
export const hasYAxis = (
  series: echarts.EChartOption.Series[] = [],
  index: number,
) => series.findIndex(item => item['yAxisIndex'] === index) > -1;

/**
 * 对series里面的data进行格式化
 * @param series
 *
 */
export const seriesFormat = <T>(series: T[]) => {
  // 解决formatter不能引入函数问题
  const newSeries: T[] = [];
  series.forEach(item => {
    const data = item['data'] || [];

    newSeries.push({
      ...item,
      data: data.map((valueItem: { value: number }) => ({
        ...valueItem,
        valueFormatABS:
          valueItem.value !== undefined
            ? `${valueFormat(Math.abs(valueItem.value))}${valueItem['unit'] ||
                ''}`
            : '暂无',
        valueFormat:
          valueItem.value !== undefined
            ? `${valueFormat(valueItem.value)}${valueItem['unit'] || ''}`
            : '暂无',
      })),
    });
  });
  return newSeries;
};

/**
 * 判断验证的参数是否为无效参数
 * @param targetValue
 * @param values
 */
export const isInvalid = (
  targetValue: string | number,
  values?: (string | number)[],
) => values !== undefined && !values.includes(targetValue);

/**
 * 向option中添加自定义series config
 * 1. 如果types不为空，为指定的types添加
 * 2. 如果seriesIndex不为空，为指定的types下的第seriesIndex个添加
 */
interface CustomSeriesOptionProps {
  option: EChartOption;
  config: object;
  types?: string[]; // series type;
  seriesIndex?: number;
  seriesIndexs?: number[];
}
export const getCustomSeriesOption = (props: CustomSeriesOptionProps) => {
  const { option, config, types, seriesIndex } = props;
  const { series = [] } = option;
  let newSeries: echarts.EChartOption.Series[] = [];
  if (Array.isArray(series)) {
    if (types && types.length > 0) {
      series.forEach((item, index) => {
        if (types.includes(item.type!)) {
          if (seriesIndex !== undefined) {
            if (seriesIndex === index) {
              newSeries.push({
                ...item,
                ...config,
              });
            } else {
              newSeries.push(item);
            }
          } else {
            newSeries.push({
              ...item,
              ...config,
            });
          }
        } else {
          newSeries.push(item);
        }
      });
    } else {
      newSeries = series?.map(item => ({
        ...item,
        ...config,
      }));
    }
  }
  return {
    ...option,
    series: newSeries,
  };
};

export const getCustomSeriesOptionOld = (props: CustomSeriesOptionProps) => {
  const { option, config, types, seriesIndexs } = props;
  const { series = [] } = option;
  if (Array.isArray(series)) {
    option.series = series.map((item, index) => {
      let doAdd = true;
      doAdd = !isInvalid(item.type || '', types);
      doAdd = doAdd === false ? doAdd : !isInvalid(index, seriesIndexs);
      const addConfig = doAdd ? config : {};
      return {
        ...item,
        ...addConfig,
      };
    });
  }
  return option;
};

/**
 * 整个复写option的series
 * @param option
 * @param config
 */
export const configCustomSeriesOption = (
  option: EChartOption,
  config: EChartOption,
) => {
  if (Array.isArray(option.series) && Array.isArray(config.series)) {
    option.series = config.series.slice();
  }
  return option;
};

/**
 * 获取option series指定下标的配置
 * @param option
 * @param index
 */
export const getOptionSeriesByIndex = (option: EChartOption, index: number) => {
  const { series = [] } = option;
  if (Array.isArray(series)) {
    return series[index];
  }
  return null;
};

/**
 * 从所有data数据更新yAxis刻度最大值
 * @param option
 */
export const updateMaxValueYAxisOfOption = (option: EChartOption) => {
  const { series = [], yAxis = [] } = option;
  if (Array.isArray(series) && Array.isArray(yAxis)) {
    const maxObj = {};
    series.forEach(item => {
      const data = (item['data'] as { value: number }[]) || [];
      const yAxisIndex = item['yAxisIndex'] || 0;
      maxObj[yAxisIndex] = maxObj[yAxisIndex] || 0;
      maxObj[yAxisIndex] = Math.max(
        maxObj[yAxisIndex],
        ...data.map(({ value }) => value),
      );
    });
    const newYAxis = yAxis.map((item, index) => {
      const config = { ...item };
      if (maxObj[index]) {
        config.max = maxObj[index];
      }
      return config;
    });
    option.yAxis = newYAxis;
  }
  return option;
};

/**
 * 创建刻度版标尺
 */
export const getScalePlateMarkLine = (
  data: { value: number }[],
  length = 35,
) => {
  const coords = data.map(({ value }, index) => [
    { coord: [100 * index + 50 - 0.5 * length, value] },
    { coord: [100 * index + 50 + 0.5 * length, value] },
  ]);
  return {
    silent: true,
    symbolSize: 0,
    lineStyle: {
      type: 'solid',
      width: 2,
    },
    data: coords,
  };
};

/**
 * 获取渐变颜色对象
 * @param startColor
 * @param endColor
 * @param isHorizontal
 */
export const getLinearGradientColor = (
  startColor: string,
  endColor: string,
  isHorizontal = false,
) => ({
  type: 'linear',
  x: 0,
  y: 0,
  x2: isHorizontal ? 1 : 0,
  y2: isHorizontal ? 0 : 1,
  colorStops: [
    {
      offset: 0,
      color: startColor,
    },
    {
      offset: 1,
      color: endColor,
    },
  ],
  global: false,
});

/**
 * 获取蓝色风格的Geo地图配置（目前用于神威采购大屏）
 * @param option
 */
export const getBlueGeoMapOption = (
  option: EChartOption,
  center?: number[],
) => {
  if (option.geo) {
    option.geo = {
      ...option.geo,
      center,
      zoom: 1.2,
      itemStyle: {
        normal: {
          areaColor: '#0C8FEB',
          borderColor: '#162D5A',
          borderWidth: 2,
        },
        // 控制鼠标移入地图的聚焦颜色
        emphasis: {
          areaColor: '#5ACCFB',
          borderColor: '#162D5A',
          borderWidth: 2,
        },
      },
      label: {
        show: true,
        color: '#FFFEFE',
        fontSize: 12,
        normal: {
          color: '#fff',
          fontSize: 12,
          show: true,
        },
        emphasis: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: 12,
            show: true,
          },
        },
      },

      // 控制map组件是否有交互动态
      silent: false,
      // TODO：UI删除南海小地图
      regions: [
        {
          name: '南海诸岛',
          itemStyle: {
            normal: {
              borderColor: '#0C8FEB',
              borderWidth: 0.15,
            },
            emphasis: {
              borderColor: '#0C8FEB',
              borderWidth: 0.15,
            },
          },
        },
      ],
    };
  }
  return option;
};

/**
 * 坐标显示类地图 添加自定义点的图标
 * @param option
 */
export const getCustomPointMapOption = (
  option: EChartOption,
  {
    symbol,
    selectedFirms,
    ...params
  }: { symbol?: string; selectedFirms?: string[]; type?: string },
) => {
  const { series = [] } = option;
  const scatterConfig = {
    type: params.type || 'scatter',
    coordinateSystem: 'geo',
    encode: {
      value: 2,
    },

    // showEffectOn: 'emphasis',
    rippleEffect: {
      brushType: 'stroke',
    },

    symbol,
    symbolSize: function symbolSize(val: number[]) {
      let rate;
      if (val[2] / 10000000 > 24) {
        rate = 24;
      } else if (val[2] / 10000000 < 10) {
        rate = val[2] / 10000000 + 5;
      } else {
        rate = val[2] / 10000000;
      }
      return symbol ? 24 : rate;
    },

    hoverAnimation: true,
    label: {
      normal: {
        formatter: '{b}',
        position: 'right',
        show: false,
      },
    },
    itemStyle: {
      // 无图标时小圆点颜色控制
      normal: {
        color: '#fff',
      },
    },
    zlevel: 1,
  };
  const newSeries: object[] = series.map((config: object) => {
    let isMapDeatil =
      // config['name'] === series[0]['name'] && config['type'] === 'map' && !params.type;
      config['name'] === series[0]['name'] && config['type'] === 'map';
    // 热力图的type也为map但是不需要scatterConfig
    if (config['name'] === '热力图') {
      isMapDeatil = false;
    }

    const addConfig = isMapDeatil ? scatterConfig : {};
    return {
      ...config,
      ...addConfig,
    };
  });
  const optionObj: EChartOption = { ...option, series: newSeries };
  return optionObj;
};

export const isNumberWithPoint = (value: string | number) =>
  /^(([1-9][0-9]*\.[0-9][0-9]*)|([0]\.[0-9][0-9]*)|([1-9][0-9]*)|([0]{1}))$/.test(
    `${value}`,
  );

/**
 * 创建label value的行数据
 * @param data
 */
export const createLabelItemStr = (data: SelectOption[]) =>
  data.length
    ? data
        .map(({ label, value }) => {
          return `<div style="text-align: left; padding: 5px;">
         <span style="min-width: 150px; text-align: left; display: inline-block; color: rgba(255, 254, 254, 0.6);">${label}：</span>
         <span style="color: rgba(255, 254, 254, 1);text-align: right;">${
           isNumberWithPoint(value)
             ? valueFormat(value)
             : valueFormat(Number(value))
         }</span>
       </div>`;
        })
        .join('')
    : '';

/**
 * 给tooltip添加边框
 * @param str
 * @param header 如果有头部标题传个对象
 */
export const createTooltipBlockStr = (
  str: string,
  header?: { left: string; right: string } | undefined,
) => {
  const baseBorderStyle = 'position: absolute; width: 10px; height: 10px;';
  const baseBorder = '2px  solid #00BBFF';
  return `<div style="line-height: 24px; border: 0.5px solid rgba(0, 187, 255, 0.6); padding: 8px; position: relative; background-color: rgba(10, 24, 51, 0.6)">
        <div style="${baseBorderStyle} top: 0; left: 0; border-top: ${baseBorder}; border-left: ${baseBorder};"></div>
        <div style="${baseBorderStyle} top: 0; right: 0; border-top: ${baseBorder}; border-right: ${baseBorder};"></div>
        <div style="${baseBorderStyle} bottom: 0; left: 0; border-bottom: ${baseBorder}; border-left: ${baseBorder};"></div>
        <div style="${baseBorderStyle} bottom: 0; right: 0; border-bottom: ${baseBorder}; border-right: ${baseBorder};"></div>
        ${
          header
            ? `<div style="text-align: left; padding: 5px;">
            <span style="min-width: 150px; text-align: left; display: inline-block; color: rgba(0,187,255,1);">${header?.left}</span>
            <span style="color: rgba(0,187,255,1);text-align: right;">${header?.right}</span>
              </div>`
            : ''
        }
        ${str}
      </div>`;
};

/**
 * 获取后台约定的自定义tooltip展示（科技风tooltip）
 * @param option
 */
export const getCustomTooltipOption = (option: EChartOption) => {
  option.tooltip = {
    formatter: function format(
      params:
        | echarts.EChartOption.Tooltip.Format[]
        | echarts.EChartOption.Tooltip.Format,
    ) {
      if (Array.isArray(params)) {
        return '';
      }
      const tooltipData: SelectOption[] = params['data'].tooltipData || [];
      const str = createLabelItemStr(tooltipData);
      return tooltipData.length > 0 ? createTooltipBlockStr(str) : '';
    },
    padding: 0,
    confine: true,
  };
  return option;
};

export const getMapTooltipOption = (
  option: EChartOption,
  // 如果传则自定义tootip的title，不传则title为省市的名字
  mapToolTipTitle?: { left?: string; right?: string },
) => {
  option.tooltip = {
    trigger: 'item',
    formatter: function format(
      params:
        | echarts.EChartOption.Tooltip.Format[]
        | echarts.EChartOption.Tooltip.Format,
    ) {
      const tooltipData: SelectOption[] = params['data']?.tooltipData || [];
      const str = createLabelItemStr(tooltipData);
      // scatter|effectScatter  地图图标
      if (
        params['seriesType'] === 'scatter' ||
        params['seriesType'] === 'effectScatter'
      ) {
        return tooltipData.length > 0
          ? createTooltipBlockStr(str, {
              left: params['data']['name'],
              right: '',
            })
          : '';
      }
      // lines类，地图飞线
      if (params['seriesType'] === 'lines') {
        const tooltipData: SelectOption[] =
          (option.series &&
            option.series[0]['data']![params['dataIndex']][2]) ||
          [];
        const str = createLabelItemStr(tooltipData);
        return tooltipData.length > 0 ? createTooltipBlockStr(str) : '';
      }
      // map类，具体省市
      if (params['seriesType'] === 'map') {
        const isHaveData = params['data']?.name;
        let tooltipData: SelectOption[];
        if (!params['data']?.tooltipData) {
          tooltipData = isHaveData
            ? [
                {
                  label: params['data']?.name,
                  value: params['data']?.value,
                },
              ]
            : [];
        } else {
          tooltipData = params['data']?.tooltipData || [];
        }
        const str = createLabelItemStr(tooltipData);
        return tooltipData.length > 0
          ? createTooltipBlockStr(
              str,
              mapToolTipTitle
                ? {
                    left: mapToolTipTitle?.left || '',
                    right: mapToolTipTitle?.right || '',
                  }
                : {
                    left: params['name'],
                    right: '',
                  },
            )
          : '';
      }
      return '';
    },
    padding: 0,
    confine: true,
  };
  return option;
};

/**
 * 活动添加默认dataZoom后的option配置
 * @param option
 */
interface DataZoomOptionProps {
  option: EChartOption;
  showHandle?: boolean;
  xAxisIndex?: number | number[];
}
export const getDefaultDataZoomOption = (
  props: DataZoomOptionProps,
  showNum = 7,
  isShowFromEnd?: boolean,
) => {
  const { option, showHandle = true, xAxisIndex } = props;
  const { series = [] } = option;
  if (series.length > 0) {
    const data = series[0]['data'] || [];
    const length = data.length || 1;
    const slider = {
      type: 'slider',
      bottom: getLegendHeight(option as echarts.EChartOption) + BASE_PADDING,
      backgroundColor: '#0f325a',
      borderColor: 'rgba(0, 0, 0, 0)',
      fillerColor: '#0f5287',
      start: isShowFromEnd ? (1 - showNum / length) * 100 : 0,
      end: isShowFromEnd ? 100 : (showNum / length) * 100, // 默认初始化以8个为显示单位
      handleSize: showHandle ? '100%' : 0,
      handleIcon:
        'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
      handleStyle: { color: '#5c8aafc2' },
      textStyle: {
        color: '#a3a2a7',
      },
      height: 15,
      xAxisIndex,
    };
    option.dataZoom = [slider];
    option.grid!['bottom'] = getGridBottom(option, true);
  }
  return option;
};

// 热力图获取option
export function getHeatMapOption(config: HeatMapOption) {
  const { data, xAxis, yAxis } = config;
  const series = data.map(item => {
    return [item[1], item[0], item[2] || '-'];
  });
  const option: EChartOption = {
    tooltip: {
      position: 'top',
    },
    animation: false,

    grid: {
      height: '80%',
      top: '6%',
      left: '40',
      right: '18',
    },

    xAxis: {
      data: xAxis,
      type: 'category',

      splitArea: {
        show: true,
      },
      axisLabel: {
        color: '#fff',
        align: 'center',
        fontSize: 8,
      },
    },
    yAxis: {
      type: 'category',
      data: yAxis,
      splitArea: {
        show: true,
      },
      axisLabel: {
        color: '#fff',
        fontSize: 8,
      },
    },

    visualMap: [
      {
        type: 'continuous',
        min: 0,
        max: 5,
        calculable: true,
        itemHeight: 60,
        itemWidth: 4,
        right: 0,
        top: '30%',
        inverse: false,
        // 值越大越接近右边颜色，反之
        inRange: {
          color: ['#00BBFF', '#083D62'],
        },
      },
    ],
    series: [
      {
        type: 'heatmap',
        data: series,
        // 格子里的统计数字
        // label: {
        //   normal: {
        //     show: true,
        //   },
        //   color: '#fff',
        // },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
  return option;
}

// 创建通用样式的tooltip格式字符 title为头部文字,bottom为其余
export const createCustomStyleTooltip = (title: string, bottom: string) => {
  return `<div style="text-align: left; padding: 16px;background:rgba(10,24,51,0.87);border:1px solid rgba(0,187,255,1);">
  <div style="min-width: 150px; font-weight:400;color:rgba(255,254,254,1);margin-bottom: 10px;font-size:14px;">${title}</div>
  <span style="color: rgba(255, 254, 254, 0.7);font-size:11px;">${bottom}</span>
</div>`;
};

/**
 * @功能描述: 当浮窗需要增加字符时使用
 * @参数: baseOption
 * @返回值: 改造后的对象，直接赋值给baseOption.tooltip
 */
export const getExtraTextFormatter = (
  baseOption: echarts.EChartOption<echarts.EChartOption.Series>,
) => {
  return {
    ...baseOption.tooltip,
    formatter: function format(
      params:
        | echarts.EChartOption.Tooltip.Format[]
        | echarts.EChartOption.Tooltip.Format,
    ) {
      if (!Array.isArray(params)) {
        return '';
      }
      const str = params.length > 0 ? `${params[0].axisValue}<br />` : '';

      let tooltipArr: string[] | ConcatArray<string> = [];
      tooltipArr = params.map(item =>
        item.data['tooltipData']
          ?.map(({ label, value }: { label: string; value: number }) => {
            return label ? `${label}：${valueFormat(value) || '暂无'}` : '';
          })
          .concat(tooltipArr)
          .join('<br />'),
      );

      return createCustomStyleTooltip(
        str,
        params
          .map(({ seriesName, data }) => {
            return seriesName
              ? `${seriesName}：${valueFormat(data['valueFormat']) || '暂无'}`
              : '';
          })
          .concat(tooltipArr)
          .filter(str => !!str)
          .join('<br />'),
      );
    },
  };
};
