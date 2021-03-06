import React, { useRef, useState } from 'react';
import styles from './addBoxs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCirclePlus,
  faCartPlus,
  faCircleMinus,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

const AddBoxs = (props) => {
  const [boxList, setBoxList] = useState([
    {
      date: `${String(new Date().getFullYear()).substring(2, 4)}.${
        new Date().getMonth() + 1
      }.${new Date().getDate()}`,
      boxId: '',
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
    console.log(JSON.stringify({ boxs: [...boxList] }));
    fetch('http://localhost:8080/packages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        packages: boxList,
      }),
    }).then(console.log);
  };

  const onChange = (event, index) => {
    const boxs = [...boxList];
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    boxs[index][name] = value;
    setBoxList(boxs);
  };

  const onAdd = () => {
    setBoxList([
      ...boxList,
      {
        date: `${String(new Date().getFullYear()).substring(2, 4)}.${
          new Date().getMonth() + 1
        }.${new Date().getDate()}`,
        boxId: '',
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

    if (!countValidation()) {
      return;
    } else {
      const boxs = [...boxList];
      for (let i = 0; i < count; i++) {
        boxs.push({
          date: `${String(new Date().getFullYear()).substring(2, 4)}.${
            new Date().getMonth() + 1
          }.${new Date().getDate()}`,
          boxId: '',
          kind: '',
          sender: '',
          receiver: '',
          receivedDate: '',
          position: '',
          name: '',
        });
      }
      setBoxList(boxs);
    }
  };

  const onRemove = (event, index) => {
    const boxs = [...boxList];
    boxs.splice(index, 1);
    setBoxList(boxs);
  };

  //count ??????
  const countValidation = () => {
    const count = countRef.current.value;

    if (!isNaN(count)) {
      if (count > 20) {
        countRef.current.style.borderColor = 'red';
        countRef.current.value = '';
        countRef.current.placeholder = '????????? 20??? ????????? ????????????';
        return false;
      }
      countRef.current.style.borderColor = 'blue';
      return true;
    } else {
      countRef.current.style.borderColor = 'red';
      countRef.current.value = '';
      countRef.current.placeholder = '????????? ??????????????????';
      return false;
    }
  };

  return (
    <section className={styles.addContainer}>
      <form onSubmit={onSubmit} className={styles.addForm}>
        <div className={styles.addFormHeader}>
          <p className={styles.item}>??????</p>
          <p className={styles.item}>????????????</p>
          <p className={styles.item}>??????</p>
          <p className={styles.item}>?????????</p>
          <p className={styles.item}>?????????</p>
          <p className={styles.item}>????????????</p>
          <p className={styles.item}>??????</p>
          <p className={styles.item}>??????</p>
        </div>
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
                name='boxId'
                onChange={(event) => onChange(event, index)}
                value={box.boxId}
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
              <button
                type='button'
                className={`${styles.addBtn} ${styles.minus}`}
                onClick={(event) => onRemove(event, index)}
              >
                <FontAwesomeIcon icon={faCircleMinus} size='2x' />
              </button>
            </div>
          );
        })}
      </form>
      <div className={styles.bottom}>
        <div className={styles.bottomBtn}>
          <button id='test' className={`${styles.addBtn}`} onClick={onAdd}>
            <FontAwesomeIcon icon={faCirclePlus} size='2x' />
          </button>
          <input
            type='text'
            name='count'
            ref={countRef}
            placeholder='????????? ??????????????????'
            className={styles.countText}
          />
          <button className={styles.addBtn} onClick={onMultiAdd}>
            <FontAwesomeIcon icon={faCartPlus} size='2x' />
          </button>
        </div>

        <button
          className={`${styles.addBtn} ${styles.sendBtn}`}
          onClick={onSubmit}
        >
          <FontAwesomeIcon icon={faPaperPlane} size='2x' />
        </button>
      </div>
    </section>
  );
};

export default AddBoxs;
