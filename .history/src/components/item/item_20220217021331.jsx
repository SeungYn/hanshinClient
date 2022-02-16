import React from 'react';
import styles from './item.module.css';
const Item = ({ item }) => {
  return (
    <li className={styles.items}>
      <p>{item.date}</p>
      <p>{item.date}</p>
      <p>{item.date}</p>
      <p>{item.date}</p>
      <p>{item.date}</p>
      <p>{item.s}</p>
    </li>
  );
};

export default Item;
