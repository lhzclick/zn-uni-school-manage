import React, { useState, useEffect, useReducer } from 'react';
import { Redirect } from 'react-router';
import styles from './index.less';
import { Layout, ConfigProvider } from 'antd';
import HeaderCommon from '@/compontents/header';
import SiderBar from '@/compontents/siderBar';
import zhCN from 'antd/es/locale/zh_CN';

const { Content } = Layout;

export default (props: any) => {
  const isLogin = sessionStorage.userInfo;
  return (
    <div>
      <ConfigProvider locale={zhCN}>
        <Layout>
          <HeaderCommon parents={props} />
          <Content className={styles.contWrap}>
            <Layout className="site-layout-background">
              <SiderBar parents={props} />
              <Content className={styles.content}>
                {isLogin ? (
                  <div>{props.children}</div>
                ) : (
                  <Redirect to="/login" />
                )}
              </Content>
            </Layout>
          </Content>
        </Layout>
      </ConfigProvider>
    </div>
  );
};
