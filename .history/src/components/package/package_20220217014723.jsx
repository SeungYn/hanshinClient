import React, { useState } from 'react';
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
      sender: '유승윤',
      receiver: '도서관',
    },
  ]);
  return (
    <div className={styles.package}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__item}>전체</div>
        <div className={styles.navbar__item}>택배</div>
        <div className={styles.navbar__item}>등기</div>
      </nav>

      <section className={styles.contents}>
        <ul className={styles.contents__item}></ul>
      </section>
    </div>
  );
};

export default Package;
