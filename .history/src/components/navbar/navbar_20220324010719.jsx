import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = ({ modifyable }) => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li className={styles.navbar__item}>
          <Link to='/'>전체</Link>
        </li>
        <li className={styles.navbar__item}>
          <Link to='/package'>택배</Link>
        </li>
        <li className={styles.navbar__item}>등기</li>
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
      </ul>
    </nav>
  );
};

export default Navbar;
