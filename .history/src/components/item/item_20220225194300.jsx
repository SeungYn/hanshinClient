import React from 'react';
import styles from './item.module.css';
const Item = ({ item }) => {
  return (
    <li className={styles.items}>
      <p>{item.date}</p>
      <p>123123123123123</p>
      <p>택배</p>
      <p>{item.receiver}</p>
      <p>{item.sender}</p>
      <button className={styles.selectBtn} type='button'>
        선택하기
      </button>
    </li>
  );
};

export default Item;
