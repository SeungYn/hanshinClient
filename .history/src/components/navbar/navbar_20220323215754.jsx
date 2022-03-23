import React from 'react';
import styles.from './navbar.modeule.css';
const Navbar = ({ modifyable }) => {
  return (
    <nav>
      <div className='navbar'>
        <button onClick={onAll} className={styles.navbar__item}>
          전체
        </button>
        <button onClick={onPackage} className={styles.navbar__item}>
          택배
        </button>
        <button onClick={onPost} className={styles.navbar__item}>
          등기
        </button>
        {modifyable ? (
          <button onClick={goAddPackages} className={styles.navbar__item}>
            추가
          </button>
        ) : (
          ''
        )}
        {modifyable ? (
          <button onClick={onPost} className={styles.navbar__item}>
            찾기
          </button>
        ) : (
          ''
        )}
      </div>
    </nav>
  );
};

export default Navbar;
