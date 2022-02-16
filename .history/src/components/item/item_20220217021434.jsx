import React from 'react';
import styles from './item.module.css';
const Item = ({ item }) => {
  return (
    <li className={styles.items}>
      <p>{item.date}</p>
      <p>{item.receiver}</p>
      <p>{item.sender}</p>
      <p>{item.a}</p>
      <p>{item.b}</p>
      <p>{item.c}</p>
    </li>
  );
};

export default Item;
