import React from 'react';
import styles from './alert.module.css';

const Alert = ({ text, isAlert }) => (
  <div className={styles.alert_container}>
    {text && (
      <p
        className={`${styles.banner} ${
          isAlert ? styles.banner_red : styles.banner_green
        }`}
      >
        {text}
      </p>
    )}
  </div>
);

export default Alert;
