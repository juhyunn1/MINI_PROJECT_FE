import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { loginState } from '../../state/loginState';
import { userInfo } from '../../state/userInfo';

function Profile() {
  const user = useRecoilValue(userInfo);
  
  const setLoginState = useSetRecoilState(loginState);
  const setUserInfo = useSetRecoilState(userInfo);

  const handleLogout = () => {
    setLoginState(false);
    setUserInfo({
      id: -1,
      name: '',
      email: '',
      password: ''
    });

    window.location.replace('/'); // 메인화면으로 이동
  }

  return (
    <div class='container'>
      <div>이름 : {user.name}</div>
      <div>이메일 : {user.email}</div>

      <div onClick={handleLogout}>로그아웃</div>
    </div>
  );
}

export default Profile;