import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './EventSlider.module.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function EventSlider() {
  const [eventData, setEventData] = useState();

  useEffect(() => {
    axios.get('http://localhost:3001/events')
    .then(res => {
      console.log(res);
      setEventData(res.data.reverse()); // 최신순으로 정렬
    })
    .catch(err => console.log(err))
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover : true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
	  //vertical : true, // 세로 방향 슬라이드 옵션
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.eventSliderWrap}>
      {/* <img src='./assets/images/icons/event.png' alt='event'/> */}
      <Slider {...settings} dotsClass='dotColor' className={styles.eventSlider}>
        {
          eventData && eventData.map( data => (
            <Link to={`/event/${data.id}`} key={data.id}>
              <img src={data.thumbnail} alt={data.name}/>
            </Link>
          ))
        }
      </Slider>
    </section>
  );
}

export default EventSlider;