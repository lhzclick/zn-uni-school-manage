import React, { useState, useEffect, useReducer } from 'react';
import styles from './index.less';
import { Layout, Menu } from 'antd';
import icon_menu01 from '@/common/img/icon_menu01.png';
const { Sider } = Layout;

export default (props: any) => {
  const toPath = (e: String) => {
    props.parents.history.push(e);
  };
  return (
    <Sider className="site-layout-background" width={220}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', paddingTop: 10 }}
      >
        <Menu.Item
          onClick={() => {
            toPath('/index');
          }}
          icon={<img className={styles.icoBar} src={icon_menu01} alt="" />}
          key="1"
        >
          风险等级变化
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
