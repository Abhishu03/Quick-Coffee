import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'react-sweetalert2';
import { useNavigate } from 'react-router-dom';
import './PCCSS/instcoffee.css';

function InstantCoffee() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  // For Local Machine 
  // const baseURL = 'http://127.0.0.1:8000/api';
  // For Local Network
  const baseURL = 'http://192.168.1.17:8000/api'; 

  useEffect(() => {   
    getproduct();
  }, []);

  const getproduct = () => {
    const product_catagory = 'Instant coffee';
    axios.get(`${baseURL}/instantcoffee/${product_catagory}`)
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {
        alert(`Error-01: ${err.response.data.message || 'data fail'}`);
      });
  }

  const SubmitAddtoCart = (productId) => {  
    const phoneNumber = sessionStorage.getItem('phonenumber'); 
    if(phoneNumber){
      axios.post(`${baseURL}/addtocart`, { product_id: productId, phonenumber: phoneNumber })
        .then((response) => {
          if (response.status === 200) {
            alert("Product added successfully!");
          } else if (response.status === 409) {
            alert("Product already exists in the cart.");
          } else if (response.status === 401) {
            alert("Unauthorized access. Please login.");
          }
        })
        .catch((error) => {
          console.error(error);
          swal("Error", error.response ? error.response.data.message || 'Something went wrong' : 'Network error', "error");
        });
    }
    else{
      alert("Please Login First");
      navigate('/ULogin/Userlogin');
    }
  };

  return (
    <div className='main-box-ics'>
      <h4 className='instantcoffeehfour'>Instant Coffee</h4>
      <div className='product-container'>
        {product.slice().reverse().map((instantcoffee, index) => (
          <div key={index} className='product-card'>
            <img src={instantcoffee.product_img} alt={instantcoffee.product_name} className='product-image' />
            <div className='product-details'>
              <h5>{instantcoffee.product_name}</h5>
              <p>Price: ${instantcoffee.product_price}</p>
              <p>{instantcoffee.product_description}</p>
              <button onClick={() => SubmitAddtoCart(instantcoffee.id)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InstantCoffee;
