import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userInfo } from '../../state/userInfo';
import { loginState } from '../../state/loginState';
import { useNavigate } from 'react-router-dom';
import Title from '../ui/Title';
import Swal from 'sweetalert2';

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [temp, setTemp] = useState('')

  const user = useRecoilValue(userInfo);
  const email = user.email;
  const setLoginState = useSetRecoilState(loginState);
  const setUserInfo = useSetRecoilState(userInfo);
  // console.log(email)

  const navigate = useNavigate();
  
  useEffect(() => {
    axios.get('http://localhost:3001/users', { // email로 가입된 데이터 가져와서
      params: {
        email: email
      }
    })
    .then(res => {
      console.log(res);
      if(res.data.length !== 0) // 데이터가 있으면
        setOldPassword(res.data[0].password); // 해당 계정의 비밀번호 가져옴
    })
    .catch(err => console.log(err))
  }, [email])

  const handleChange = (e) => {
    e.preventDefault();
    console.log(oldPassword, newPassword, temp)
    
    if(temp !== '' && newPassword !== '' && oldPassword === temp) {
      axios.put(`http://localhost:3001/users/${user.id}`, {
        // id: user.id,
        name: user.name, 
        email: email,
        password: newPassword,
      })
      .then(res => {
        console.log(res);
        Swal.fire({
          title: '비밀번호가 변경되었습니다.',
          icon: 'success',
          confirmButtonColor: 'var(--yellow)'
        });
        
        // 로그아웃 하고
        setLoginState(false);
        setUserInfo({
          id: -1,
          name: '',
          email: '',
        }); 
        navigate('/login'); // 로그인 화면으로 이동
      })
      .catch(err => console.log(err))
    }
    else
      if(temp === '' || newPassword === '')
        Swal.fire({
          title: '내용을 입력해 주세요.',
          icon: 'warning',
          confirmButtonColor: 'var(--yellow)'
        });
      else if(oldPassword !== temp)
        Swal.fire({
          title: '비밀번호가 틀렸습니다.',
          icon: 'warning',
          confirmButtonColor: 'var(--yellow)'
        });
  }

  return (
    <div className='container center flex-col'>
      <Title title='비밀번호 변경'/>
      <form className='box'>
        <div className='boxLabel'>기존 비밀번호</div>
        <input className='boxInput mb-16' type='password' value={temp} onChange={(e) => setTemp(e.currentTarget.value)}/>

        <div className='boxLabel'>변경할 비밀번호</div>
        <input className='boxInput' type='password' value={newPassword} onChange={(e) => setNewPassword(e.currentTarget.value)}/>

        <div style={{height: 'calc(100% - 234px'}}></div>

        <div className='button mb-16' onClick={handleChange}>완료</div>
        <div className='button' onClick={() => navigate(-1)}>돌아가기</div>
      </form>
    </div>

  );
}

export default ChangePassword;