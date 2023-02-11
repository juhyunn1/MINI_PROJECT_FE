import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css'

function ProductCard({data}) {
  const link = data == null ? '/product' : `/product/${data.id}`;
  const imgSrc = data == null ? './assets/images/icon/plus.png' : data.thumbnail;
  const imgAlt = data == null ? '' : data.name;
  const name = data == null ? '' : data.name;
  const price = data == null ? '' : `${data.price}원`;

  return (
    <Link to={link}>
      <div className={styles.productCard}>
          {
            data == null ? (
              <div className={styles.moreCard}>
                <ion-icon name="add-outline"></ion-icon>
                {/* <img src={imgSrc} alt={imgAlt}/> */}
                <div>상품 더보기</div>
              </div>
            )
            : (
              <div className={styles.normalCard}>
                <img src={imgSrc} alt={imgAlt}/>
                <div className={styles.productCardTitle}>{name}</div>
                <div className={styles.productCardPrice}>{price}</div>
              </div>
            )
          }
      </div>
    </Link>


  );
}

export default ProductCard;