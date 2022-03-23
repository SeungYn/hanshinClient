import React, { useEffect, useRef, useState } from 'react';
import Item from '../item/item';
import ReceiverInput from '../receiverInput/receiverInput';
import LoadingSpin from '../loadingSpin/loadingSpin';
import styles from './package.module.css';
import { useParams } from 'react-router-dom';

const Package = ({ packageService, modifyable, goAddPackages, param }) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPackages, setSelectedPackages] = useState([]);
  const [receiverInputActivate, setReceiverInputActivate] = useState(false);
  //const [params, SetParams] = useState({ package: '택배', post: '등기' });
  //const paramsThing = useParams();
  //const [parm, SetParm] = useState(params[paramsThing.thing]);

  useEffect(() => {
    console.log(param, 1);
    packageService
      .getNotTakePackages(param ? param : '') //
      .then((data) => {
        console.log(data);
        return setItem(data);
      });
  }, [receiverInputActivate, param]);

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

  const onTakePackage = (name, position, selectedPackages, nowDay) => {
    packageService.updateTakePackages(name, position, selectedPackages, nowDay);
    setLoading(true);

    //ㅎ해외서버 db업데이트가 느려서 해놈
    setTimeout(() => {
      setSelectedPackages([]);
      setReceiverInputActivate(false);
      setLoading(false);
    }, 2000);
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
              key={box.id}
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
      <LoadingSpin loading={loading} />
    </div>
  );
};

export default Package;
