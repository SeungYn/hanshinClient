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
            <input type='text' name='date' onChange={onChange} />
            <input type='text' name='kind' onChange={onChange} />
            <input type='text' name='sender' onChange={onChange} />
            <input type='text' name='receiver' onChange={onChange} />
            <input type='text' name='receivedDate' onChange={onChange} />
            <input type='text' name='position' onChange={onChange} />
            <input type='text' name='name' onChange={onChange} />
          </li>
        );
      })}
    </form>
  );
};

export default AddBoxs;
