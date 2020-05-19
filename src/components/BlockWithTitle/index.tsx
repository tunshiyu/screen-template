/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2019-11-02 15:26:46
 * @LastEditors: 廖军
 * @LastEditTime: 2019-11-21 16:10:19
 */
import React from 'react';
import styles from './index.module.less';
import classnames from 'classnames';

interface BlockWithTitleProps {
  title: string | React.ReactNode;
  className?: string;
}

const BlockWithTitle: React.FC<BlockWithTitleProps> = props => {
  const { title, className = '' } = props;

  return (
    <div className={classnames(styles['container'], className)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.children}>{props.children}</div>
    </div>
  );
};

export default BlockWithTitle;
