import React, { useRef, useState } from 'react';
import styles from './addBoxs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCartPlus } from '@fortawesome/free-slid-svg-icons';

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

  const onSubmit = (e) => {
    e.console.log(1);
  };

  const onChange = (event, index) => {
    const boxs = [...boxList];
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    boxs[index][name] = value;
    setBoxList(boxs);

    // switch (name) {
    //   case 'date':
    //     boxs[index][name] = value;
    //     return setBoxList(boxs);
    //   case 'kind':
    //     boxs[index][name] = value;
    //     return setBoxList(boxs);
    //   case 'sender':
    //     boxs[index][name] = value;
    //     return setBoxList(boxs);
    //   case 'receiver':
    //     boxs[index][name] = value;
    //     return setBoxList(boxs);
    //   case 'receivedDate':
    //     boxs[index][name] = value;
    //     return setBoxList(boxs);
    //   case 'position':
    //     boxs[index][name] = value;
    //     return setBoxList(boxs);
    //   case 'name':
    //     boxs[index][name] = value;
    //     return setBoxList(boxs);
    // }
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
    const boxs = [...boxList];
    for (let i = 0; i < count; i++) {
      boxs.push({
        date: '',
        kind: '',
        sender: '',
        receiver: '',
        receivedDate: '',
        position: '',
        name: '',
      });
    }
    setBoxList(boxs);
  };

  const onRemove = (event, index) => {
    const boxs = [...boxList];
    boxs.splice(index, 1);
    setBoxList(boxs);
  };

  return (
    <section className={styles.addContainer}>
      <form onSubmit={onSubmit} className={styles.addForm}>
        {boxList.map((box, index) => {
          return (
            <div className={styles.items} key={index}>
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
              <button type='button' onClick={(event) => onRemove(event, index)}>
                -
              </button>
            </div>
          );
        })}
      </form>
      <div className={styles.bottomBtn}>
        <button className={styles.addBtn} onClick={onAdd}>
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
        <input type='text' name='count' ref={countRef} />
        <button className={styles.addBtn} onClick={onMultiAdd}>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </section>
  );
};

export default AddBoxs;
