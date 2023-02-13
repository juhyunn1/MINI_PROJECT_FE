import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Title.module.css';

function Title({title='', isView=true, needsBtn=false, link=''}) {
  if(!isView) // isView가 false이면
    return null; // 렌더링 X
  
  return (
    <div className='spread' style={{height: '50px', marginBottom: '10px'}}>
      {
        title !== '' ? (
          <h1 className={styles.pageTitle}>{title}</h1>
        )
        : null
      }
      
      {
        needsBtn ? (
          <Link to={link} className={styles.moreBtn}>
            <span>전체보기</span>
            <img src='./assets/images/icon/more.png' alt='more'/>
          </Link>
        )
        : null
      }
    </div>
  );
}

export default Title;