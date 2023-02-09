import React from 'react';
import { Link } from 'react-router-dom';

function Title({title='default', isView=true, needsBtn=false, link=''}) {
  if(!isView) // isView가 false이면
    return null; // 렌더링 X
  
  return (
    <div class='spread'>
      <h1 style={{fontSize: '1.15rem'}}>{title}</h1>
      {
        needsBtn ? (<Link to={link}>전체보기</Link>) : null
      }
    </div>
  );
}

export default Title;