import React from 'react';
import './Login.css'
import styled from 'styled-components';
import { Button } from '@mui/material';
import {FaUser,FaLock} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Registration from './Registration';
const Login = () => {

  
  return (

   <div className='body'>
    <div className='wrapper'>
    <form action=''>
      <h1>Login</h1>
      <div className='input-box'>
        <input type='text' placeholder='UserName' required />
        <FaUser className='icon'/>
      </div>
      <div className='input-box'>
        <input type='password' placeholder='Password' required />
        <FaLock className='icon'/>
      </div>
    </form>
    <div className='remember-forgot'>
      <label><input type='checkbox' />Remember Me</label>
      <a href='#'>Forgot Password?</a>
    </div>
    <Link to={'/dashboard'}><button type='submit'>Login</button></Link>
    <div className='register-link'>
      <p>Don't have an account<Link to={'/register'}><a href='#' >Register</a></Link></p>
    </div>
   </div>
   </div>
  )
}


export default Login
