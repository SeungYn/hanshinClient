import React, { useRef, useState } from 'react';

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

  const countRef = useRef();

  const onChange = (event, index) => {
    const boxs = [...boxList];
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    switch (name) {
      case 'date':
        boxs[index][name] = value;
        return setBoxList(boxs);
      case 'kind':
        boxs[index][name] = value;
        return setBoxList(boxs);
      case 'sender':
        boxs[index][name] = value;
        return setBoxList(boxs);
      case 'receiver':
        boxs[index][name] = value;
        return setBoxList(boxs);
      case 'receivedDate':
        boxs[index][name] = value;
        return setBoxList(boxs);
      case 'position':
        boxs[index][name] = value;
        return setBoxList(boxs);
      case 'name':
        boxs[index][name] = value;
        return setBoxList(boxs);
    }
  };

  const onAdd = () => {
    setBoxList([
      ...boxList,
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
  };

  const onMultiAdd = () => {
    const count = countRef.current.value;
    const box = [...boxList];
    for (let i = 0; i < count; i++) {
      console.log(1);
      setBoxList([
        ...boxList,
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
    }
  };

  return (
    <>
      <form action=''>
        {boxList.map((box, index) => {
          return (
            <li key={index}>
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
      <button onClick={onAdd}>한줄추가</button>
      <input type='text' name='count' ref={countRef} />
      <button onClick={onMultiAdd}>다중추가</button>
    </>
  );
};

export default AddBoxs;
