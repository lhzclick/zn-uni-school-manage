import React, { useState, useEffect } from 'react';
import styles from './index.less';
import { DatePicker, Button, Select, Input, Table } from 'antd';
import CardCommon from '@/compontents/cardCommon';
import icon_notice from '@/common/img/icon_notice.png';
import icon_export from '@/common/img/icon_export.png';
import xlsx from 'xlsx';
import lhTool from 'lh-tool';

const { RangePicker } = DatePicker;
const { Option } = Select;

//  组件类
const Notice = () => {
  const [notice, setNotice] = useState('系统通知：系统维护公告 2020-05-18');
  return (
    <CardCommon>
      <div className={styles.notice}>
        <img src={icon_notice} alt="" />
        <span>{notice}</span>
      </div>
    </CardCommon>
  );
};
const DataChange = () => {
  return (
    <CardCommon>
      <div className={styles.dataChange}>
        <span>变化日期：</span>
        <RangePicker />
      </div>
    </CardCommon>
  );
};

const RangeCard = () => {
  const [rangeList] = useState([
    {
      range: 7,
      num: 190,
    },
    {
      range: 6,
      num: 190,
    },
    {
      range: 5,
      num: 190,
    },
    {
      range: 4,
      num: 190,
    },
    {
      range: 3,
      num: 190,
    },
    {
      range: 2,
      num: 190,
    },
    {
      range: 1,
      num: 190,
    },
  ]);
  const colorFormat = (v: Number) => {
    let color;
    switch (v) {
      case 7:
        color = '#E10909';
        break;
      case 6:
        color = '#FE7433';
        break;
      case 5:
        color = '#FFAD2A';
        break;
      case 4:
        color = '#FFE700';
        break;
      case 3:
        color = '#B7FB36';
        break;
      case 2:
        color = '#52D41F';
        break;
      case 1:
        color = '#27B114';
        break;
      default:
        break;
    }
    return color;
  };
  return (
    <ul className={styles.rangeCard}>
      {rangeList.map((item, i) => (
        <li key={i}>
          <div style={{ background: colorFormat(item.range) }}></div>
          <div>{item.num}</div>
          <div>风险等级Q{item.range}</div>
        </li>
      ))}
    </ul>
  );
};

const handleChange = () => {};

const FilterSearch = () => {
  return (
    <CardCommon>
      <div className={styles.filterSearch}>
        <div className={styles.filter}>
          <div className={styles.filterCont}>
            <span>综合评级：</span>
            <Select
              className={styles.filterTool}
              defaultValue="lucy"
              onChange={handleChange}
              mode="multiple"
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className={styles.filterCont}>
            <span>证券代码：</span>
            <Input
              className={styles.filterTool}
              placeholder="证券代码/名称/拼音"
            />
          </div>
          <div className={styles.filterCont}>
            <span>交易市场：</span>
            <Select
              className={styles.filterTool}
              defaultValue="lucy"
              onChange={handleChange}
              mode="multiple"
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
        </div>
        <div className={styles.search}>
          <Button type="primary">查询</Button>
        </div>
      </div>
    </CardCommon>
  );
};

const TableResult = (props: any) => {
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
  const toDetail = (row: any) => {
    props.parent.history.push({
      pathname: '/index/detail',
      state: {
        ...row,
      },
    });
  };
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
        <div
          className={styles.tableHandle}
          onClick={() => {
            toDetail(record);
          }}
        >
          {text}
        </div>
      ),
    },
    {
      title: '证券名称',
      dataIndex: 'address',
      key: 'address',
      render: (text: any, record: any) => (
        <div
          className={styles.tableHandle}
          onClick={() => {
            toDetail(record);
          }}
        >
          {text}
        </div>
      ),
    },
  ];
  useEffect(() => {
    // setDataSource([])
  });
  return (
    <CardCommon>
      <div className={styles.tableResult}>
        <div className={styles.tableTop}>
          <div className={styles.time}>最新更新时间：2020-06-24 08:30:00</div>
          <div className={styles.tool}>
            <div className={styles.total}>总计 1,004 条数据</div>
            <div
              onClick={() => {
                lhTool.excelDownAnt('#table', '表格1', xlsx);
              }}
              className={styles.downland}
            >
              <img src={icon_export} alt="" />
              <span>导出数据</span>
            </div>
          </div>
        </div>
        <Table id="table" dataSource={dataSource} columns={columns} />
      </div>
    </CardCommon>
  );
};

export default (props: any) => {
  return (
    <div>
      <Notice />
      <DataChange />
      <RangeCard />
      <FilterSearch />
      <TableResult parent={props} />
    </div>
  );
};
