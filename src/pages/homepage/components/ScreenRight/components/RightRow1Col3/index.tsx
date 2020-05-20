/*
 * @文件描述: 条形图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-20 11:24:18
 */
import React from 'react';
import { ComBlock, ComCard } from '@td-design/charts';
import styles from './index.module.less';
import IconsPercentage from '@/components/IconsPercentage';
import { standardsDatas, scoreDatas } from '@/pages/homepage/data';

const LeftRow2Col2 = () => {
  const renderPercentageItem = () =>
    scoreDatas.map(({ name, value, unit }, index) => (
      <div key={name}>
        <div className={styles.percentageItem}>
          <div className={styles.label}>{name}</div>
          <div className={styles.quota}>
            {value}
            {unit}
          </div>
        </div>
        <IconsPercentage percentage={value} standard={standardsDatas[index]} />
      </div>
    ));

  return (
    <ComBlock className={styles.block}>
      <ComCard title="评分">
        <div className={styles.chart}>{renderPercentageItem()}</div>
      </ComCard>
    </ComBlock>
  );
};

export default LeftRow2Col2;
