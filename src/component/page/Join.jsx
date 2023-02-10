import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Join() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [canJoin, setCanJoin] = useState(false); // 회원가입 가능 여부

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
        alert('회원가입이 완료 되었습니다.');
        window.location.replace('/login'); // 로그인 화면으로 이동
      })
      .catch(err => console.log(err))
    }
    else
      if(name === '' || email === '' || password === '')
        alert('내용을 입력해 주세요.');
      else if(!canJoin)
        alert('이미 가입된 이메일 입니다.');
  }

  return (
    <div class='container'>
      <form>
        <div>이름</div>
        <input type='text' value={name} onChange={(e) => setName(e.currentTarget.value)}/>

        <div>이메일</div>
        <input type='email' value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>

        <div>비밀번호</div>
        <input type='password' value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>

        <div onClick={handleJoin}>완료</div>
      </form>
    </div>

  );
}

export default Join;