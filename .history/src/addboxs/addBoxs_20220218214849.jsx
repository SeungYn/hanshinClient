import React, { useState } from 'react';

const AddBoxs = (props) => {
  const [boxList, setBoxList] = useState([
    {
      date: '',
      c: '',
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
            <input
              type='text'
              name='date'
              onChange={(event) => onChange(event, index)}
              value={box.date}
            />
            <input
              type='text'
              name='kind'
              onChange={(event) => onChange(event, index)}
              value={box.kind}
            />
            <input
              type='text'
              name='sender'
              onChange={(event) => onChange(event, index)}
              value={box.sender}
            />
            <input
              type='text'
              name='receiver'
              onChange={(event) => onChange(event, index)}
              value={box.receiver}
            />
            <input
              type='text'
              name='receivedDate'
              onChange={(event) => onChange(event, index)}
              value={box.receivedDate}
            />
            <input
              type='text'
              name='position'
              onChange={(event) => onChange(event, index)}
              value={box.position}
            />
            <input
              type='text'
              name='name'
              onChange={(event) => onChange(event, index)}
              value={box.name}
            />
          </li>
        );
      })}
    </form>
  );
};

export default AddBoxs;
