import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../ui/ProductCard';
import styles from './ProductSlider.module.css';

function ProductSlider() {
  const [productData, setProductData] = useState();

  useEffect(() => {
    axios.get('http://localhost:3001/products')
    .then(res => {
      console.log(res);
      setProductData(res.data.reverse()); // 최신순으로 정렬
    })
    .catch(err => console.log(err))
  }, []);

  // if(productData)
  //   console.log(productData.reverse())

  return (
    <section className={styles.productSlider}>
      {
        productData && productData.map( data => (
          <ProductCard key={data.id} data={data}/>
        )).slice(0, 10)
      }
      <ProductCard/>
    </section>
  );
}

export default ProductSlider;