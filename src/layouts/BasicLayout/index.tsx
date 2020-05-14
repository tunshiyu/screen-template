import React from 'react';
import { IRouteComponentProps } from 'umi';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

export default function BasicLayout(props: IRouteComponentProps) {
  return <ConfigProvider locale={zhCN}>{props.children}</ConfigProvider>;
}
