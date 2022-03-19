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
  const [selectedPosition, setSelectedPosition] = useState('');

  const positionRef = useRef();
  const nameRef = useRef();

  const TakePackage = () => {
    onTakePackage();
  };

  const onPositionChange = (e) => {
    console.log(e.target.value);
  };
  console.log(selectedPackages);
  return (
    <form className={styles.receiverForm}>
      <header className={styles.receiverForm__header}>
        <p className={styles.reveiverForm__header__title}>받는사람 확인</p>
        <button
          className={styles.reveiverForm__header__exit}
          onClick={onExitInputForm}
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
        </button>
      </header>
      <section className={styles.receiverForm__body}>
        <div className={styles.name__group}>
          <p className={styles.input__title}>이름</p>
          <input ref={nameRef} type='text' placeholder='이름' />
        </div>
        <ul className={styles.radio__group}>
          {positions.map((item) => {
            return (
              <li className={styles.radio__label__group}>
                <label htmlFor={item} className={styles.radio__label}>
                  {item}
                </label>
                <input
                  onChange={onPositionChange}
                  type='radio'
                  id={item}
                  name='position'
                  value={item}
                />
                <label htmlFor={item} className={styles.checkedBox}></label>
              </li>
            );
          })}
          <li className={styles.radio__label__group}>
            <label htmlFor='대표' className={styles.radio__label}>
              대표
            </label>
            <input type='radio' id='대표' name='position' value='대표' />
            <label htmlFor='대표' className={styles.checkedBox}></label>
          </li>

          <li className={styles.radio__label__group}>
            <label htmlFor='교수' className={styles.radio__label}>
              교수
            </label>
            <input type='radio' id='교수' name='position' value='교수' />
            <label htmlFor='교수' className={styles.checkedBox}></label>
          </li>
          <li className={styles.radio__label__group}>
            <label htmlFor='교직원' className={styles.radio__label}>
              교직원
            </label>
            <input type='radio' id='교직원' name='position' value='교직원' />
            <label htmlFor='교직원' className={styles.checkedBox}></label>
          </li>
          <li className={styles.radio__label__group}>
            <label htmlFor='조교' className={styles.radio__label}>
              조교
            </label>
            <input type='radio' id='조교' name='position' value='조교' />
            <label htmlFor='조교' className={styles.checkedBox}></label>
          </li>
          <li className={styles.radio__label__group}>
            <label htmlFor='근장생' className={styles.radio__label}>
              근장생
            </label>
            <input
              onChange={onPositionChange}
              type='radio'
              id='근장생'
              name='position'
              value='근장생'
            />
            <label htmlFor='근장생' className={styles.checkedBox}></label>
          </li>
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
                <span>{item.date}312312312</span>
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
          type='button'
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
