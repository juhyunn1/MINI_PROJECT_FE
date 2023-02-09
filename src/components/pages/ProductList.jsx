import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Title from '../ui/Title';
import ProductCard from '../widgets/ProductCard';
import styles from './ProductList.module.css'

function Product() {
  const [productData, setProductData] = useState();

  useEffect(() => {
    axios.get('http://localhost:3001/products')
    .then(res => {
      console.log(res);
      setProductData(res.data);
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <div id={styles.productList} class='container'>
      <Title title='전체상품'/>
      {
        productData && productData.map( data => (
          <Link to={`./${data.id}`}>
            <ProductCard key={data.id} data={data}/>
          </Link>
        ))
      }
    </div>
  );
}

export default Product;