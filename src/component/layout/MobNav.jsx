import React, { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../state/loginState';
import { userInfo } from '../../state/userInfo';
import styles from "./MobNav.module.css";
import navMenuData from "../../data/navMenuData";
import MobNavMenu from "../ui/MobNavMenu";

const MobNav = ({isOpen, setIsNavOpen}) => {
  const isLoggedin = useRecoilValue(loginState);
  const user = useRecoilValue(userInfo);
  
  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(0);

  useEffect(() => {
    if(isLoggedin) {
      setStartIdx(1);
      setEndIdx(navMenuData.length);
    }
    else {
      setStartIdx(0);
      setEndIdx(navMenuData.length - 2);
    }
  }, [isLoggedin])

  return (
    <div id={styles.mobNav} className={isOpen ? styles.open : styles.close}>
      <div>
        { isLoggedin ? <span>{user.name}</span> : <Link to='/login' onClick={() => setIsNavOpen(false)}>로그인</Link> }
        { isLoggedin ? ' 님 환영합니다!' : '이 필요합니다.' }
      </div>
      
      <ul>
        {/* <Link to={link} onClick={() => setIsNavOpen(false)}>
          <MobNavMenu name={name}/>
        </Link>
        {
          navMenuData && navMenuData.map( data => (
            <Link to={data.link} key={data.id} onClick={() => setIsNavOpen(false)}>
              <MobNavMenu name={data.name}/>
            </Link>
          )).slice(2, 4)
        }
        {
          isLoggedin ? (
            <Link to='/cart' onClick={() => setIsNavOpen(false)}>
              <MobNavMenu name='장바구니'/>
            </Link>
          )
          : ''
        } */}

        {
          navMenuData && navMenuData.map( data => (
            <Link to={data.link} key={data.id} onClick={() => setIsNavOpen(false)}>
              <MobNavMenu name={data.name}/>
            </Link>
          )).slice(startIdx, endIdx)
        }
      </ul>
    </div>
  );
};

export default MobNav;