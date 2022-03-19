import React, { useState } from 'react';
import styles from './item.module.css';
const Item = ({ item }) => {
  const [selected, setSelected] = useState(false);

  const onSelected = () => {
    if (selected === false) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };

  return (
    <li className={styles.items}>
      <p>{item.date}</p>
      <p>123123123123123</p>
      <p>택배</p>
      <p>{item.receiver}</p>
      <p>{item.sender}</p>
      {selected ? (
        <button
          className={`${styles.selectBtn} ${styles.selected}`}
          type='button'
          onClick={onSelected}
        >
          선택하기
        </button>
      ) : (
        <button className={styles.selectBtn} type='button' onClick={onSelected}>
          선택하기
        </button>
      )}
    </li>
  );
};

export default Item;
