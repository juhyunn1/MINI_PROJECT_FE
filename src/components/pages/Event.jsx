import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Title from '../ui/Title';
import styles from './Event.module.css';

const Event = () => {
  const { eventId } = useParams(); // 주소의 파라미터 사용
  // console.log(productId)
  const [eventData, setEventData] = useState(); // 상품 데이터

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/events/${eventId}`) // 현재 페이지 상품 데이터 가져와서
    .then(res => {
      console.log(res.data);
      setEventData(res.data);
    })
    .catch(err => console.log(err))
  }, [eventId]);

  return (
    <div className='container'>
      <Title title='이벤트' discription='이마트24의 다양한 이벤트에 참여해보세요.'/>
      {
        eventData && (
          <>
            <div className={styles.name}>
              <p>{eventData.name}</p>
              <p>{eventData.startDate} ~ {eventData.endDate}</p>
            </div>

            <img className={styles.image} src={eventData.detail} alt={eventData.name}/>
          </>
        )
      }
      <div id={styles.listBtn} className='button' onClick={() => navigate(-1)}>목록</div>
    </div>
  );
}

export default Event;