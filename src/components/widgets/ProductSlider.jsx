import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import styles from './ProductSlider.module.css'
import { Link } from 'react-router-dom';

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
    // <div style={{ overflow: 'auto', whiteSpace: 'nowrap'}}>
    <div className={styles.productSlider}>
      {
        productData && productData.map( data => (
          <Link key={data.id} to={`./product/${data.id}`}>
            <ProductCard data={data}/>
          </Link>
        )).slice(0, 10)
      }
    </div>
  );
}

export default ProductSlider;