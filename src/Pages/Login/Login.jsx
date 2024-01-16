import React from 'react';
import logo from '../../assets/logo.svg';
import './Login.css';
import { loginUrl } from '../../Provider/spotify';

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
