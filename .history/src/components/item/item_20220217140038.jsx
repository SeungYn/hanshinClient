import React from 'react';
import styles from './item.module.css';
const Item = ({ item }) => {
  return (
    <li className={styles.items}>
      <p>{item.date}</p>
      <p>택배</p>
      <p>{item.receiver}</p>
      <p>{item.sender}</p>
      <p>22.12.12</p>
      <p>dsadasdasdsadwadsadwad</p>
      <p>123</p>
    </li>
  );
};

export default Item;
