/*
 * @文件描述: 可视化大屏模板
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-01 15:46:55
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
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 7 }}
        >
          <ScreenLeft />
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 10 }}
        >
          <ScreenCenter />
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 7 }}
        >
          <ScreenRight />
        </Col>
      </Row>
    </div>
  );
};

export default Homepage;
