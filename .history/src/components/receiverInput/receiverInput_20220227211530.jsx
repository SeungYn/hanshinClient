import React from 'react';
import styles from './receiverInput.module.css';

const ReceiverInput = (props) => {
  return (
    <form>
      <div className={styles.radio__board}>
        <input type='radio' name='position' value='a' />
        <label for='a'>교직원</label>
      </div>
      <input type='text' placeholder='이름' />
      <input type='text' />
      <input type='text' />
    </form>
  );
};

export default ReceiverInput;
