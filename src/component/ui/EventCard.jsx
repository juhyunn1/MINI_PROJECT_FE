import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EventCard.module.css';

function EventCard({data}) {
  return (
    <Link to={`/event/${data.id}`}>
      <div className={styles.eventCard}>
        <img src={data.thumbnail} alt={data.name}/>
        <p>
          <span>{data.name}</span><br/><span>{data.startDate} ~ {data.endDate}</span>
        </p>
      </div>
    </Link>
  );
}

export default EventCard;