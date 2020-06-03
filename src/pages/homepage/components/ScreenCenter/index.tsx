/*
 * @文件描述: 中间大屏地图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-02 14:28:45
 */
import React from 'react';
import styles from './index.module.less';
import CenterMap from './components/CenterMap';
import SalesWarning from './components/SalesWarning';
import BlockWithTitle from '@/components/BlockWithTitle';
import CustomQuota from '@/components/CustomQuota';
import { QuotaData } from '@/interfaces/common';
import { rem } from '@/utils/rem';
import { Row, Col } from 'antd';

const getQuotaItem = (
  { name, value, unit, percentage }: QuotaData,
  size: 'small' | 'large' | 'normal',
  index: number,
) => {
  return (
    <Col xs={{ span: 12 }} xl={{ span: 6 }}>
      <CustomQuota
        key={name}
        // 第二个和第四个百分比需要小数点后截取两位
        value={
          index === 1 || index === 3 ? Math.floor(value * 100) / 100 : value
        }
        label={name}
        unitStyle={{ marginTop: rem(4) }}
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
    </Col>
  );
};

const renderQuota = (list: QuotaData[]) => {
  const quotaDom = [];
  quotaDom.push(
    <Row key="line1">
      {list
        .slice(0, 5)
        .map((item, index) => getQuotaItem(item, 'large', index))}
    </Row>,
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
    <Row className={styles.centerScreenWrap}>
      <Col span={22} className={styles.quotas}>
        {renderQuota(data)}
      </Col>
      <Col span={24} className={styles.map}>
        <CenterMap />
      </Col>
      <Col span={22} className={styles.warning}>
        <BlockWithTitle title="营销监控预警">
          <SalesWarning />
        </BlockWithTitle>
      </Col>
    </Row>
  );
};

export default ScreenCenter;
