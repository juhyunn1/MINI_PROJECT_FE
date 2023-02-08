import React from 'react';
import style from './ProductCard.module.css'

function ProductCard({data}) {
  return (
    <div className={style.card}>
      <div>
        <img src={data.thumbnail} alt={data.name}/>
        <div className={style.cardTitle}>{data.name}</div>
        <div className={style.cardPrice}>{data.price}원</div>
      </div>
    </div>
  );
}

export default ProductCard;