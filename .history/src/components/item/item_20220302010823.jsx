import React, { useState } from 'react';
import styles from './item.module.css';
const Item = ({ item, addList, removeList }) => {
  const [selected, setSelected] = useState(false);

  const onSelected = () => {
    if (selected === false) {
      setSelected(true);
      addList(item);
    } else {
      setSelected(false);
      removeList(item);
      console.log(selected);
    }
  };

  return (
    <li className={styles.items}>
      <div className={styles.itemBorder}>
        <p>{item.date}</p>
      </div>
      <div className={styles.itemBorder}>
        <p>1231231231231312312312312321323</p>
      </div>
      <div className={styles.itemBorder}>
        <p>택배</p>
      </div>
      <div className={styles.itemBorder}>
        <p>{item.receiver}</p>
      </div>
      <div className={styles.itemBorder}>{item.sender}</div>
      {selected ? (
        <button
          className={`${styles.selectBtn} ${styles.selected}`}
          type='button'
          onClick={onSelected}
        >
          선택해제
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
