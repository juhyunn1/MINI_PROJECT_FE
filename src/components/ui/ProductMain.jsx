import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userInfo } from '../../state/userInfo';
import styles from './ProductMain.module.css';
import { cartCountState } from '../../state/cartCountState';
import { loginState } from '../../state/loginState';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function ProductMain({product}) {
  const user = useRecoilValue(userInfo);
  const isLoggedin = useRecoilValue(loginState);
  const [cartData, setCartData] = useState([]);
  const [productQty, setProductQty] = useState(0); // 현재 사용자의 장바구니에 있는 현재 페이지 상품의 qty
  const [cartCount, setCartCount] = useRecoilState(cartCountState); // 장바구니 전체 개수 관리

  const navigate = useNavigate();

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
          // Swal.fire('상품이 장바구니에 추가되었습니다.else');
        })
        .catch(err => console.log(err))
      }

      setCartCount(cartCount + 1)

      // let willMove = window.confirm('상품이 장바구니에 추가되었습니다.\n장바구니로 이동하시겠습니까?');
      // if(willMove)
      //   navigate('/cart');

      Swal.fire({
        title: '상품이 장바구니에 추가되었습니다.',
        text: '장바구니로 이동하시겠습니까?',
        icon: 'warning',
        
        showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
        confirmButtonColor: 'var(--yellow)', // confrim 버튼 색깔 지정
        cancelButtonColor: '#d33', // cancel 버튼 색깔 지정
        confirmButtonText: '확인', // confirm 버튼 텍스트 지정
        cancelButtonText: '취소', // cancel 버튼 텍스트 지정
        
        reverseButtons: true, // 버튼 순서 거꾸로
          
      })
      .then (result => { // 만약 Promise 리턴을 받으면
        if (result.isConfirmed) // 만약 모달창에서 confirm 버튼을 눌렀다면
          navigate('/cart');
      });
    }
    else {
      Swal.fire({
        title: '로그인이 필요합니다.',
        icon: 'warning',
        confirmButtonColor: 'var(--yellow)'
      });
      navigate('/login');
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