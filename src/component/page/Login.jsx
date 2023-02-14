import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { loginState } from '../../state/loginState';
import { userInfo } from '../../state/userInfo';
import Title from '../ui/Title';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [temp, setTemp] = useState();

  const setLoginState = useSetRecoilState(loginState);
  const setUserInfo = useSetRecoilState(userInfo);

  const navgiate = useNavigate();
  
  useEffect(() => {
    axios.get('http://localhost:3001/users', { // email로 가입된 데이터 가져와서
      params: {
        email: email
      }
    })
    .then(res => {
      console.log(res);
      if(res.data.length !== 0) // 데이터가 있으면
        setTemp(res.data[0]); // 해당 데이터 가져옴
    })
    .catch(err => console.log(err))
  }, [email])

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password, temp);

    if(temp && password === temp.password) {
      alert('로그인에 성공하였습니다.');
      setLoginState(true); // 로그인된 상태로 변경
      setUserInfo({ // 사용자 정보 저장
        id: temp.id,
        name: temp.name,
        email: temp.email,
      })
      window.location.replace('/'); // 메인화면으로 이동
    }
    else
      alert('로그인에 실패하였습니다.');
  }

  return (
    <div className='container center flex-col'>
      <Title title='로그인'/>
      <form className='box'>
        <div className='boxLabel'>이메일</div>
        <input className='boxInput mb-16' type='email' value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>

        <div className='boxLabel'>비밀번호</div>
        <input className='boxInput' type='password' value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>

        <div style={{height: 'calc(100% - 234px'}}></div>

        <div className='button mb-16' onClick={handleLogin}>로그인</div>
        <div className='button' onClick={() => navgiate('/join')}>회원가입</div>
      </form>
    </div>

  );
}

export default Login;