import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductSliderTitle.module.css';
import more from '../../assets/images/icons/more.png';

function ProductSliderTitle({title='', isView=true, needsBtn=false, link=''}) {
  if(!isView) // isView가 false이면
    return null; // 렌더링 X
  
  return (
    <div id={styles.titleWrap}>
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
            <img src={more} alt='more'/>
          </Link>
        )
        : null
      }
    </div>
  );
}

export default ProductSliderTitle;