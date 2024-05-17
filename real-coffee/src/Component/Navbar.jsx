import React from 'react'
import Clogo from '../Banner/logo-color.png';
import Userlogo from '../Banner/user-icon.png';
import Userlogout from '../Banner/userlogoutlogo.png';
import Cartlogo from '../Banner/shopping-cart.png'
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/Navbar.css';

function Navbar() {

  const navigate = useNavigate();

  const Userlogoutbt= ()=> {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('phonenumber');
    navigate('/');
  }

  const Userloginbt= () => {
    navigate('/ULogin/Userlogin');
  }

  const cartconnect = () => {
    const tokencheck = sessionStorage.getItem('phonenumber');
    if(tokencheck){
      navigate('/cart');
    }
    else{
      alert("please login");
      navigate('/ULogin/Userlogin');
    }

  }


  return (
    <div className='main'>
        <div className='logo'><Link to= '/'><img  className='Clogo' src={Clogo} /></Link></div>
        <ul className='navbarlist'>
            <li className='bt'><Link to='/Getproduct/products'><a>Shop</a></Link></li>
            {/* <li className='bt'><Link to='/bestseller'><a>Bestseller</a></Link></li> */}
            <li className='bt'><Link to='/aboutus'><a>About Us</a></Link></li>
            <li className='bt'>
              {sessionStorage.token?
              (<img onClick={Userlogoutbt} className='userlogout' src={Userlogout}></img>): 
              (<img src={Userlogo} onClick={Userloginbt} className='userlogo'  />) 
            }
            </li>
            <li className='bt'><img onClick={cartconnect} className='cartlogo' src={Cartlogo} /></li>
        </ul>
    </div>
  )
}

export default Navbar
