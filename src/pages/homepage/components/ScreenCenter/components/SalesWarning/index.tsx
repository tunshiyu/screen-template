import React from 'react';
import { CustomTable, ColumnsProps } from '@td-design/charts';

import { warnData } from '@/pages/homepage/data';

const SalesWarning: React.FC = () => {
  const columns: ColumnsProps[] = [
    { title: '日期', dataIndex: 'datatime', key: 'datatime', width: 16 },
    { title: '报警类型', dataIndex: 'typeDesc', key: 'type', width: 14 },
    { title: '详细内容', dataIndex: 'content', key: 'content', width: 56 },
  ];

  return <CustomTable columns={columns} dataSource={warnData} enabledScroll />;
};

export default SalesWarning;
