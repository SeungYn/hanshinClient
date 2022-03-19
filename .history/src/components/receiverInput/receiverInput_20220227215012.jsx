import React from 'react';
import styles from './receiverInput.module.css';

const ReceiverInput = ({ selectedPackages }) => {
  console.log(selectedPackages);
  return (
    <form className={styles.receiverForm}>
      <div className={styles.radio__board}>
        <input type='radio' id='대표' name='position' value='대표' />
        <label htmlFor='대표'>대표</label>
        <input type='radio' id='교수' name='position' value='교수' />
        <label htmlFor='교수'>교수</label>
        <input type='radio' id='교직원' name='position' value='교직원' />
        <label htmlFor='교직원'>교직원</label>
        <input type='radio' id='조교' name='position' value='조교' />
        <label htmlFor='조교'>조교</label>
        <input type='radio' id='근장생' name='position' value='근장생' />
        <label htmlFor='근장생'>근장생</label>
      </div>
      <input type='text' placeholder='이름' />
      <ul className={styles.packageList}>
        {selectedPackages.map((package) => (
          <li>{package.boxId}</li>
        ))}
      </ul>
      <div className={styles.receiverForm__Footer}>
        <button type='button'>확인</button>
        <button type='button'>취소=</button>
      </div>
    </form>
  );
};

export default ReceiverInput;
