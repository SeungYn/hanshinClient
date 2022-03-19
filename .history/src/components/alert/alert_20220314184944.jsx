import React from 'react';
import styles from './alert.module.css';

const alert = ({ text, isAlert }) => (
  <>
    {text && (
      <p
        className={`${styles.banner} ${
          isAlert ? styles.banner_red : styles.banner_green
        }`}
      ></p>
    )}
  </>
);

export default alert;
