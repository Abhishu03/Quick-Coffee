import axios from 'axios';
import React, { useState } from 'react';
import './SuplimentryPageCSS/newcopon.css';

function NewCouponAdd() {
  const [coupon , setCoupon] = useState('');
  const [ammount , setAmmount] = useState('');


  // FOR MACHINE RUN 
  // const baseURL = 'http://127.0.0.1:8000/api';
  // FOR LOCAL WIFI NETWORK RUN
  const baseURL = 'http://192.168.1.17:8000/api'; 


  const submitaddcopon = (e) => {
    e.preventDefault(); 
    axios.post(`${baseURL}/addcopon` , {coupon , ammount} )
    .then((res)=>{
      if(res.status === 200){
        alert("Coupon Added");
      }
      else console.log('error-01');
    }).catch((e)=> {
      console.log(e);
    })
  }


  return (
    <div className='couponaddmandiv'>
      <div className='couponaddsubdiv'>
        <div className='addcoupontext'> New Coupon </div>
        <input onChange={(event) => setCoupon(event.target.value)} className='addcouponinputbox' placeholder='Coupon' type='text'></input>
        <input onChange={(event) => setAmmount(event.target.value)} className='addcouponinputbox' placeholder='ammount' type='text'></input>
        <button onClick={submitaddcopon} className='addcouponbt'>Add Coupon</button>
      </div>
    </div>
  )
}

export default NewCouponAdd;
