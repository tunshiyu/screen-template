/*
 * @文件描述: 饼图组合
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2020-05-14 15:54:36
 * @LastEditors: 于效仟
 * @LastEditTime: 2020-06-02 16:55:06
 */
import React from 'react';
import { ComBlock, ComCard } from '@td-design/charts';
import styles from './index.module.less';
import LeftRow3Col1 from '../LeftRow3Col1';
import LeftRow3Col2 from '../LeftRow3Col2';
import { Row, Col } from 'antd';

const LeftRow3 = () => {
  return (
    <ComBlock>
      <ComCard title="饼图">
        <Row>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 6 }}
            className={styles.pieCardWrap}
          >
            <LeftRow3Col1 />
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 6 }}
            className={styles.pieCardWrap}
          >
            <LeftRow3Col2 />
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 6 }}
            className={styles.pieCardWrap}
          >
            <LeftRow3Col2 />
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 6 }}
            className={styles.pieCardWrap}
          >
            <LeftRow3Col2 />
          </Col>
        </Row>
      </ComCard>
    </ComBlock>
  );
};

export default LeftRow3;
