/*
 * @文件描述: SwitchKey切换
 * @公司: thundersdata
 * @作者: 于效仟
 * @Date: 2019-11-21 15:25:38
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-28 18:48:35
 */
import { useState } from 'react';

type KeyType = 'default' | 'detail';

export default function useSwitchKey() {
  const [key, switchKey] = useState<KeyType>('default');
  const isDefault = key === 'default';

  return [isDefault, switchKey] as const;
}
