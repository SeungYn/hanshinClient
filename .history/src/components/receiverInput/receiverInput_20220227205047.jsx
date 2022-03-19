import React from 'react';

const ReceiverInput = (props) => {
  return (
    <form>
      <select name=''>
        <option value='교직원'></option>
      </select>
      <input type='text' placeholder='이름' />
      <input type='text' />
      <input type='text' />
    </form>
  );
};

export default ReceiverInput;
