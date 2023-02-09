import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './EventSlider.module.css'

function EventSlider() {
  const [eventData, setEventData] = useState();

  useEffect(() => {
    axios.get('http://localhost:3001/events')
    .then(res => {
      console.log(res);
      setEventData(res.data);
    })
    .catch(err => console.log(err))
  }, []);

  // console.log(eventData)

  // const eventSlider = () => {
  //   // const wrap = document.getElementById('wrap');
  //   const card = document.getElementsByClassName('eventCard');

  //   let i = 0;
  //   setInterval(() => {
  //     console.log(i)
  //     card[i].classList.add('now');

  //     if(i == 0)
  //       card[card.length-1].classList.remove('now');
  //     else
  //       card[i-1].classList.remove('now');
      
  //     i = ++i == card.length ? 0 : i;
  //   }, 4000)
  // }
  
  // eventSlider();

  return (
    <div className={style.eventSlider}>
      {
        eventData && eventData.map( data => (
          <div class='eventCard' key={data.id}>{data.name}</div>
        ))
      }
    </div>
  );
}

export default EventSlider;