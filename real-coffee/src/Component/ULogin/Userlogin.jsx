import React from 'react'
import CompneyLogo from '/abhi/Quick coffee/real-coffee/src/Banner/logo-color.png';
import './Userlogin.css';
import axios from 'axios';
import { Link , useNavigation } from 'react-router-dom';

function Userlogin() {
  return (
    <div>
      <div className='mainbox'>
        <div className='logindata'>
          <div className='phoneno'>
            <div>Phone.No : </div>
            <input type='text' placeholder='phone number'></input>
          </div>
          <div className='lipass'>
            <div>Password : </div>
            <input type='text' placeholder='password'></input>
          </div>
          <div className='button-box'>
            <button className='bt-lg'>Login</button>
            <a>-- OR --</a>
            <button className='bt-reg'><Link to='/ULogin/Userregister'><a>Register</a></Link></button>
          </div>
        </div>
        <div className='compneylog'><img src={CompneyLogo}></img></div>
      </div>
    </div>
  )
}

export default Userlogin
