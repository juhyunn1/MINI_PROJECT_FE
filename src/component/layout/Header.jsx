import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../state/loginState';
import styles from "./Header.module.css"

function Header() {
  const isLoggedin = useRecoilValue(loginState);
  const [link, setLink] = useState('');

  useEffect(() => {
    isLoggedin ? setLink('profile') : setLink('login');
  }, [isLoggedin])

  return (
    <header>
      <div class='center' className={styles.logo}>
        <Link to="/">
          <img src='./assets/images/logo.png' alt="emart 24 logo"/>
          <h1>이마트 24</h1> {/* h1 태그는 있으면 좋다, css로 텍스트 숨김 */}
        </Link>
      </div>

      <div className={styles.menu}>
        <Link to={link}>
          <ion-icon name="person-circle-outline"></ion-icon>
        </Link>
      </div>
    </header>
  );
}

export default Header;