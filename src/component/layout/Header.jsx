import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../state/loginState';
import styles from "./Header.module.css"
import MobNav from './MobNav';
import navMenuData from "../../data/navMenuData";
import { cartCountState } from '../../state/cartCountState';

function Header() {
  const isLoggedin = useRecoilValue(loginState);
  const cartCount = useRecoilValue(cartCountState);
  const [idx, setIdx] = useState(0);
  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(0);

  useEffect(() => {
    // isLoggedin ? setIdx(1) : setIdx(0);
    if(isLoggedin) {
      setStartIdx(1);
      setEndIdx(navMenuData.length);
    }
    else {
      setStartIdx(0);
      setEndIdx(navMenuData.length - 2);
    }
  }, [isLoggedin])

  const [isNavOpen, setIsNavOpen] = useState(false);
 
  const handleNav = () => {
    console.log(isNavOpen)
    setIsNavOpen(!isNavOpen);
  };
  
  useEffect(() => {
    console.log('useEffect: ', isNavOpen);
  }, [isNavOpen])

  return (
    <header className={isNavOpen ? styles.headerColorChange : ''}>
    {/* <header> */}
      <div className={styles.wrap}>
        <MobNav isOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>

        <div className={styles.logo} onClick={() => setIsNavOpen(false)}>
          <Link to="/">
            <img src='./assets/images/logo.png' alt="emart24 logo"/>
            <h1>이마트 24</h1> {/* h1 태그는 있으면 좋다, css로 텍스트 숨김 */}
          </Link>
        </div>

        {/* 데스크탑 */}
        <ul className={styles.menu}>
          {/* {
            navMenuData && (
              <Link to={navMenuData[idx].link}>
                <li>{navMenuData[idx].name}</li>
              </Link>
            )
          }
          
          {
            navMenuData && navMenuData.map( data => (
              <Link to={data.link}>
                <li>{data.name}</li>
              </Link>
            )).slice(2, 4)
          }

          {
            isLoggedin ? (
              <Link to='/cart'>
                <li>장바구니</li>
                { cartCount !== 0 ? <div className={styles.cartBadge}>{cartCount}</div> : '' }
              </Link>
            )
            : ''
          } */}

          {
            navMenuData && navMenuData.map( data => (
              <Link to={data.link} key={data.id}>
                <li>{data.name}</li>
              </Link>
            )).slice(startIdx, endIdx)
          }
        </ul>

        {/* 모바일 */}
        <div className={styles.navBtn} onClick={handleNav}>
          <img src={!isNavOpen ? './assets/images/icon/menuBar.png' : './assets/images/icon/close.png'} alt="navBtn"/>
        </div>
      </div>
    </header>
  );
}

export default Header;