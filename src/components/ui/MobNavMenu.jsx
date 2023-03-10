import React from 'react';
import { useRecoilValue } from 'recoil';
import { cartCountState } from '../../state/cartCountState';
import styles from './MobNavMenu.module.css';
import arrowUp from '../../assets/images/icons/arrowUp.png';

function MobNavMenu({name}) {
  const cartCount = useRecoilValue(cartCountState); // CartCount atom 상태값 읽어옴
  console.log(cartCount)

  const icon = name === '프로필' || name === '로그인' ? 'person' : name === '상품' ? 'cube' : name === '이벤트' ? 'gift' : 'cart';

  return (
    <li className={styles.mobNavMenu}>
      <ion-icon name={icon}></ion-icon>
      <h1>{name}</h1>
      {
        name === '장바구니' && cartCount !== 0 ? <div className={styles.cartBadge}>{cartCount}</div> : '' // 카트에 상품이 있다면 뱃지 표시
      }
      <img src={arrowUp} alt=''/>
    </li>
  );
}

export default MobNavMenu;