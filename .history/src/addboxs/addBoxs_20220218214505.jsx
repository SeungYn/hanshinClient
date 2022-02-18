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

  const onChange = (event, index) => {
    const boxs = [...boxList];

    console.log(event);
    console.log(index);
  };

  return (
    <form action=''>
      {boxList.map((box, index) => {
        return (
          <li>
            <input type='text' name='date' />
            <input type='text' name='kind' />
            <input type='text' name='sender' />
            <input type='text' name='receiver' />
            <input type='text' name='receivedDate' />
            <input type='text' name='position' />
            <input type='text' name='name' />
          </li>
        );
      })}
    </form>
  );
};

export default AddBoxs;
