import React from 'react';
import axios from 'axios';
import { Link , useNavigation } from 'react-router-dom';
import './userregister.css';

function Userregister() {
  return (
    <div className='sss'>
      <div className='main-box'>
          <div className='plholder'>
            <div>Name : </div>
            <input type='text' placeholder='name'></input>
          </div>
          <div className='plholder'>
            <div>Email : </div>
            <input type='text' placeholder='email'></input>
          </div>
          <div className='plholder'>
            <div>Phone.NO : </div>
            <input type='text' placeholder='phone no'></input>
          </div>
          <button className='nextbt'><Link to='/ULogin/passwordholder'>Enter password</Link></button>
      </div>
    </div>
  )
}

export default Userregister
