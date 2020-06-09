/*
 * @文件描述: 右边大屏图表
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-09 09:40:24
 */
import React from 'react';
import styles from './index.module.less';
import Row1Col1 from './components/Row1Col1';
import Row2Col1 from './components/Row2Col1';
import Row3Col1 from './components/Row3Col1';
import Row4Col1 from './components/Row4Col1';
import Row4Col2 from './components/Row4Col2';
import { Row, Col } from 'antd';

const ScreenRight = () => {
  return (
    <Row className={styles.rightScreen}>
      <Col span={24}>
        <Row1Col1 />
      </Col>
      <Col span={24}>
        <Row2Col1 />
      </Col>
      <Col span={24}>
        <Row3Col1 />
      </Col>
      <Col xs={24} sm={12}>
        <Row4Col1 />
      </Col>
      <Col xs={24} sm={12}>
        <Row4Col2 />
      </Col>
    </Row>
  );
};

export default ScreenRight;
