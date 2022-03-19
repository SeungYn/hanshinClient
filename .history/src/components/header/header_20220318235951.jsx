import React, { useEffect, useState } from 'react';
import styles from './header.module.css';

const Header = ({ goHome, onLogout }) => {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [day, setDay] = useState('');
  const [dates, setDates] = useState('');

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
    setYear(date.getFullYear());
    setDates(date.getDate());
  }, [date, month, year, dates, day]);

  return (
    <header className={styles.headers}>
      <h1 onClick={goHome} className={styles.title}>
        HanShin
      </h1>
      <p
        className={styles.day}
      >{`${year}년 ${month}월 ${dates}일 ${day}요일`}</p>
      <nav className={styles.menu}>
        <button className={styles.menu__item} onClick={onLogout}>
          로그아웃
        </button>
      </nav>
    </header>
  );
};

export default Header;
