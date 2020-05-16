/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-10-23 21:12:06
 * @LastEditors: 阮旭松
 * @LastEditTime: 2020-05-15 18:22:35
 */

import { MenuDataItem } from '@ant-design/pro-layout';
import echarts from 'echarts';

export interface CustomWindow extends Window {
  gMenus: MenuDataItem[];
  requestConfig: {
    withCredentials: boolean;
    getToken: () => Promise<string>;
  };
  authConfig: {
    url: string;
    client_id: string;
    client_secret: string;
    password_min: number;
    password_max: number;
    company: number;
  };
}

export interface CustomLocation extends Location {
  query: {
    [x: string]: string;
  };
}

export interface PageMatchModel {
  isExact: boolean;
  params: object;
  path: string;
  url: string;
}

export interface PageBasicPropsModel {
  history: History;
  location: CustomLocation;
  match: PageMatchModel;
  children?: React.ComponentType;
}

export interface PrivilegeResource {
  apiUrl: string;
  description: string;
  icon: string;
  id: number;
  orderValue: number;
  resourceKey: string;
  type: number;
  privilegeList: string[];
  resourceBusinessValue: string;
  children: PrivilegeResource[];
  isVisible: boolean;
}

interface AngleSeriesData {
  name: string;
  min: number;
  max: number;
}

export interface AngleSeries {
  name: string;
  data: AngleSeriesData[];
}

export interface HeatMapOption {
  title: string;
  xAxis: string[];
  yAxis: string[];
  data: number[][];
}

export type LinearColor =
  | string[]
  | (
      | string
      | {
          type: 'linear';
          x: number;
          y: number;
          x2: number;
          y2: number;
          colorStops: { offset: number; color: string }[];
          globalCoord: boolean;
          addColorStop(offset: number, color: string): void;
        }
    )[]
  | (string | object)[]
  | undefined;

export interface MenuItemConfig {
  key: string;
  name: string;
  link?: string;
  icon: string;
  children?: MenuItemConfig[];
}

// T merge options
export type MergeEChartOption<T> = Merge<echarts.EChartOption, T>;

// T merge Legend
export type MergeLegend<T> = Merge<echarts.EChartOption.Legend, T>;

export type RichTextStyle<T> = Merge<
  echarts.EChartOption.TextStyle,
  {
    rich?: T;
  }
>;

// 处理后台返回数据后的 line bar类型通用定义
export interface AxisDataType {
  name: string;
  unit?: string;
  type: string; // x y z
  data: number[];
}

// line bar 基础option定义
export interface ChartLineBarOption {
  data: AxisDataType[];
  title: string;
}

export interface QuotaData {
  standard?: number;
  name: string;
  value: number;
  unit?: string;
  percentage?: number;
  number?: number;
  type?: string;
  isShow?: boolean;
  // 前缀
  prefix?: number | string;
  // 地图类型数据
  longitude?: number;
  latitude?: number;
  id?: number;
  min?: number;
  max?: number;
}

// 饼图、指标等option定义
export interface ChartQuotaOption {
  data: QuotaData[];
  title: string;
}

export interface MappingType {
  name: string;
  unit?: string;
  sourceKey: string;
  targetKey: string;
}

// 额外的数据和属性
export interface MetadataType {
  // for center map
  maxCount?: number;
  minCount?: number;
  // 右侧会携带的工厂信息
  factoryName?: string;
  workshopName?: string;
  // 携带的指标类信息
  quotaData?: QuotaData[];
}

export interface FetchDataType<T> {
  title: string;
  subTitle?: string;
  data: T;
  mapping?: MappingType[];
  metadata?: MetadataType;
  series?: {
    data: T;
  };
}

export interface IntervalDataType<T> {
  title: string;
  data: T;
  names: string[];
  types: string[];
}

export interface RecordType {
  lastLoop: boolean; // 每轮翻页结束
  loopNum: number; // 翻页经过了第几轮
  page: number; // 当前是第几页
}

// 与后台接口约定返回的配置项
export interface BaseChartOption {
  xAxis?: echarts.EChartOption.XAxis[];
  yAxis?: echarts.EChartOption.YAxis[];
  visualMap?: echarts.EChartOption.VisualMap[];
  series: echarts.EChartOption.Series[];
}

export interface SankeyNode {
  name: string;
  depth: number;
  color?: string;
  itemStyle: object;
}
export interface SankeyLink {
  source: string;
  target: string;
  value: number;
}
export interface BaseSankeyOption {
  nodes: SankeyNode[];
  edges: SankeyLink[];
}

interface TextStyle extends echarts.EChartOption.TextStyle {
  padding?: number[] | number;
  align?: string;
}

interface Rich {
  a?: TextStyle;
  subLabel?: TextStyle;
  name?: TextStyle;
}

export type Legend = MergeLegend<{
  textStyle?: RichTextStyle<Rich>;
}>;

export type EChartOption = Merge<
  echarts.EChartOption,
  {
    legend?: Legend | Legend[];
    color?: (string | object)[];
    grid?: echarts.EChartOption.Grid | echarts.EChartOption.Grid[];
  }
>;

export type valueType = string | number;

export interface SelectOption {
  label: string;
  value: valueType;
}
