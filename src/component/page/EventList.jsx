import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from '../ui/Title';
import EventCard from '../ui/EventCard';

const EventList = () => {
  const [eventData, setEventData] = useState();

  useEffect(() => {
    axios.get('http://localhost:3001/events')
    .then(res => {
      console.log(res);
      setEventData(res.data.reverse()); // 최신순으로 정렬
    })
    .catch(err => console.log(err))
  }, []);

  // const EventList = styled.div`
  //   width: 100%;
  //   padding-bottom: 60px;
  //   display: flex;
  //   flex-direction: column;
  //   row-gap: 32px;
  //   column-gap: 16px;
  // `;
	
  return (
    <div className='container'>
      <Title title='이벤트' discription='이마트24의 다양한 이벤트에 참여해보세요.'/>
      <div className='list'>
        {
          eventData && eventData.map( data => (
            <EventCard key={data.id} data={data}/>
          ))
        }
      </div>
    </div>
  );
}

export default EventList;