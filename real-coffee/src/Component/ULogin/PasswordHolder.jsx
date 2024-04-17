import React from 'react'
import './passwordholder.css';

function PasswordHolder() {
  return (
    <div className='mainbody'>
      <div className='pass-text'>Enter Your Password</div>
      <input className='passclass' placeholder='password'></input>
      <button>Register</button>
    </div>
  )
}

export default PasswordHolder
