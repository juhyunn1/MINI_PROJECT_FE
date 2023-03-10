import React from 'react';
import ProductSliderTitle from '../ui/ProductSliderTitle';
import AppDownload from '../widget/AppDownload';
import EventSlider from '../widget/EventSlider';
import ProductSlider from '../widget/ProductSlider';

function Main() {
  return (
    <div className='container' style={{maxWidth: '100%', width: '100%'}}>
      {/* <Title/> */}
      <EventSlider/>

      <div className='productSliderWrap'>
        <ProductSliderTitle title='íėŽėí' needsBtn={true} link='/product'/>
        <ProductSlider/>
      </div>

      <AppDownload/>
    </div>
  );
}

export default Main;