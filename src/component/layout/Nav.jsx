import React from "react";
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../state/loginState';
import styles from "./Nav.module.css";
import navMenuData from "../../data/navMenuData";
import NavMenu from "../ui/NavMenu";

const Nav = ({isOpen, setIsNavOpen}) => {
  const isLoggedin = useRecoilValue(loginState);
  
  const link = isLoggedin ? '/profile' : '/login';
  const name = isLoggedin ? '프로필' : '로그인';

  return (
    <ul id={styles.menuList} className={isOpen ? styles.open : styles.close}>
      
      <Link to={link} onClick={() => setIsNavOpen(false)}>
        <li>{name}</li>
      </Link>
      {
        navMenuData && navMenuData.map( data => (
          <Link to={data.link} key={data.id} onClick={() => setIsNavOpen(false)}>
            <li>{data.name}</li>
          </Link>
        )).slice(2, )
      }
    </ul>
  );
};

export default Nav;