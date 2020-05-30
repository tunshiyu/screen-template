/* eslint-disable no-use-before-define */
/*
 * @文件描述: 折线图
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-29 15:42:46
 */
import React, { useState } from 'react';
import {
  ChartDom,
  createLinePlot,
  createColumnLinePlot,
  TitleLink,
} from '@td-design/charts';
import { barData as barData1 } from '@/pages/homepage/data';
import styles from '../../index.module.less';
import { useModel } from 'umi';
import useSwitchKey from '@/hooks/useSwitchKey';

const Row3Col1 = () => {
  const { comboData } = useModel('home');
  const { barData, lineData } = comboData;
  const [name, setname] = useState<string>('');
  const [isDefault, switchKey] = useSwitchKey();

  const defaultDom = (
    <ChartDom
      title="折线图"
      className={styles.block}
      getDom={(dom: HTMLElement) => {
        createLinePlot({
          dom,
          data: barData1,
          config: {
            xField: 'date',
            yField: 'value',
            seriesField: 'type',
            padding: [20, 50, 40, 50],
            events: {
              onPointClick: async ev => {
                setname(ev.data.date + '-' + ev.data.type);
                switchKey('detail');
              },
            },
          },
        });
      }}
    />
  );

  const detailDom = (
    <ChartDom
      getDom={(dom: HTMLElement) => {
        createColumnLinePlot({
          dom,
          data: [barData, lineData],
          config: {
            xField: 'time',
            yField: ['value', 'count'],
          },
        });
      }}
      title={
        <TitleLink
          onClick={() => {
            switchKey('default');
          }}
          title={name}
        />
      }
      className={styles.block}
    />
  );

  return (
    <>
      {isDefault && defaultDom}
      {!isDefault && detailDom}
    </>
  );
};

export default Row3Col1;
