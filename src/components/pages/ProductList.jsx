import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Title from '../ui/Title';
import ProductCard from '../ui/ProductCard';
import styles from './ProductList.module.css'
import Paging from '../ui/Paging';

function Product() {
  const [productData, setProductData] = useState();
  const [total, setTotal] = useState(0);

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const cardPerPage = 12; // 페이지 당 카드 수 
  const [firstIdx, setFirstIdx] = useState(1);
  const [lastIdx, setLastIdx] = useState(1);
  const [currentData, setCurrentData] = useState();

  useEffect(() => { // 첫 렌더링 때 데이터 가져온다
    axios.get('http://localhost:3001/products')
    .then(res => {
      console.log(res);
      setProductData(res.data.reverse());
      setTotal(res.data.length);
      // console.log(total)
    })
    .catch(err => console.log(err))
  }, []);

  useEffect(() => { // currentPage가 바뀌면 firstIdx, lastIdx 설정
    setFirstIdx((currentPage - 1) * cardPerPage);
    setLastIdx(currentPage * cardPerPage);
  }, [currentPage]);

  useEffect(() => { // 현재 페이지 데이터 설정
    if(productData) {
      setCurrentData(productData.slice(firstIdx, lastIdx));
      // console.log(currentData);
    }
  }, [productData, firstIdx, lastIdx]);

  return (
    <div className='container'>
      <Title title='행사상품' discription='이마트24가 준비한 이달의 행사상품을 만나보세요.'/>
      <div id={styles.productList}>
        {
          currentData && currentData.map( data => (
            <ProductCard key={data.id} data={data}/>
          ))
        }
      </div>
      <Paging page={currentPage} total={total} setPage={setCurrentPage}/>
    </div>
  );
}

export default Product;