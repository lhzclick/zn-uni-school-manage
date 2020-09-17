import React, { useState, useEffect } from 'react';
import styles from './index.less';
import CardCommon from '@/compontents/cardCommon';
import { DatePicker } from 'antd';
import { Line } from '@ant-design/charts';
import Title from '@/compontents/title';
import icon_q1 from '@/common/img/icon_q1.png';
import icon_q2 from '@/common/img/icon_q2.png';
import icon_q3 from '@/common/img/icon_q3.png';
import icon_q4 from '@/common/img/icon_q4.png';
import icon_q5 from '@/common/img/icon_q5.png';
import icon_q6 from '@/common/img/icon_q6.png';
import icon_q7 from '@/common/img/icon_q7.png';

const { RangePicker } = DatePicker;

const LineChange: React.FC = () => {
  const [data, setData] = useState([
    {
      date: '2019/01/01',
      value: 3,
    },
  ]);
  const [a, setA] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    const res = [
      {
        date: '2019/01/01',
        value: 3,
      },
      {
        date: '2019/01/02',
        value: 4,
      },
      {
        date: '2019-03-01',
        value: 3.5,
      },
      {
        date: '2019-04-01',
        value: 5,
      },
      {
        date: '2019-05-01',
        value: 4.9,
      },
      {
        date: '2019-06-01',
        value: 6,
      },
      {
        date: '2019-07-01',
        value: 7,
      },
      {
        date: '2019-08-01',
        value: 9,
      },
      {
        date: '2019-09-01',
        value: 7,
      },
      {
        date: '2019-10-01',
        value: 13,
      },
      {
        date: '2019-11-01',
        value: 13,
      },
      {
        date: '2019-12-01',
        value: 13,
      },
    ];
    setData(res);
  };

  const config: any = {
    data,
    xField: 'date',
    yField: 'value',
    lineStyle: {
      stroke: '#278CFF',
    },
    yAxis: {
      title: {
        visible: true,
        text: '收盘价',
      },
      line: {
        visible: true,
      },
      grid: {
        visible: false,
      },
    },
    tooltip: {
      crosshairs: {
        type: 'xy',
      },
      custom: {
        customContent: (title: any, items: any) => {
          return (
            <div style={{ padding: '16px 8px' }}>
              <p>日期：{title}</p>
              <p style={{ margin: 0 }}>
                收盘价：{items[0] && items[0].data.value}
              </p>
            </div>
          );
        },
      },
    },
    markerPoints: [
      {
        visible: true,
        data: [{ date: '2019-09-01' }],
        size: 24,
        offsetY: -5,
        symbol: `image://${location.origin}/img/icon_q1.png`,
      },
      {
        visible: true,
        data: [{ date: '2019-10-01' }],
        size: 24,
        offsetY: -5,
        symbol: `image://${location.origin}/img/icon_q7.png`,
      },
    ],
  };
  return <Line style={{ height: 300 }} {...config} />;
};

export default (props: any) => {
  const [timeColor, setTimeColor] = useState(['checked', '', '']);
  const lampArr = [
    icon_q7,
    icon_q6,
    icon_q5,
    icon_q4,
    icon_q3,
    icon_q2,
    icon_q1,
  ];
  useEffect(() => {});

  // 日期改变
  const onChange = (dates: any, dateStrings: any) => {
    if (dateStrings[0] && dateStrings[1]) {
      setTimeColor(['', '', '']);
    } else {
      setTimeColor(['checked', '', '']);
    }
  };

  // 近1，2，3年切换
  const timeTab = (t: any) => {
    if (t === 1) {
      setTimeColor(['checked', '', '']);
    } else if (t === 2) {
      setTimeColor(['', 'checked', '']);
    } else if (t === 3) {
      setTimeColor(['', '', 'checked']);
    }
  };

  return (
    <div>
      <CardCommon>
        <div className={styles.change}>
          <Title>风险变动</Title>
          <div className={styles.tool}>
            <div className={styles.choice}>
              <div className={styles.years}>
                <span
                  className={styles[`${timeColor[0]}`]}
                  onClick={() => {
                    timeTab(1);
                  }}
                >
                  近1年
                </span>
                <span
                  className={styles[`${timeColor[1]}`]}
                  onClick={() => {
                    timeTab(2);
                  }}
                >
                  近2年
                </span>
                <span
                  className={styles[`${timeColor[2]}`]}
                  onClick={() => {
                    timeTab(3);
                  }}
                >
                  近3年
                </span>
              </div>
              <RangePicker onChange={onChange} />
            </div>
            <div className={styles.lamp}>
              {lampArr.map((item, i) => (
                <div className={styles.lampList} key={i}>
                  <img src={item} alt="" />
                  <span>Q{7 - i}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.chartLine}>
            <LineChange />
          </div>
        </div>
      </CardCommon>
    </div>
  );
};
