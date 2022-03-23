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

        <Link to='/registered'>
          <li className={styles.navbar__item}>등기</li>
        </Link>

        {modifyable ? (
          <Link to='/add'>
            <li className={styles.navbar__item}>추가</li>
          </Link>
        ) : (
          ''
        )}
        {modifyable ? (
          <Link to='/search'>
            <li className={styles.navbar__item}>찾기</li>
          </Link>
        ) : (
          ''
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
