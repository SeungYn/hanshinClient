import React, { useEffect, useRef, useState } from 'react';
import Item from '../item/item';
import ReceiverInput from '../receiverInput/receiverInput';
import styles from './package.module.css';
import jwt from 'jsonwebtoken';
const Package = (props) => {
  const [item, setItem] = useState([]);

  const [selectedPackages, setSelectedPackages] = useState([]);
  const [receiverInputActivate, setReceiverInputActivate] = useState(false);

  const addList = (box) => {
    //축약 : setSelectedPackages([...selectedPackages, box]);
    const list = [...selectedPackages, box];
    setSelectedPackages(list);
  };

  const removeList = (box) => {
    const list = selectedPackages.filter((item) => {
      if (item.boxId !== box.boxId) {
        return item;
      }
    });

    setSelectedPackages(list);
  };

  const onUserInputBtn = () => {
    setReceiverInputActivate(true);
  };

  useEffect(() => {
    fetch('http://localhost:8080/packages/') //
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        return setItem(data);
      });
  }, [receiverInputActivate]);

  const onExitInputForm = () => {
    setReceiverInputActivate(false);
  };

  const onTakePackage = (name, position) => {
    fetch('http://localhost:8080/packages/take', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        boxId: selectedPackages.map((i) => i.boxId),
        name,
        position,
      }),
    }).then(console.log);
    setReceiverInputActivate(false);
  };

  return (
    <div className={styles.package}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__item}>전체</div>
        <div className={styles.navbar__item}>택배</div>
        <div className={styles.navbar__item}>등기</div>
      </nav>

      <section className={styles.contents}>
        <ul className={styles.itemList}>
          <li className={styles.items}>
            <h2 className={styles.item}>날짜</h2>
            <h2 className={styles.item}>송장번호</h2>
            <h2 className={styles.item}>종류</h2>
            <h2 className={styles.item}>보낸분</h2>
            <h2 className={styles.item}>받는분</h2>
          </li>
          {item.map((box) => (
            <Item
              key={box.boxId}
              item={box}
              addList={addList}
              removeList={removeList}
            />
          ))}
        </ul>
      </section>
      <button className={styles.submitBtn} onClick={onUserInputBtn}>
        작성하기
      </button>
      {receiverInputActivate ? (
        <ReceiverInput
          selectedPackages={selectedPackages}
          onExitInputForm={onExitInputForm}
          onTakePackage={onTakePackage}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Package;
