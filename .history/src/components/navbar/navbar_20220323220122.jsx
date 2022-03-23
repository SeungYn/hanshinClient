import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = ({ modifyable }) => {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.navbar__item}>
          <Link to='/'>전체</Link>
        </div>
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
