import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userInfo } from '../../state/userInfo';
import CartCard from '../ui/CartCard';
import Title from '../ui/Title';
import { cartCountState } from '../../state/cartCountState';

function Cart() {
  const user = useRecoilValue(userInfo);
  const [cartData, setCartData] = useState([]);
  const [isChanged, setIsChanged] = useState(false); // 데이터 변경 감지
  const setCartCount = useSetRecoilState(cartCountState);
  let cartQty = 0;

  useEffect(() => {
    axios.get(`http://localhost:3001/carts?userId=${user.id}`)
    .then(res => {
      console.log(res);
      setCartData(res.data.reverse()); // 최신순으로 정렬
      setIsChanged(false) // 다음 변경을 위해 다시 false로
    })
    .catch(err => console.log(err))
  }, [user.id, isChanged]);
  
  if(cartData)
    for(let data of cartData) {
      console.log(data.qty);
      cartQty += data.qty;
    }
    setCartCount(cartQty);

  return (
    <div className='container'>
      <Title title='장바구니'/>
      <div className='list'>
        {
          cartData && cartData.map( data => (
            <CartCard key={data.id} data={data} setIsChanged={setIsChanged}/>
          ))
        }
      </div>
    </div>
  );
}

export default Cart;