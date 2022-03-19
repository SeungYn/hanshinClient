import React from 'react';

const ReceiverInput = (props) => {
  return (
    <form>
      <select name=''>
        <option value='교직원'>교직원</option>
        <option value='조교'>조교</option>
        <option value='대표'>대표</option>
        <option value=''>교직원</option>
      </select>
      <input type='text' placeholder='이름' />
      <input type='text' />
      <input type='text' />
    </form>
  );
};

export default ReceiverInput;
