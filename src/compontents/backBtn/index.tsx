import React from 'react';
import styles from './index.less';
import { LeftOutlined } from '@ant-design/icons';

export default (props: any) => {
  const toPath = () => {
    props.parent.history.push(props.toPath);
  };
  return (
    <div className={styles.back}>
      <div
        className={styles.btn}
        onClick={() => {
          toPath();
        }}
      >
        <LeftOutlined />
        <span className={styles.text}>返回</span>
      </div>
    </div>
  );
};
