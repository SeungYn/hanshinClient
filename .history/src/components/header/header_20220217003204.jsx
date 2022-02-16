import React, { useState } from 'react';
import styles from './header.module.css';

const Header = (props) => {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [day, setDay] = useState('');

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>HanShin</h1>
      <div>{`a${date}sd asd asd `}</div>
    </header>
  );
};

export default Header;
