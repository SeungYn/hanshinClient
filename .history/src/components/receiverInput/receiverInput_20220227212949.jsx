import React from 'react';
import styles from './receiverInput.module.css';

const ReceiverInput = (props) => {
  return (
    <form>
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
      <input type='text' />
      <input type='text' />
    </form>
  );
};

export default ReceiverInput;
