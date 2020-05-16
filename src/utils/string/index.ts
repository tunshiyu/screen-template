type valueType = object | number | string;

export default {
  /**
   * 为小于10的数字在前面补零。如9补零后为09
   * @param val
   */
  fillZero(val: number | string) {
    if (typeof val === 'number' && val >= 10) {
      return val;
    }
    return `0${val}`;
  },

  /**
   * 用于字符长度超过指定个数自动截取并添加...
   */
  textEllipsis(text: string, length: number) {
    if (text.length > length && length > 0) {
      return `${text.substring(0, length)}...`;
    }
    return text;
  },

  /**
   * 获取指定分隔符点后面的最后字符串
   * @param (sourceStr splitStr) 源字符串 裁剪字符节点
   * @returns {string} 最后一个裁剪字符后面的字符串
   */
  getLastSubstring(sourceStr = '', splitStr = '') {
    return sourceStr.substring(
      sourceStr.lastIndexOf(splitStr) + splitStr.length,
      sourceStr.length,
    );
  },
  isDot(num: string | number) {
    return num.toString().indexOf('.') !== -1;
  },

  /**
   * 值格式化为string
   * @param value
   */
  valueToString(value: valueType | valueType[]) {
    if (typeof value === 'string') {
      return value;
    }
    return JSON.stringify(value);
  },

  /**
   * @功能描述: 复制文本
   * @参数: text 复制对象的内容
   * @返回值:
   */
  copyText(text: string) {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', text);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  },

  fixDecimalPlace(num: number, fixNum = 2) {
    return ('' + num).includes('.') ? num.toFixed(fixNum) : num;
  },
  /**
   * 返回value 与 unit区分开
   * @param value
   */
  valueFormatWithUnit(value: number | string) {
    let valueStr: number | string = value;
    let unit = '';
    if (value >= 10000 && value < 100000000) {
      valueStr = this.fixDecimalPlace(+value / 10000);
      unit = '万';
    }
    if (value >= 100000000) {
      valueStr = this.fixDecimalPlace(+value / 100000000);
      unit = '亿';
    }
    // 后端提出,如果小于一万，四舍五入两位小数
    if (value < 10000 && this.isDot(value)) valueStr = Number(value).toFixed(2);
    return { value: valueStr, unit };
  },

  /** 根据数的大小进行单位转换 */
  valueFormat(value: number | string) {
    const prefix = Number(value) < 0 ? '-' : '';
    const valueItem = this.valueFormatWithUnit(
      Math.abs(Number(value)) || value,
    );
    return `${prefix + valueItem.value}${valueItem.unit}`;
  },
};
