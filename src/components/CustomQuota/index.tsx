/*
 * @文件描述: 自定义指标
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2019-11-05 11:31:30
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-02 14:30:01
 */
import React, { CSSProperties } from 'react';
import { valueFormatWithUnit } from '@/utils/charts/chart-option-utils';
import fontStyles from './index.module.less';

type SizeType = 'large' | 'normal' | 'small' | 'special';

export interface CustomQuotaProps {
  label?: string | JSX.Element;
  value: number | string;
  prefix?: string | number | JSX.Element;
  unit?: string | JSX.Element;
  size?: SizeType;
  align?: 'horizontal' | 'vertical';
  style?: CSSProperties;
  quotaItemColor?: string;
  labelStyle?: CSSProperties;
  prefixStyle?: CSSProperties;
  valueStyle?: CSSProperties;
  unitStyle?: CSSProperties;
  quotaStyle?: CSSProperties;
  isToLocaleString?: boolean;
}

const CustomQuota: React.FC<CustomQuotaProps> = props => {
  const {
    label,
    value,
    prefix,
    unit,
    size,
    align,
    style,
    labelStyle,
    quotaItemColor,
    prefixStyle,
    valueStyle,
    unitStyle,
    quotaStyle,
    isToLocaleString,
    children,
  } = props;

  const getQuotaStyle = () => {
    let styles: CSSProperties = {};
    switch (align) {
      case 'horizontal':
        styles = { display: 'flex' };
        break;
      case 'vertical':
        styles = {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        };
        break;
      default:
    }
    return { ...styles, ...style };
  };

  const getItemStyles = () => {
    const quotaColor = quotaItemColor || '#00BBFF';
    const label: CSSProperties = {
      color: 'rgba(255, 255, 255, 0.8)',
      letterSpacing: 2,
      textAlign: 'center',
      fontFamily: 'AlibabaPuHuiTi-Regular',
      whiteSpace: 'nowrap',
      ...labelStyle,
    };
    const prefix: CSSProperties = {
      color: quotaColor,
      ...prefixStyle,
    };
    const value: CSSProperties = {
      color: quotaColor,
      fontFamily: 'PUTHIAfont',
      marginRight: 7,
      paddingLeft: size === 'special' ? 26 : 0,
      ...valueStyle,
    };
    const unit: CSSProperties = {
      color: quotaColor,
      ...unitStyle,
    };
    return { label, prefix, value, unit };
  };

  const styles = getItemStyles();
  const valueItem = valueFormatWithUnit(value);

  return (
    <div style={getQuotaStyle()} className={fontStyles[size!]}>
      {label && (
        <div style={styles.label} className={fontStyles.label}>
          {label}
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'center', ...quotaStyle }}>
        {prefix && (
          <div style={styles.prefix} className={fontStyles.prefix}>
            {prefix}
          </div>
        )}
        <div style={styles.value} className={fontStyles.value}>
          {isToLocaleString
            ? valueItem.value?.toLocaleString()
            : valueItem.value}
        </div>
        <div
          style={{ display: 'flex', ...styles.unit }}
          className={fontStyles.unit}
        >
          {valueItem.unit}
          {unit || ''}
        </div>
      </div>
      {children}
    </div>
  );
};

CustomQuota.defaultProps = {
  label: '',
  prefix: '',
  unit: '',
  size: 'normal',
  align: 'horizontal',
  style: {},
  prefixStyle: {},
  valueStyle: {},
  unitStyle: {},
  labelStyle: {},
  quotaStyle: {},
  isToLocaleString: true,
};

export default CustomQuota;
