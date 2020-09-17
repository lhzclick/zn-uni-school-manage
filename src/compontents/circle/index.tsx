import React, { useEffect } from 'react';
import styles from './index.less';
import Q1 from '@/common/img/Q1.png';
import Q2 from '@/common/img/Q2.png';
import Q3 from '@/common/img/Q3.png';
import Q4 from '@/common/img/Q4.png';
import Q5 from '@/common/img/Q5.png';
import Q6 from '@/common/img/Q6.png';
import Q7 from '@/common/img/Q7.png';
import imgx from '@/common/img/imgx.png';
import tool from 'lh-tool';

export default (props: any) => {
  //
  useEffect(() => {});
  const formatRange = () => {
    let src;
    switch (props.range) {
      case 1:
        src = Q1;
        break;
      case 2:
        src = Q2;
        break;
      case 3:
        src = Q3;
        break;
      case 4:
        src = Q4;
        break;
      case 5:
        src = Q5;
        break;
      case 6:
        src = Q6;
        break;
      case 7:
        src = Q7;
        break;
      default:
        Q1;
        break;
    }
    return src;
  };
  const rangeSrc = formatRange();
  return (
    <div className={styles.cilcleWrap}>
      <div className={styles.circle}>
        <img src={rangeSrc} alt="" />
        <span>综合评级</span>
      </div>
      <div className={styles.target}>
        <div>
          <span>技术监控 </span>
          <span
            className={styles.span2}
            style={{ color: tool.formatRangeColor(2) }}
          >
            低风险
          </span>
        </div>
        <img src={imgx} alt="" />
      </div>
      <div className={styles.target + ' ' + styles.target2}>
        <img src={imgx} alt="" />
        <div className={styles.toBottom}>
          <span>技术监控 </span>
          <span
            className={styles.span2}
            style={{ color: tool.formatRangeColor(1) }}
          >
            低风险
          </span>
        </div>
      </div>
      <div className={styles.target + ' ' + styles.target3}>
        <div>
          <span>技术监控 </span>
          <span
            className={styles.span2}
            style={{ color: tool.formatRangeColor(7) }}
          >
            低风险
          </span>
        </div>
        <img src={imgx} alt="" />
      </div>
      <div className={styles.target + ' ' + styles.target4}>
        <img src={imgx} alt="" />
        <div className={styles.toBottom}>
          <span>技术监控 </span>
          <span
            className={styles.span2}
            style={{ color: tool.formatRangeColor(5) }}
          >
            低风险
          </span>
        </div>
      </div>
    </div>
  );
};
