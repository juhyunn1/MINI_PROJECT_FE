import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css'

function ProductCard({data}) {
  // const link = data == null ? '/product' : `/product/${data.id}`;
  // const imgSrc = data == null ? './assets/images/blankImage.png' : data.thumbnail;
  // const imgAlt = data == null ? '' : data.name;
  // const name = data == null ? '' : data.name;
  // const price = data == null ? '' : `${data.price}원`;

  return (
    <Link to={`/product/${data.id}`}>
      <div className={styles.productCard}>
        <div>
          <img src={data.thumbnail} alt={data.name}/>
          <div className={styles.productCardTitle}>{data.name}</div>
          <div className={styles.productCardPrice}>{data.price}원</div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;