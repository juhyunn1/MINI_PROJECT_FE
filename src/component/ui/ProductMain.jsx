import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userInfo } from '../../state/userInfo';
import styles from './ProductMain.module.css';
import { cartCountState } from '../../state/cartCountState';
import { loginState } from '../../state/loginState';

function ProductMain({product}) {
  const user = useRecoilValue(userInfo);
  const isLoggedin = useRecoilValue(loginState);
  const [cartData, setCartData] = useState([]);
  const [productQty, setProductQty] = useState(0); // 현재 사용자의 장바구니에 있는 현재 페이지 상품의 qty
  const [cartCount, setCartCount] = useRecoilState(cartCountState); // 장바구니 전체 개수 관리

  useEffect(() => {
    axios.get(`http://localhost:3001/carts?userId=${user.id}&&productId=${product.id}`)
    .then(res => {
      console.log(res.data.length);
      setCartData(res.data);

      if(res.data.length !== 0) // 현재 사용자의 장바구니에 현재 페이지 상품이 있으면
        setProductQty(res.data[0].qty); // 장바구니에 현재 qty
      else
        setProductQty(0);
    })
    .catch(err => console.log(err))
  }, [user.id, product.id, productQty]);

  // cartData && console.log(cartData.length, cartData[0].qty);
  console.log(productQty)

  // if(cartData)
  //   for(let data of cartData) {
  //     console.log(data.productId);
  //     productOnCart.push(data.productId); // 장바구니에 있는 상품 리스트 설정
  //   }
  
  
  const handleAddCart = () => {
    if(isLoggedin) {
      if(cartData.length !== 0) { // 현재 사용자의 장바구니에 현재 페이지 상품이 있으면
        axios.put(`http://localhost:3001/carts/${cartData[0].id}`, {
          id: cartData[0].id,
          productId: product.id, 
          userId: user.id,
          qty: productQty + 1, // 개수 하나 추가
        })
        .then(res => {
          console.log(res);
          setProductQty(productQty + 1)
        })
        .catch(err => console.log(err))
        
      }
      else {
        axios.post('http://localhost:3001/carts', { // 없으면 새로 추가
          productId: product.id, 
          userId: user.id,
          qty: 1,
        })
        .then(res => {
          console.log(res);
          setProductQty(1)
          // alert('상품이 장바구니에 추가되었습니다.else');
        })
        .catch(err => console.log(err))
      }

      setCartCount(cartCount + 1)

      let willMove = window.confirm('상품이 장바구니에 추가되었습니다.\n장바구니로 이동하시겠습니까?');
      if(willMove)
        window.location.replace('/cart');
    }
    else {
      alert('로그인이 필요합니다.');
      window.location.replace('/login');
    }
  }

  return (
    <div className={styles.wrap}>
      <img className={styles.image} src={product.thumbnail} alt={product.name}/>
      <div className={styles.context}>
        <h1 className={styles.title}>
          {product.name}
          <p>{product.price}원</p>
        </h1>
        <p className={styles.description}>{product.description}</p>
        <div className='button' onClick={handleAddCart}>ADD CART</div>
      </div>
    </div>
  )
}

export default ProductMain;