import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ProductMain from '../ui/ProductMain';

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
      {
        productData && (
          <ProductMain product={productData}/>
        )
      }
    </div>
  );
}

export default Product;