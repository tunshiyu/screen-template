/*
 * @文件描述: 可视化大屏模板
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-03 10:06:17
 */
import React from 'react';
import ScreenHeader from './components/ScreenHeader';
import ScreenLeft from './components/ScreenLeft';
import ScreenCenter from './components/ScreenCenter';
import ScreenRight from './components/ScreenRight';
import styles from './index.module.less';
import { Row, Col } from 'antd';

const Homepage = () => {
  return (
    <div className={styles.container}>
      <ScreenHeader />
      <Row>
        <Col xl={8} md={24} xs={24}>
          <ScreenLeft />
        </Col>
        <Col xl={8} md={24} xs={24}>
          <ScreenCenter />
        </Col>
        <Col xl={8} md={24} xs={24}>
          <ScreenRight />
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
