import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = ({ modifyable }) => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <Link to='/'>
          <li className={styles.navbar__item}>전체</li>
        </Link>

        <Link to='/package'>
          <li className={styles.navbar__item}>택배</li>
        </Link>

        <Link to='/pa'>
          <li className={styles.navbar__item}>등기</li>
        </Link>

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
