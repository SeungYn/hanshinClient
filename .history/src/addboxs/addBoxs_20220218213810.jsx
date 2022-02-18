import React, { useState } from 'react';

const AddBoxs = (props) => {
  const [boxList, setBoxList] = useState([
    {
      date: '',
      kind: '',
      sender: '',
      receiver: '',
      receivedDate: '',
      position: '',
      name: '',
    },
  ]);

  return (
    <form action=''>
      {boxList.map((box, index) => {
        return (
          <li>
            <input type='text' name='date' />
            <input type='text' name='date' />
            <input type='text' name='date' />
            <input type='text' name='date' />
            <input type='text' name='date' />
            <input type='text' name='date' />
            <input type='text' name='date' />
          </li>
        );
      })}
    </form>
  );
};

export default AddBoxs;
