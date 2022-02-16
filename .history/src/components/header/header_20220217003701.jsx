import React, { useEffect, useState } from 'react';
import styles from './header.module.css';

const Header = (props) => {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [day, setDay] = useState('');

  useEffect(() => {
    setMonth(date.getMonth() + 1);
    switch (date.getDay()) {
      case 0:
        setDay('일');
        break;
    }
  }, [date, month, year, day]);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>HanShin</h1>
      <div>{`a${month}sd asd asd `}</div>
    </header>
  );
};

export default Header;
