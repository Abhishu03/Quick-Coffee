import React from 'react'
import Clogo from '../Banner/logo-color.png';
import Userlogo from '../Banner/user-icon.png';
import { Link , useNavigation } from 'react-router-dom';
import axios from 'axios';
import './css/Navbar.css';

function Navbar() {
  return (
    <div className='main'>
        <div className='logo'><Link to= '/'><img  className='Clogo' src={Clogo} /></Link></div>
        <ul className='navbarlist'>
            <li className='bt'><Link to='/product'><a>Shop</a></Link></li>
            <li className='bt'><Link to='/bestseller'><a>Bestseller</a></Link></li>
            <li className='bt'><Link to='/aboutus'><a>About Us</a></Link></li>
            <li className='bt'><Link to= '/ULogin/Userlogin'><img  className='userlogo' src={Userlogo} /></Link></li>
        </ul>
    </div>
  )
}

export default Navbar
