import React, { useState, useEffect } from 'react';
import styles from './index.less';
import CardCommon from '@/compontents/cardCommon';
import BackBtn from '@/compontents/backBtn';
import Title from '@/compontents/title';
import Circle from '@/compontents/circle';
import icon_detail_r from '@/common/img/icon_detail_r.png';
import { Table } from 'antd';

export default (props: any) => {
  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '3',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '4',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ]);
  const columns = [
    {
      title: '序号',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '证券代码',
      dataIndex: 'age',
      key: 'age',
      render: (text: any, record: any) => (
        <div className={styles.tableHandle}>{text}</div>
      ),
    },
    {
      title: '证券名称',
      dataIndex: 'address',
      key: 'address',
      render: (text: any, record: any) => (
        <div className={styles.tableHandle}>{text}</div>
      ),
    },
  ];
  useEffect(() => {});
  const toIndex = () => {
    // props.history.push('/index')
  };
  return (
    <div>
      <CardCommon>
        <div className={styles.range}>
          <BackBtn parent={props.parent} toPath="/index" />
          <div className={styles.titleCode}>
            <span>亚泰集团</span>
            <span>600881</span>
            <img src={icon_detail_r} alt="" />
            <span>股票行业：水泥制造</span>
          </div>
          <Title>风险等级</Title>
          <div className={styles.info}>
            技术监控：低风险；负面信息评级：高风险；公司质地评级：质地中；特别事件：低风险；
          </div>
          <div className={styles.chartW}>
            <div className={styles.circle}>
              <Circle range={1} />
            </div>
            <div className={styles.table}>
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
              />
            </div>
          </div>
        </div>
      </CardCommon>
    </div>
  );
};
