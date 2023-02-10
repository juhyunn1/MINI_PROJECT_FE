import React from 'react';
import Title from '../ui/Title';
import EventSlider from '../widget/EventSlider';
import ProductSlider from '../widget/ProductSlider';

function Main() {
  return (
    <div class='container'>
      <div>
        <Title title='이벤트' needsBtn={true} link='/event'/>
        <EventSlider/>

        <Title title='상품' needsBtn={true} link='/product'/>
        <ProductSlider/>
      </div>
    </div>
  );
}

export default Main;