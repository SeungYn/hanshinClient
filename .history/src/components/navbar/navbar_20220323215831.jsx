import React from 'react';
import styles from './navbar.modeule.css';

const Navbar = ({ modifyable }) => {
  return (
    <nav>
      <div className='navbar'>
        <button className={styles.navbar__item}>전체</button>
        <button className={styles.navbar__item}>택배</button>
        <button className={styles.navbar__item}>등기</button>
        {modifyable ? (
          <button className={styles.navbar__item}>추가</button>
        ) : (
          ''
        )}
        {modifyable ? (
          <button className={styles.navbar__item}>찾기</button>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
};

export default Navbar;
