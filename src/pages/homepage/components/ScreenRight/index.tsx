/*
 * @文件描述: 右边大屏图表
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-03 10:07:20
 */
import React from 'react';
import styles from './index.module.less';
import RightRow1Col1 from './components/RightRow1Col1';
import RightRow1Col2 from './components/RightRow1Col2';
import RightRow2Col1 from './components/RightRow2Col1';
import RightRow1Col3 from './components/RightRow1Col3';
import RightRow2Col2 from './components/RightRow2Col2';
import RightRow3Col1 from './components/RightRow3Col1';
import RightRow3Col2 from './components/RightRow3Col2';
import RightRow4Col1 from './components/RightRow4Col1';
import RightRow4Col2 from './components/RightRow4Col2';
import RightRow4Col3 from './components/RightRow4Col3';
import { Row, Col } from 'antd';

const ScreenRight = () => {
  return (
    <div className={styles.rightScreen}>
      {/** 第一行 */}
      <Row>
        <Col xs={24} md={8}>
          <RightRow1Col1 />
        </Col>
        <Col xs={24} md={8}>
          <RightRow1Col2 />
        </Col>
        <Col xs={24} md={8}>
          <RightRow1Col3 />
        </Col>
      </Row>

      {/** 第二行 */}
      <Row>
        <Col xs={24} md={12}>
          <RightRow2Col1 />
        </Col>
        <Col xs={24} md={12}>
          <RightRow2Col2 />
        </Col>
      </Row>

      {/** 第三行 */}
      <Row>
        <Col xs={24} md={12}>
          <RightRow3Col1 />
        </Col>
        <Col xs={24} md={12}>
          <RightRow3Col2 />
        </Col>
      </Row>

      {/** 第四行 */}
      <Row>
        <Col xs={24} md={6}>
          <RightRow4Col1 />
        </Col>
        <Col xs={24} md={6}>
          <RightRow4Col2 />
        </Col>
        <Col xs={24} md={12}>
          <RightRow4Col3 />
        </Col>
      </Row>
    </div>
  );
};

export default ScreenRight;
