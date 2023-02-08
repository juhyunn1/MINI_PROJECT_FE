import React, { useState } from 'react';
import style from "./Login.module.css"
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmail = (e) => {
    setEmail(e.currentTarget.value);
  }

  const handlePassword = (e) => {
    setPassword(e.currentTarget.value);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    // setIsLogin(true);
    // setUserName(userNameRef.current.value);
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(email, password);
    // setIsLogin(true);
    // setUserName(userNameRef.current.value);
  }

  return (
    <div class='container'>
      <form onSubmit={handleLogin} className={style.loginForm}>
        <label>Email</label>
        <input type='email' value={email} onChange={handleEmail}/>
        <label>Password</label>
        <input type='password' value={password} onChange={handlePassword}/>
        <button onClick={handleLogin}>로그인</button>
        <button onClick={handleSignIn}>회원가입</button>
      </form>
    </div>

  );
}

export default Login;