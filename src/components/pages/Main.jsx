import React from 'react';
import { Link } from 'react-router-dom';
import EventList from '../widgets/EventList';
import ProductList from '../widgets/ProductList';
import style from "./Main.module.css"

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
        <h2>상품</h2>
        <ProductList/>

        <h2>이벤트</h2>
        <EventList/>
      </div>
    </div>
  );
}

export default Main;