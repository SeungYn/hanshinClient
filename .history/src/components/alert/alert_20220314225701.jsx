import React from 'react';
import styles from './alert.module.css';

const Alert = ({ text, isAlert }) => (
  <>
    {text && (
      <p
        className={`${styles.banner} ${
          isAlert ? styles.banner_red : styles.banner_green
        }`}
      >
        {text}'a'
      </p>
    )}
  </>
);

export default Alert;
