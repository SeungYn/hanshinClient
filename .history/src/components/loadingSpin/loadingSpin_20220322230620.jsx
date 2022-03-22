import React from 'react';
import styles from './locadingSpin.module.css';

const LoadingSpin = (props) => (
  <div className={styles.container}>
    <div className={styles.loading}></div>
    <p>현황 업데이트중</p>
  </div>
);

export default LoadingSpin;
