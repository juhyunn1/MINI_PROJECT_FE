import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import style from './ProductList.module.css'

function ProductList() {
  const [productData, setProductData] = useState();

  useEffect(() => {
    axios.get('http://localhost:3001/products')
    .then(res => {
      console.log(res);
      setProductData(res.data);
    })
    .catch(err => console.log(err))
  }, []);

  // console.log(productData)

  return (
    // <div style={{ overflow: 'auto', whiteSpace: 'nowrap'}}>
    <div className={style.cardWrap}>
      {
        productData && productData.map( data => (
            <ProductCard key={data.id} data={data}/>
        ))
      }
    </div>
  );
}

export default ProductList;