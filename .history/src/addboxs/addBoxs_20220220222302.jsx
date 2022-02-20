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
    console.log(1);
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

  //count 검사
  const countValidation = () => {
    const count = countRef.current.value;
    console.log(count);
    if (!isNaN(count)) {
      if (count > 20) {
        countRef.current.style.borderColor = 'red';
        countRef.current.value = '';
        countRef.current.placeholder = '한번에 20개 까지만 추가가능';
        return false;
      }
      countRef.current.style.borderColor = 'blue';
      return true;
    } else {
      countRef.current.style.borderColor = 'red';
      countRef.current.value = '';
      countRef.current.placeholder = '숫자만 입력해주세요';
      return false;
    }
  };

  return (
    <section className={styles.addContainer}>
      <form onSubmit={onSubmit} className={styles.addForm}>
        <div className={styles.addFormHeader}>
          <p className={styles.item}>날짜</p>
          <p className={styles.item}>송장번호</p>
          <p className={styles.item}>종류</p>
          <p className={styles.item}>보낸분</p>
          <p className={styles.item}>받는분</p>
          <p className={styles.item}>수령날짜</p>
          <p className={styles.item}>직책</p>
          <p className={styles.item}>이름</p>
          <p className={styles.item}>제거</p>
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
            placeholder='숫자만 입력해주세요'
            className={styles.countText}
          />
          <button className={styles.addBtn} onClick={onMultiAdd}>
            <FontAwesomeIcon icon={faCartPlus} size='2x' />
          </button>
        </div>

        <button className={styles.addBtn} onClick={onSubmit}>
          <FontAwesomeIcon icon={faPaperPlane} size='2x' />
        </button>
      </div>
    </section>
  );
};

export default AddBoxs;
