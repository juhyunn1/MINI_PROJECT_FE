import React from 'react';
import { Link } from 'react-router-dom';
import styles from './EventCard.module.css';

function EventCard({data}) {
  return (
    <Link to={`/event/${data.id}`}>
      <div className={styles.eventCard}>
        <div>
          <img src={data.thumbnail} alt={data.name}/>
        </div>
        <p>
          <span>{data.name}</span><br/><span>{data.startDate} ~ {data.endDate}</span>
        </p>
      </div>
    </Link>
  );
}

export default EventCard;