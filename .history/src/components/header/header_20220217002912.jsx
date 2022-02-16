import React, { useState } from 'react';
import styles from './header.module.css';

const Header = (props) => {
  const [date, setDate] = useState(new Date());
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>HanShin</h1>
      <div>{`asd asd asd `}</div>
    </header>
  );
};

export default Header;
