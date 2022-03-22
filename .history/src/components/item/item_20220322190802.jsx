import React, { useState } from 'react';
import styles from './item.module.css';
const Item = ({ item, addList, removeList, modifyable }) => {
  const [selected, setSelected] = useState(false);

  const onSelected = () => {
    if (selected === false) {
      setSelected(true);
      console.log(1);
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
        <p>{item.boxId}</p>
      </div>
      <div className={styles.itemBorder}>
        <p>{item.kind}</p>
      </div>
      <div className={styles.itemBorder}>
        <p>{item.sender}</p>
      </div>
      <div className={styles.itemBorder}>
        <p>{item.receiver}</p>
      </div>
      {modifyable ? (
        selected ? (
          <button
            className={`${styles.selectBtn} ${styles.selected}`}
            type='button'
            onClick={onSelected}
          >
            선택해제
          </button>
        ) : (
          <button
            className={styles.selectBtn}
            type='button'
            onClick={onSelected}
          >
            선택하기
          </button>
        )
      ) : (
        <div className={`${styles.selectBtn}`}></div>
      )}
    </li>
  );
};

export default Item;
