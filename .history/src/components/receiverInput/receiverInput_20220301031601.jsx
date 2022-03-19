import React from 'react';
import styles from './receiverInput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const ReceiverInput = ({ selectedPackages }) => {
  console.log(selectedPackages);
  return (
    <form className={styles.receiverForm}>
      <header className={styles.receiverForm__header}>
        <p className={styles.reveiverForm__header__title}>받는사람 확인</p>
        <p className={styles.reveiverForm__header__exit}>
          <FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon>
        </p>
      </header>
      <section className={styles.receiverForm__body}>
        <div className={styles.name__group}>
          <p className={styles.input__title}>이름</p>
          <input type='text' placeholder='이름' />
        </div>
        <ul className={styles.radio__group}>
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
            <input type='radio' id='근장생' name='position' value='근장생' />
            <label htmlFor='근장생' className={styles.checkedBox}></label>
          </li>
        </ul>

        <ul className={styles.packageList}>
          <li>
            <span>날짜dddddddd</span>
            <span>종류</span>
            <span>송장번호</span>
            <span>발송인</span>
            <span>수령인</span>
          </li>
          {selectedPackages.map((item) => (
            <li key={item.boxId}>
              <span>{item.date}</span>
              <span>{item.kind}</span>
              <span>{item.boxId}</span>
              <span>{item.sender}</span>
              <span>{item.receiver}</span>
            </li>
          ))}
        </ul>
      </section>
      <div className={styles.receiverForm__Footer}>
        <button
          type='button'
          className={`${styles.receiverBtn} ${styles.check}`}
        >
          가져가기
        </button>
      </div>
    </form>
  );
};

export default ReceiverInput;
