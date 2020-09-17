import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { Breadcrumb } from 'antd';
import CardCommon from '@/compontents/cardCommon';
import Range from './range';
import Change from './change';

export default (props: any) => {
  useEffect(() => {});
  const toIndex = () => {
    props.history.push('/index');
  };
  return (
    <div>
      <CardCommon>
        <div className={styles.nav}>
          <Breadcrumb>
            <Breadcrumb.Item
              onClick={() => {
                toIndex();
              }}
            >
              风险等级变化
            </Breadcrumb.Item>
            <Breadcrumb.Item>个股详情</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </CardCommon>
      <Range parent={props} />
      <Change />
    </div>
  );
};
