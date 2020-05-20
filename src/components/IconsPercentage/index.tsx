/*
 * @文件描述: 由多个icon排列组成的百分比组件
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2019-11-20 14:17:11
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-20 11:21:25
 */
import React, { useRef, useEffect, useState } from 'react';
import Iconfont from '@/components/Iconfont';
import styles from './index.module.less';

interface IconsPercentageProps {
  percentage: number;
  // 标准截断虚线的%
  standard?: number;
  number?: number; // icon 的总数量 默认16
  icon?: string;
  // icon color
  color?: string;
}

const IconsPercentage: React.FC<IconsPercentageProps> = props => {
  const {
    percentage,
    number = 16,
    icon = 'iconmateriel',
    color = '#45d533',
    standard,
  } = props;
  // TODO:IconsPercentage宽度为270 - 24时(270为blockCom宽度,24为padiing*2)，fontSize对应15，是完美的效果。其他宽度响应式计算。
  const baseWidth = 270 - 24;
  const [currentWidth, setCurrentWidth] = useState(baseWidth);
  const myRef = useRef<HTMLDivElement>(null);
  const fontSize: number = (currentWidth / baseWidth) * 15;
  const width: number = percentage * 0.01 * number * fontSize;

  useEffect(() => {
    const current = myRef.current ? myRef.current['clientWidth'] : baseWidth;
    // 响应式存在10px误差
    setCurrentWidth(current + 10);
  }, []);

  const renderIcons = (color: string) =>
    Array.from({ length: number }, (_v, index) => (
      <Iconfont style={{ color, fontSize }} key={index} name={icon} />
    ));

  return (
    <div className={styles.container} ref={myRef}>
      <div className={styles.iconItem}>{renderIcons('#405069')}</div>
      <div
        style={{ overflow: 'hidden', width: `${width}px` }}
        className={styles.iconItem}
      >
        {renderIcons(color)}
      </div>
      <div
        className={styles.solid}
        style={{
          left: `${Number(standard)}%`,
          display: standard ? 'block' : 'none',
        }}
      />
    </div>
  );
};

export default IconsPercentage;
