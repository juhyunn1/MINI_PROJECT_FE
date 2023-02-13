import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductMain from '../ui/ProductMain';
import Title from '../ui/Title';

function Product() {
  const { productId } = useParams(); // 주소의 파라미터 사용
  // console.log(productId)
  const [productData, setProductData] = useState(); // 상품 데이터

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${productId}`) // 현재 페이지 상품 데이터 가져와서
    .then(res => {
      console.log(res.data);
      setProductData(res.data);
    })
    .catch(err => console.log(err))
  }, [productId]);

  return (
    <div className='container'>
      <Title title='행사상품' discription='이마트24가 준비한 이달의 행사상품을 만나보세요.'/>
      {
        productData && (
          <ProductMain product={productData}/>
        )
      }
    </div>
  );
}

export default Product;