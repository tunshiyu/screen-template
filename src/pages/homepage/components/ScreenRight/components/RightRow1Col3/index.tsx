/*
 * @文件描述: 评分
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-21 18:56:32
 */
import React from 'react';
import { ComBlock, ComCard, IconsScoreChart } from '@td-design/charts';
import styles from './index.module.less';
import { standardsData, scoreData } from '@/pages/homepage/data';

const LeftRow2Col2 = () => {
  return (
    <ComBlock className={styles.block}>
      <ComCard title="评分" headerStyle={{ height: 16 }}>
        <IconsScoreChart standards={standardsData} scores={scoreData} />
      </ComCard>
    </ComBlock>
  );
};

export default LeftRow2Col2;
