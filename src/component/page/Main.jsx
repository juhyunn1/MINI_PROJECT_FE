import React from 'react';
import ProductSliderTitle from '../ui/ProductSliderTitle';
import EventSlider from '../widget/EventSlider';
import ProductSlider from '../widget/ProductSlider';

function Main() {
  return (
    <div className='container' style={{maxWidth: '100%', width: '100%'}}>
      {/* <Title/> */}
      <EventSlider/>

      <div className='productSliderWrap'>
        <ProductSliderTitle title='행사상품' needsBtn={true} link='/product'/>
        <ProductSlider/>
      </div>

      
    </div>
  );
}

export default Main;