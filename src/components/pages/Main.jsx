import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../ui/Title';
import EventSlider from '../widgets/EventSlider';
import ProductSlider from '../widgets/ProductSlider';
import styles from "./Main.module.css"

function Main() {
  return (
    // <div class='container center'>
    //   <div>
    //     <Link to='check-in'>
    //       <div className={style.checkIn}></div>
    //     </Link>

    //     <div className={style.btnWrap}>
    //       <Link to='cart'>
    //         <div className={style.btnSm}></div>
    //       </Link>
    //       <Link to=''>
    //         <div className={style.btnSm}></div>
    //       </Link>
    //     </div>
    //   </div>
      
    // </div>

    <div class='container'>
      <div>
        {/* <div className={styles.mainTitle}>
          <h1 style={{fontSize: '1.15rem'}}>상품</h1>
          <Link to='/product'>전체보기</Link>
        </div> */}
        <Title title='상품' needsBtn={true} link='/product'/>
        <ProductSlider/>

        <Title title='이벤트' needsBtn={true} link='/event'/>
        {/* <h1 style={{fontSize: '1.15rem', marginTop: '2em'}}>이벤트</h1> */}
        <EventSlider/>
      </div>
    </div>
  );
}

export default Main;