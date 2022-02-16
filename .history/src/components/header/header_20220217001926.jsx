import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>HanShin</div>
    </header>
  );
};

export default Header;
