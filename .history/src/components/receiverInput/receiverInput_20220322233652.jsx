import React, { useRef, useState } from 'react';
import styles from './receiverInput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const ReceiverInput = ({
  selectedPackages,
  onExitInputForm,
  onTakePackage,
}) => {
  const [positions, setPositions] = useState([
    '대표',
    '교수',
    '교직원',
    '조교',
    '근장생',
  ]);
  const [selectedPosition, setSelectedPosition] = useState('대표');

  const positionRef = useRef();
  const [nameValidation, setNameValidation] = useState('false');

  const TakePackage = (e) => {
    e.preventDefault();
    if (!nameRef.current.value) {
      return false;
    }
    onTakePackage(nameRef.current.value, selectedPosition, selectedPackages);
  };

  const onPositionChange = (e) => {
    setSelectedPosition(e.target.value);
  };

  return (
    <form className={styles.receiverForm}>
      <header className={styles.receiverForm__header}>
        <p className={styles.reveiverForm__header__title}>받는사람 확인</p>
        <button
          type='button'
          className={styles.reveiverForm__header__exit}
          onClick={onExitInputForm}
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
        </button>
      </header>
      <section className={styles.receiverForm__body}>
        <div className={styles.name__group}>
          <p className={styles.input__title}>이름</p>
          <input ref={nameRef} type='text' placeholder='이름' required />
        </div>
        <ul className={styles.radio__group}>
          {positions.map((item, index) => {
            return (
              <li key={index} className={styles.radio__label__group}>
                <label htmlFor={item} className={styles.radio__label}>
                  {item}
                </label>
                <input
                  onChange={onPositionChange}
                  type='radio'
                  id={item}
                  name='position'
                  value={item}
                  checked={item === selectedPosition}
                />
                <label htmlFor={item} className={styles.checkedBox}></label>
              </li>
            );
          })}
        </ul>

        <ul className={styles.packageList}>
          <li>
            <span>날짜</span>
            <span>종류</span>
            <span>송장번호</span>
            <span>발송인</span>
            <span>수령인</span>
          </li>
          {selectedPackages.map((item) => (
            <li key={item.boxId}>
              <div className={styles.itemBorder}>
                <span>{item.date}</span>
              </div>
              <div className={styles.itemBorder}>
                <span>{item.kind}</span>
              </div>
              <div className={styles.itemBorder}>
                <span>{item.boxId}</span>
              </div>
              <div className={styles.itemBorder}>
                <span>{item.sender}</span>
              </div>
              <div className={styles.itemBorder}>
                <span>{item.receiver}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <div className={styles.receiverForm__Footer}>
        <button
          type='submit'
          className={`${styles.receiverBtn} ${styles.check}`}
          onClick={TakePackage}
        >
          가져가기
        </button>
      </div>
    </form>
  );
};

export default ReceiverInput;
