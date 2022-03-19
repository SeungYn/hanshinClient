import React from 'react';
import styles from './rece';

const ReceiverInput = (props) => {
  return (
    <form>
      <div className={styles.radio__board}></div>
      <input type='text' placeholder='이름' />
      <input type='text' />
      <input type='text' />
    </form>
  );
};

export default ReceiverInput;
