import React, { useEffect, useRef, useState } from 'react';
import Item from '../item/item';
import ReceiverInput from '../receiverInput/receiverInput';
import styles from './package.module.css';

const Package = ({ packageService, modifyable }) => {
  const [item, setItem] = useState([]);

  const [selectedPackages, setSelectedPackages] = useState([]);
  const [receiverInputActivate, setReceiverInputActivate] = useState(false);

  useEffect(() => {
    packageService
      .getNotTakePackages() //
      .then((data) => setItem(data));
  }, [receiverInputActivate]);

  const onExitInputForm = () => {
    setReceiverInputActivate(false);
  };

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

  const onTakePackage = (name, position, selectedPackages1) => {
    packageService.updateTakePackages(name, position, selectedPackages1);

    setSelectedPackages([]);

    setReceiverInputActivate(false);
  };

  //전체 택배 등기 카테고리 귀찮아서 이렇게

  const onAll = () => {
    packageService
      .getNotTakePackages() //
      .then((data) => setItem(data))
      .catch(console.log);
  };

  const onPost = () => {
    packageService
      .getNotTakePackages('등기') //
      .then((data) => setItem(data))
      .catch(console.log);
  };

  const onPackage = () => {
    packageService
      .getNotTakePackages('택배') //
      .then((data) => setItem(data))
      .catch(console.log);
  };
  return (
    <div className={styles.package}>
      <nav className={styles.navbar}>
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
          <button onClick={onPost} className={styles.navbar__item}>
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
              modifyable={modifyable}
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
