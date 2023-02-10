import React, { useState, useEffect} from 'react';
import styles from './Modal.module.css';

const Modal = ({isOpen=false, setIsOpen=() => console.log('함수 없음'), title='제목'}) => {
  const activeClass = isOpen ? `${styles.open} ${styles.modalBg}` : `${styles.close} ${styles.modalBg}`;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={activeClass}> {/* 배경 */}
      <div>
        {title}
        <button onClick={() => setIsOpen(false)}>닫기</button>
      </div>
    </div>
  );
};

export default Modal;