/*
 * @文件描述: 中间大屏地图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-18 17:06:47
 */
import React from 'react';
import styles from './index.module.less';
import CenterMap from './components/CenterMap';
import SalesWarning from './components/SalesWarning';
import BlockWithTitle from '@/components/BlockWithTitle';
import CustomQuota from '@/components/CustomQuota';
import { QuotaData } from '@/interfaces/common';

const getQuotaItem = (
  { name, value, unit, percentage }: QuotaData,
  size: 'small' | 'large' | 'normal',
  index: number,
) => {
  return (
    <CustomQuota
      key={name}
      // 第二个和第四个百分比需要小数点后截取两位
      value={index === 1 || index === 3 ? Math.floor(value * 100) / 100 : value}
      label={name}
      unitStyle={{ marginTop: 4 }}
      unit={<div style={{ display: 'flex' }}>{unit}</div>}
      quotaStyle={{ justifyContent: 'center' }}
      align="vertical"
      size={size}
    >
      {percentage ? (
        <div className={styles['quota-percentage']}>
          <span className={styles['quota-percentage-label']}>达成</span>
          <span className={styles['quota-percentage-number']}>
            {percentage > 0 ? '  +' : '  '}
            {Number(percentage)}%
          </span>
        </div>
      ) : (
        <div>&nbsp;</div>
      )}
    </CustomQuota>
  );
};

const renderQuota = (list: QuotaData[]) => {
  const quotaDom = [];
  quotaDom.push(
    <div key="line1" className={styles.quota} style={{ padding: ' 0 40px' }}>
      {list
        .slice(0, 5)
        .map((item, index) => getQuotaItem(item, 'large', index))}
    </div>,
  );
  return quotaDom;
};

const data = [
  {
    name: '第4季度累计销售额',
    value: 1074000000,
    unit: '元',
    percentage: 3,
  },
  {
    name: '销售计划达成率',
    value: 81.21,
    unit: '%',
  },
  {
    name: '2019年累计销售额',
    value: 2374000000,
    unit: '元',
    percentage: 3,
  },
  {
    name: '销售计划达成率',
    value: 81.21,
    unit: '%',
  },
];

const ScreenCenter = () => {
  return (
    <div className={styles.centerScreenWrap}>
      <div className={styles.quotas}>{renderQuota(data)}</div>
      <div className={styles.map}>
        <CenterMap />
      </div>
      <div className={styles.warning}>
        <BlockWithTitle title="营销监控预警">
          <SalesWarning />
        </BlockWithTitle>
      </div>
    </div>
  );
};

export default ScreenCenter;
