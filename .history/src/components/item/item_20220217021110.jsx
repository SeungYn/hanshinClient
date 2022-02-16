import React from 'react';
import styles from './item.module.css';
const Item = ({ item }) => {
  return (
    <li className={styles.items}>
      <p>{`${item.date}`}</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </li>
  );
};

export default Item;
