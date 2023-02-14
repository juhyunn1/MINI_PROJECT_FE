import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './CartCard.module.css';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { cartCountState } from '../../state/cartCountState';
import Swal from 'sweetalert2';

function CartCard({data, setIsChanged}) { // carts 데이터
  const [productData, setProductData] = useState([]);
  const [productQty, setProductQty] = useState(0); // 현재 사용자의 장바구니에 있는 현재 페이지 상품의 qty
  const [cartCount, setCartCount] = useRecoilState(cartCountState); // 장바구니 전체 개수 관리

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${data.productId}`) // 현재 페이지 상품 데이터 가져와서
    .then(res => {
      console.log(res.data);
      setProductData(res.data);
    })
    .catch(err => console.log(err))
  }, [productQty, data.productId]);

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/carts/${data.id}`)
    .then(res => {
      console.log(res);
      Swal.fire({
        title: '해당 상품이 장바구니에서 삭제되었습니다.',
        icon: 'success',
        confirmButtonColor: 'var(--yellow)'
      });
      setIsChanged(true);
      setCartCount(cartCount - data.qty);
    })
    .catch(err => console.log(err))
    
  }

  const handleMinus = () => {
    if(data.qty > 1) {
      axios.put(`http://localhost:3001/carts/${data.id}`, {
        id: data.id,
        productId: data.productId, 
        userId: data.userId,
        qty: data.qty - 1,
      })
      .then(res => {
        console.log(res);
        // Swal.fire('상품을 하나 삭제하였습니다.');
        setProductQty(data.qty - 1); // 현재
        setIsChanged(true);
        setCartCount(cartCount - 1); // 전체
      })
      .catch(err => console.log(err))
    }
    else {
      Swal.fire({
        title: '최소 수량은 1개 입니다.',
        icon: 'warning',
        confirmButtonColor: 'var(--yellow)'
      });
    }
    

  }

  const handlePlus = () => {
    axios.put(`http://localhost:3001/carts/${data.id}`, {
      id: data.id,
      productId: data.productId, 
      userId: data.userId,
      qty: data.qty + 1, // 개수 하나 추가
    })
    .then(res => {
      console.log(res);
      // Swal.fire('상품을 하나 추가하였습니다.');
      setProductQty(data.qty + 1);
      setIsChanged(true);
      setCartCount(cartCount + 1);
    })
    .catch(err => console.log(err))

  }

  return (
    <div className={styles.cartCard}>
      <Link to={`/product/${data.productId}`}>
        <img src={productData.thumbnail} alt={productData.name}/>
      </Link>
      
      <div className={styles.context}>
        <div className={styles.delete}>
          <ion-icon name="trash-outline" onClick={handleDelete}></ion-icon>
        </div>
        <h2>{productData.name}</h2>
        <div>
          <p>{productData.price}원</p>
          <div className={styles.count}>
            <ion-icon name="remove-outline" onClick={handleMinus}></ion-icon>
            <p>{data.qty}개</p>
            <ion-icon name="add-outline" onClick={handlePlus}></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;