import React from 'react';
import style from './ProductCard.module.css'

function ProductCard({data}) {
  return (
    <div className={style.productCard}>
      <div>
        <img src={data.thumbnail} alt={data.name}/>
        <div className={style.productCardTitle}>{data.name}</div>
        <div className={style.productCardPrice}>{data.price}원</div>
      </div>
    </div>
  );
}

export default ProductCard;