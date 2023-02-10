import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import styles from './ProductSlider.module.css'
function ProductSlider() {
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
    <div className={styles.productSlider}>
      {
        productData && productData.map( data => (
          <ProductCard key={data.id} data={data}/>
        )).slice(0, 10)
      }
      {/* <div className={styles.moreBtn} style={{display: 'inline-block'}}>더보기</div> */}
    </div>
  );
}

export default ProductSlider;