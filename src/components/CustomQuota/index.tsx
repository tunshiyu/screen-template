/*
 * @文件描述: 自定义指标
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2019-11-05 11:31:30
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-18 13:55:50
 */
import React, { CSSProperties } from 'react';
import { valueFormatWithUnit } from '@/utils/charts/chart-option-utils';

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

// 整体行高定义
enum LineHeightType {
  large = '36px',
  normal = '28px',
  small = '24px',
}

// 不同尺寸对应的标签、值、前缀的样式配置
const quotaFontSize = {
  large: {
    label: {
      fontSize: 14,
    },
    prefix: {
      fontSize: 28,
    },
    value: {
      fontSize: 36,
    },
    unit: {
      fontSize: 16,
    },
  },
  normal: {
    label: {
      fontSize: 14,
    },
    prefix: {
      fontSize: 24,
    },
    value: {
      fontSize: 28,
    },
    unit: {
      fontSize: 12,
    },
  },
  small: {
    label: {
      fontSize: 10,
    },
    prefix: {
      fontSize: 14,
    },
    value: {
      fontSize: 18,
    },
    unit: {
      fontSize: 10,
    },
  },
  special: {
    label: {
      fontSize: 14,
    },
    prefix: {
      fontSize: 24,
    },
    value: {
      fontSize: 28,
    },
    unit: {
      fontSize: 12,
    },
  },
};

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
    return { ...styles, lineHeight: LineHeightType[size!], ...style };
  };

  const getItemStyles = () => {
    const baseStyleWithSize = quotaFontSize[size!];
    const quotaColor = quotaItemColor || '#00BBFF';
    const label: CSSProperties = {
      color: 'rgba(255, 255, 255, 0.8)',
      letterSpacing: 2,
      textAlign: 'center',
      fontFamily: 'AlibabaPuHuiTi-Regular',
      ...baseStyleWithSize.label,
      ...labelStyle,
    };
    const prefix: CSSProperties = {
      color: quotaColor,
      ...baseStyleWithSize.prefix,
      ...prefixStyle,
    };
    const value: CSSProperties = {
      color: quotaColor,
      fontFamily: 'PUTHIAfont',
      marginRight: 7,
      paddingLeft: size === 'special' ? 26 : 0,

      ...baseStyleWithSize.value,
      ...valueStyle,
    };
    const unit: CSSProperties = {
      color: quotaColor,

      ...baseStyleWithSize.unit,
      ...unitStyle,
    };
    return { label, prefix, value, unit };
  };

  const styles = getItemStyles();
  const valueItem = valueFormatWithUnit(value);

  return (
    <div style={getQuotaStyle()}>
      {label && <div style={styles.label}>{label}</div>}
      <div style={{ display: 'flex', justifyContent: 'center', ...quotaStyle }}>
        {prefix && <div style={styles.prefix}>{prefix}</div>}
        <div style={styles.value}>
          {isToLocaleString
            ? valueItem.value?.toLocaleString()
            : valueItem.value}
        </div>
        <div style={{ display: 'flex', ...styles.unit }}>
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
