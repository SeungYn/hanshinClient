import React from 'react';
import styles from './package.module.css';
const Package = (props) => {
  return (
    <div className={styles.package}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__item}>전체</div>
        <div className={styles.navbar__item}>택배</div>
        <div className={styles.navbar__item}>등기</div>
      </nav>

      <section className={styles.contents}>
        <div className={styles.contents__item}></div>
      </section>
    </div>
  );
};

export default Package;
