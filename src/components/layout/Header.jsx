import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../state/loginState';
import style from "./Header.module.css"
// import logo from 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Emart_24_logo.svg/1280px-Emart_24_logo.svg.png';

function Header() {
  const isLoggedin = useRecoilValue(loginState);
  const [link, setLink] = useState('');

  useEffect(() => {
    isLoggedin ? setLink('profile') : setLink('login');
  }, [])

  return (
    <header>
      <div class='center' className={style.logo}>
        <Link to="/">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Emart_24_logo.svg/1280px-Emart_24_logo.svg.png' alt=""/>
          <h1>스타벅스 코리아</h1> {/* h1 태그는 있으면 좋다, css로 텍스트 숨김 */}
        </Link>
      </div>

      <div className={style.menu}>
        <Link to={link}>
          {/* <img src='https://emart24.co.kr/assets/assets/imgs/menuBar.png' alt=''/> */}
          <ion-icon name="person-circle-outline"></ion-icon>
        </Link>
      </div>
    </header>
  );
}

export default Header;