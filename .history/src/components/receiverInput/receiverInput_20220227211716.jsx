import React from 'react';
import styles from './receiverInput.module.css';

const ReceiverInput = (props) => {
  return (
    <form>
      <div className={styles.radio__board}>
        <input type='radio' id='교직원' name='position' value='교직원' />
        <label htmlFor='교직원'>교직원</label>
        <input type='radio' id='교직' name='position' value='교직' />
        <label htmlFor='교직'>교직</label>
      </div>
      <input type='text' placeholder='이름' />
      <input type='text' />
      <input type='text' />
    </form>
  );
};

export default ReceiverInput;
