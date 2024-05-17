import React from 'react'
import CompneyLogo from '/abhi/Quick coffee/real-coffee/src/Banner/logo-color.png';
import { useState } from 'react';
import './Userlogin.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function Userlogin() {
  const navigate = useNavigate();
  const [phonenumber,setPhonenumber] = useState('');
  const [password , setPassword] = useState('');

  const phonenumberlg= (event) =>{
    setPhonenumber(event.target.value);
  }

  const passwordlg= (event) => {
    setPassword(event.target.value);
  }

  const SubmitLogin = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/existlogin' , {phonenumber, password })
    .then((res)=>{
      if(res.status === 200){
        // navigate('/cart');
        sessionStorage.setItem('token', res.data.token);
        sessionStorage.setItem('phonenumber', res.data.phonenumber);
        restone();
      }
      else console.log('error-01');
    }).catch((e)=> {
      
      console.log(e);
    })
  }

  const restone = () => {
    const alphaone = sessionStorage.getItem('phonenumber');
    if(alphaone === phonenumber){
      navigate('/cart');
    }
    else{
      alert("enter Correct phonenumber and Password");
    }
  }


  return (
    <div>
      <div className='mainbox'>
        <div className='logindata'>
          <div className='phoneno'>
            <div>Phone.No : </div>
            <input type='text' onChange={phonenumberlg} placeholder='phone number'></input>
          </div>
          <div className='lipass'>
            <div>Password : </div>
            <input type='text' onChange={passwordlg} placeholder='password'></input>
          </div>
          <div className='button-box'>
            <button onClick={SubmitLogin} className='bt-lg'>Login</button>
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
