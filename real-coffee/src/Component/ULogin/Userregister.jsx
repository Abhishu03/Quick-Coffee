import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import {useRef} from 'react';
import { useState } from 'react';
import './userregister.css';


function Userregister() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phnumber, setPhonenumber] = useState('');
  const [phonenumber , setPhonenumberaa] = useState('');
  const [password, setPassword] = useState('');


  const submitall = async (e) => {
    e.preventDefault();
    try {
      await submitDetails();
      await submitpassword();
      
    } catch (error) {
      console.error(error);
      alert('Error occurred - point 1');
    }
  };


  const submitDetails = (e) => {
    // e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/register', { name, email, phnumber })
      .then((response) => {
        if (response.status === 200) {
          setName('');
          setEmail('');
          setPhonenumber('');
          alert('data added');
          // navigate('/ULogin/passwordholder'); 
        } else {
          alert('Error occored - point 2');
        }
      })
      .catch((error) => {
        console.error(error);
        // alert(`Error - point 3: ${error.response.data.message || 'Registration failed'}`);
        alert('user already exists ');
      });
    
  };


  const submitpassword = (e) => {
    // e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/password', { phonenumber, password })
      .then((response) => {
        if (response.status === 200) {
          setPhonenumberaa('');
          setPassword('');
        } else {
          alert('Error occored - point 4');
        }
      })
      .catch((error) => {
        console.error(error);
        // alert(`Error - point 5: ${error.response.data.message || 'Registration failed'}`);
        alert('try again');
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
          <input type='text' onChange={(event) => { setPhonenumber(event.target.value); 
          setPhonenumberaa(event.target.value); }} placeholder='phone no'></input>
        </div>
        <div className='plholder'>
          <div>Password : </div>
          <input type='text' onChange={(event) => setPassword(event.target.value)} placeholder='password'></input>
        </div>
        <button onClick={submitall} className='nextbt'>Submit</button>
      </div>
    </div>
  );
}

export default Userregister;
