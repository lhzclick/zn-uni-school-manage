import React, { useState, useEffect, useReducer } from 'react';
import styles from './index.less';
import { Layout, Menu, Input, Dropdown } from 'antd';
import { UserOutlined, LogoutOutlined, DownOutlined } from '@ant-design/icons';
import login_icon_tlgb from '@/common/img/login_icon_tlgb.png';
import nav_icon_search from '@/common/img/nav_icon_search.png';

const { Header, Content, Sider } = Layout;
const { Item } = Menu;

export default (props: any) => {
  const [arr] = useState([1, 2, 3, 4, 5, 6]);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    document.addEventListener('click', e => {
      setIsShow(false);
    });
  });
  const codeChange = () => {
    setIsShow(true);
  };
  const loginOut = () => {
    sessionStorage.removeItem('userInfo');
    props.parents.history.push('/login');
  };
  const menu = (
    <Menu
      onClick={() => {
        loginOut();
      }}
    >
      <Menu.Divider />
      <Item key="logout">
        <LogoutOutlined />
        退出登录
      </Item>
    </Menu>
  );
  const loginName = sessionStorage.userInfo
    ? JSON.parse(sessionStorage.userInfo).loginName
    : '';
  return (
    <Header className={styles.header}>
      <div className={styles.left}>
        <img className={styles.logo} src={login_icon_tlgb} alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.search}>
          <Input
            onChange={() => {
              codeChange();
            }}
            className={styles.input}
            placeholder="输入证券名称/拼音/代码"
            suffix={<img src={nav_icon_search} alt="" />}
          />
          {isShow ? (
            <div className={styles.cont}>
              {arr.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className={styles.user}>
          <Dropdown overlay={menu} trigger={['click']}>
            <div className={styles.useIco}>
              <UserOutlined className={styles.useIco1} />
              <span className={styles.useIco2}>{loginName}</span>
              <DownOutlined className={styles.useIco3} />
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};
