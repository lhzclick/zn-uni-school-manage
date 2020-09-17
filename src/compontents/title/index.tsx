import React from 'react';
import styles from './index.less';

export default (props: any) => {
  return (
    <div className={styles.wrap}>
      <span></span>
      <span>{props.children}</span>
    </div>
  );
};
