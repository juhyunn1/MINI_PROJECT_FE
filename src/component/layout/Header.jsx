import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../state/loginState';
import styles from "./Header.module.css"
import Nav from './Nav';

function Header() {
  const isLoggedin = useRecoilValue(loginState);
  const [link, setLink] = useState('');

  useEffect(() => {
    isLoggedin ? setLink('profile') : setLink('login');
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
    // <header style={isNavOpen ? {backgroundColor: 'var(--yellow)'} : {background: 'rgba(255, 255, 255, 0.85)'}}>
    // <header class={isNavOpen ? 'headerColorChange' : ''}>
    <header>
      <Nav isOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>

      <div className={styles.logo} onClick={() => setIsNavOpen(false)}>
        <Link to="/">
          <img src='./assets/images/logo.png' alt="emart 24 logo"/>
          <h1>이마트 24</h1> {/* h1 태그는 있으면 좋다, css로 텍스트 숨김 */}
        </Link>
      </div>

      <div className={styles.navBtn} onClick={handleNav}>
        {
          !isNavOpen ? 'm' : "c"
        }
        {/* <Link to={link}>
          <ion-icon name="person-circle-outline"></ion-icon>
        </Link> */}
      </div>
    </header>
  );
}

export default Header;