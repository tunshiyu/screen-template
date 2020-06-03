/*
 * @文件描述: 左边大屏图表
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-05-30 14:57:53
 */
import React from 'react';
import styles from './index.module.less';
import Row1Col1 from './components/Row1Col1';
import Row2Col1 from './components/Row2Col1';
import Row3Col1 from './components/Row3Col1';
import Row4Col1 from './components/Row4Col1';
import Row4Col2 from './components/Row4Col2';
import { Row, Col } from 'antd';

const ScreenLeft = () => {
  return (
    <div className={styles.leftScreen}>
      <Row>
        <Col span={24}>
          <Row1Col1 />
        </Col>
        <Col span={24}>
          <Row2Col1 />
        </Col>
        <Col span={24}>
          <Row3Col1 />
        </Col>
        <Col span={12} xs={{ span: 24 }} sm={{ span: 12 }}>
          <Row4Col1 />
        </Col>
        <Col span={12} xs={{ span: 24 }} sm={{ span: 11, offset: 1 }}>
          <Row4Col2 />
        </Col>
      </Row>
    </div>
  );
};

export default ScreenLeft;
