/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2020-05-16 14:33:48
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-28 14:50:06
 */

import { useState } from 'react';
import { useRequest } from 'umi';

export default () => {
  const [value, setValue] = useState<string>();
  const [, setEnums] = useState();

  const { data: comboData = { barData: [], lineData: [] } } = useRequest(
    '/comboData',
  );

  return {
    comboData,
    value,
    setValue,
    setEnums,
  };
};
