import React from 'react';
import logo from './logo.svg';
import './Login.css';
import { loginUrl } from './spotify';

function Login() {
  return (
    <div className='login'>
      <div className='logo'>
        <img src={logo} alt='logo'></img>
      </div>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
