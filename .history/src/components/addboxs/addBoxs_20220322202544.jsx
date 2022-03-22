import React, { useRef, useState } from 'react';
import styles from './addBoxs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCirclePlus,
  faCartPlus,
  faCircleMinus,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

const AddBoxs = ({ packageService }) => {
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

  const [kindSelected, setKindSelected] = useState('택배');

  const countRef = useRef();
  const kindSelecterRef = useRef();

  const onSubmit = () => {
    console.log('syb');
    packageService.createPackages(boxList);
  };

  // const onSubmit = (e) => {

  //   console.log(JSON.stringify({ boxs: [...boxList] }));

  //   fetch('http://localhost:8080/packages', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       packages: boxList,
  //     }),
  //   }).then(console.log);
  // };

  const onChange = (event, index) => {
    const boxs = [...boxList];
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    boxs[index][name] = value;
    setBoxList(boxs);
  };

  const onChangeSelectedBox = (e) => {
    setKindSelected(e.target.value);
  };

  const onAdd = () => {
    setBoxList([
      ...boxList,
      {
        date: `${String(new Date().getFullYear()).substring(2, 4)}.${
          new Date().getMonth() + 1
        }.${new Date().getDate()}`,
        boxId: '',
        //이전 아이템이 존재하고 kind값이 등록되어있으면 그 값으로 적용
        kind:
          boxList[boxList.length - 1] && boxList[boxList.length - 1].kind
            ? boxList[boxList.length - 1].kind
            : '',
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
          kind: kindSelected,
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

  const testkeypress = (e) => {};
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
        </div>
        {boxList.map((box, index) => {
          return (
            <div className={styles.items} key={index}>
              <input
                type='text'
                name='date'
                onChange={(event) => onChange(event, index)}
                value={box.date}
                required
              />
              <input
                type='text'
                name='boxId'
                onChange={(event) => onChange(event, index)}
                onKeyPress={testkeypress}
                value={box.boxId}
                required
              />
              <input
                type='text'
                name='kind'
                onChange={(event) => onChange(event, index)}
                value={box.kind}
                required
              />
              <input
                type='text'
                name='sender'
                onChange={(event) => onChange(event, index)}
                value={box.sender}
                required
              />
              <input
                type='text'
                name='receiver'
                onChange={(event) => onChange(event, index)}
                value={box.receiver}
                required
              />
              <input
                type='text'
                name='receivedDate'
                onChange={(event) => onChange(event, index)}
                value={box.receivedDate}
                required
              />
              <input
                type='text'
                name='position'
                onChange={(event) => onChange(event, index)}
                value={box.position}
                required
              />
              <input
                type='text'
                name='name'
                onChange={(event) => onChange(event, index)}
                value={box.name}
                required
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
            <select
              ref={kindSelecterRef}
              name='kindSelect'
              className={styles.kindSelecter}
              onChange={onChangeSelectedBox}
              value={kindSelected}
            >
              <option value='택배'>택배</option>
              <option value='등기'>등기</option>
            </select>
            <button className={styles.addBtn} onClick={onMultiAdd}>
              <FontAwesomeIcon icon={faCartPlus} size='2x' />
            </button>
          </div>

          <button
            type='submit'
            className={`${styles.addBtn} ${styles.sendBtn}`}
          >
            <FontAwesomeIcon icon={faPaperPlane} size='2x' />
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddBoxs;
