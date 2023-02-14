import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from '../ui/Title';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Join() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [canJoin, setCanJoin] = useState(false); // 회원가입 가능 여부

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/users', { // email로 가입된 데이터 가져와서
      params: {
        email: email
      }
    })
    .then(res => {
      console.log(res.data.length);
      if(res.data.length === 0 && email !== '') // 데이터가 없으면
        setCanJoin(true);
      else
        setCanJoin(false);
        
      // console.log(email, canJoin)
    })
    .catch(err => console.log(err))
  }, [email])

  const handleJoin = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    
    // 조건 주어야 함 >> 이메일로 가입된 데이터 있는지, 칸이 다 채워졌는지
    if(canJoin && name !== '' && email !== '' && password !== '') {
      axios.post('http://localhost:3001/users', {
        name: name, 
        email: email,
        password: password,
      })
      .then(res => {
        console.log(res);
        Swal.fire({
          title: '회원가입이 완료 되었습니다.',
          icon: 'success',
          confirmButtonColor: 'var(--yellow)'
        });
        navigate('/login'); // 로그인 화면으로 이동
      })
      .catch(err => console.log(err))
    }
    else
      if(name === '' || email === '' || password === '')
      Swal.fire({
        title: '내용을 입력해주세요.',
        icon: 'warning',
        confirmButtonColor: 'var(--yellow)'
      });
      else if(!canJoin)
        Swal.fire({
          title: '이미 가입된 이메일 입니다.',
          icon: 'warning',
          confirmButtonColor: 'var(--yellow)'
        });
  }

  return (
    <div className='container center flex-col'>
      <Title title='회원가입'/>
      <form className='box'>
        <div className='boxLabel'>이름</div>
        <input className='boxInput mb-16' type='text' value={name} onChange={(e) => setName(e.currentTarget.value)}/>

        <div className='boxLabel'>이메일</div>
        <input className='boxInput mb-16' type='email' value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>

        <div className='boxLabel'>비밀번호</div>
        <input className='boxInput' type='password' value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
        
        <div style={{height: 'calc(100% - 259px'}}></div>

        <div className='button' onClick={handleJoin}>완료</div>
      </form>
    </div>

  );
}

export default Join;