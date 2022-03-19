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
            <label htmlFor='대표' className={styles.radio__group__label}>
              대표
            </label>
            <input type='radio' id='대표' name='position' value='대표' />
          </li>

          <li>
            <label htmlFor='교수' className={styles.radio__group__label}>
              교수
            </label>
            <input type='radio' id='교수' name='position' value='교수' />
          </li>

          <li>
            <label htmlFor='교직원' className={styles.radio__group__label}>
              교직원
            </label>
            <input type='radio' id='교직원' name='position' value='교직원' />
          </li>

          <li>
            <label htmlFor='조교' className={styles.radio__group__label}>
              조교
            </label>
            <input type='radio' id='조교' name='position' value='조교' />
          </li>

          <li>
            <label htmlFor='근장생' className={styles.radio__group__label}>
              근장생
            </label>
            <input type='radio' id='근장생' name='position' value='근장생' />
          </li>
        </ul>

        <ul className={styles.packageList}>
          {selectedPackages.map((item) => (
            <li key={item.boxId}>
              <span>{item.date}</span>
              <span>{item.boxId}</span>
              <span>{item.kind}</span>
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
          확인
        </button>
        <button
          type='button'
          className={`${styles.receiverBtn} ${styles.cancel}`}
        >
          취소
        </button>
      </div>
    </form>
  );
};

export default ReceiverInput;
