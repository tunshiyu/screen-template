/*
 * @文件描述: 左边大屏图表
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-03 10:07:48
 */
import React from 'react';
import styles from './index.module.less';
import LeftRow1Col1 from './components/LeftRow1Col1';
import LeftRow1Col2 from './components/LeftRow1Col2';
import LeftRow2Col1 from './components/LeftRow2Col1';
import LeftRow2Col2 from './components/LeftRow2Col2';
import LeftRow2Col3 from './components/LeftRow2Col3';
import LeftRow3 from './components/LeftRow3';
import { Row, Col } from 'antd';

const ScreenLeft = () => {
  return (
    <div className={styles.leftScreen}>
      <Row>
        <Col xs={24} md={12}>
          <LeftRow1Col1 />
        </Col>
        <Col xs={24} md={12}>
          <LeftRow1Col2 />
        </Col>
      </Row>
      {/** 第二行 */}
      <Row>
        <Col xs={24} md={8}>
          <LeftRow2Col1 />
        </Col>
        <Col xs={24} md={8}>
          <LeftRow2Col2 />
        </Col>
        <Col xs={24} md={8}>
          <LeftRow2Col3 />
        </Col>
      </Row>
      {/** 第三行 */}
      <Row>
        <Col xs={24} md={24}>
          <LeftRow3 />
        </Col>
      </Row>
    </div>
  );
};

export default ScreenLeft;
