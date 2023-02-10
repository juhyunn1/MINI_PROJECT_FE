import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Event() {
  const { eventId } = useParams(); // 주소의 파라미터 사용
  // console.log(productId)
  const [eventData, setEventData] = useState(); // 상품 데이터

  useEffect(() => {
    axios.get(`http://localhost:3001/events/${eventId}`) // 현재 페이지 상품 데이터 가져와서
    .then(res => {
      console.log(res.data);
      setEventData(res.data);
    })
    .catch(err => console.log(err))
  }, [eventId]);

  return (
    <>Event</>
  );
}

export default Event;