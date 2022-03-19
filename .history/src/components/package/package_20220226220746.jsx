import React, { useState } from 'react';
import Item from '../item/item';
import styles from './package.module.css';
const Package = (props) => {
  const [item, setItem] = useState([
    {
      id: 1,
      date: '22.01.12',
      sender: '유승윤',
      receiver: '도서관',
    },
    {
      id: 2,
      date: '22.01.12',
      sender: '41411441',
      receiver: '43223423442',
    },
  ]);

  const [selectedPackages, setSelectedPackages] = useState([]);

  const addList = (box) => {
    //축약 : setSelectedPackages([...selectedPackages, box]);
    const list = [...selectedPackages, box];
    setSelectedPackages(list);
  };

  const removeList = (box) => {
    const
  }

  return (
    <div className={styles.package}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__item}>전체</div>
        <div className={styles.navbar__item}>택배</div>
        <div className={styles.navbar__item}>등기</div>
      </nav>

      <section className={styles.contents}>
        <ul className={styles.itemList}>
          <li className={styles.items}>
            <h2 className={styles.item}>날짜</h2>
            <h2 className={styles.item}>송장번호</h2>
            <h2 className={styles.item}>종류</h2>
            <h2 className={styles.item}>보낸분</h2>
            <h2 className={styles.item}>받는분</h2>
            <h2 className={styles.item}>선택</h2>
          </li>
          {item.map((box) => (
            <Item key={box.id} item={box} addList={addList} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Package;
