import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userInfo } from '../../state/userInfo';
import { loginState } from '../../state/loginState';

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [temp, setTemp] = useState('')

  const user = useRecoilValue(userInfo);
  const email = user.email;
  const setLoginState = useSetRecoilState(loginState);
  const setUserInfo = useSetRecoilState(userInfo);
  // console.log(email)
  
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
        alert('비밀번호가 변경되었습니다.');
        
        // 로그아웃 하고
        setLoginState(false);
        setUserInfo({
          id: -1,
          name: '',
          email: '',
        }); 
        window.location.replace('/login'); // 로그인 화면으로 이동
      })
      .catch(err => console.log(err))
    }
    else
      if(temp === '' || newPassword === '')
        alert('내용을 입력해 주세요.');
      else if(oldPassword !== temp)
        alert('비밀번호가 틀렸습니다.');
  }

  return (
    <div class='container'>
      <form>
        <div>기존 비밀번호</div>
        <input type='password' value={temp} onChange={(e) => setTemp(e.currentTarget.value)}/>

        <div>변경할 비밀번호</div>
        <input type='password' value={newPassword} onChange={(e) => setNewPassword(e.currentTarget.value)}/>

        <div onClick={handleChange}>완료</div>
      </form>
    </div>

  );
}

export default ChangePassword;