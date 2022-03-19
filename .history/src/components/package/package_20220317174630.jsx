import React, { useEffect, useRef, useState } from 'react';
import Item from '../item/item';
import ReceiverInput from '../receiverInput/receiverInput';
import styles from './package.module.css';

const Package = ({ packageService }) => {
  const [item, setItem] = useState([]);

  const [selectedPackages, setSelectedPackages] = useState([]);
  const [receiverInputActivate, setReceiverInputActivate] = useState(false);

  const addList = (box) => {
    //축약 : setSelectedPackages([...selectedPackages, box]);
    const list = [...selectedPackages, box];
    console.log(list);
    setSelectedPackages(list);
    console.log(selectedPackages);
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
    packageService
      .getNotTakePackages() //
      .then((data) => setItem(data));
  }, [receiverInputActivate]);

  const onExitInputForm = () => {
    setReceiverInputActivate(false);
  };

  const onTakePackage = (name, position, selectedPackages) => {
    console.log(selectedPackages);
  };

  // {
  //   fetch('http://localhost:8080/packages/take', {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       boxId: selectedPackages.map((i) => i.boxId),
  //       name,
  //       position,
  //     }),
  //   }).then(console.log);
  //   setReceiverInputActivate(false);
  // }

  return (
    <div className={styles.package}>
      <nav className={styles.navbar}>
        <button className={styles.navbar__item}>전체</button>
        <button className={styles.navbar__item}>택배</button>
        <button className={styles.navbar__item}>등기</button>
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
