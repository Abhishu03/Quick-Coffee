import axios from 'axios';
import React, { useState } from 'react';
import './SuplimentryPageCSS/newcopon.css';

function NewCouponAdd() {
  const [coupon , setCoupon] = useState('');

  const couponlg = (event) => {
    setCoupon(event.target.value);
  }

  const submitaddcopon = (e) => {
    e.preventDefault(); 
    axios.post('http://127.0.0.1:8000/api/addcopon' , {coupon})
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
        <input onChange={couponlg} className='addcouponinputbox' placeholder='Coupon' type='text'></input>
        <button onClick={submitaddcopon} className='addcouponbt'>Add Coupon</button>
      </div>
    </div>
  )
}

export default NewCouponAdd;
