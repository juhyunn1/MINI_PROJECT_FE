import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
// import { loginState } from '../../state/loginState';
import styles from "./Header.module.css"
import MobNav from './MobNav';

function Header() {
  // const isLoggedin = useRecoilValue(loginState);
  // const [link, setLink] = useState('');

  // useEffect(() => {
  //   isLoggedin ? setLink('profile') : setLink('login');
  // }, [isLoggedin])

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
      <MobNav isOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>

      <div className={styles.logo} onClick={() => setIsNavOpen(false)}>
        <Link to="/">
          <img src='./assets/images/logo.png' alt="emart24 logo"/>
          <h1>이마트 24</h1> {/* h1 태그는 있으면 좋다, css로 텍스트 숨김 */}
        </Link>
      </div>

      <div className={styles.navBtn} onClick={handleNav}>
        <img src={!isNavOpen ? './assets/images/icon/menuBar.png' : './assets/images/icon/close.png'} alt="navBtn"/>
      </div>
    </header>
  );
}

export default Header;