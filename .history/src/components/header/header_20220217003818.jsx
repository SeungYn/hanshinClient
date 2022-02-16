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
      case 1:
        setDay('월');
        break;
      case 2:
        setDay('화');
        break;
      case 3:
        setDay('수');
        break;
      case 4:
        setDay('목');
        break;
      case 5:
        setDay('금');
        break;
      case 6:
        setDay('토');
        break;
    }
  }, [date, month, year, day]);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>HanShin</h1>
      <div>{`a${day}}sd asd asd `}</div>
    </header>
  );
};

export default Header;
