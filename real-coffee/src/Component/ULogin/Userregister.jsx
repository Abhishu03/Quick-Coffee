import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './userregister.css';

function Userregister() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phnumber, setPhonenumber] = useState('');

  const submitDetails = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/register', { name, email, phnumber })
      .then((response) => {
        if (response.status === 200) {
          setName('');
          setEmail('');
          setPhonenumber('');
          navigate('/ULogin/passwordholder'); 
        } else {
          alert('error01');
        }
      })
      .catch((error) => {
        console.error(error);
        alert(`Error: ${error.response.data.message || 'Registration failed'}`);
      });
  };

  return (
    <div className='sss'>
      <div className='main-box'>
        <div className='plholder'>
          <div>Name : </div>
          <input type='text' onChange={(event) => setName(event.target.value)} placeholder='name'></input>
        </div>
        <div className='plholder'>
          <div>Email : </div>
          <input type='text' onChange={(event) => setEmail(event.target.value)} placeholder='email'></input>
        </div>
        <div className='plholder'>
          <div>Phone.NO : </div>
          <input type='text' onChange={(event) => setPhonenumber(event.target.value)} placeholder='phone no'></input>
        </div>
        <button onClick={submitDetails} className='nextbt'>Enter password</button>
      </div>
    </div>
  );
}

export default Userregister;
