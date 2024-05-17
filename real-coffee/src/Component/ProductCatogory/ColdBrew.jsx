import React, { useState } from 'react';
import { useEffect } from 'react';
import swal from 'react-sweetalert2';
import { Link , useNavigate } from 'react-router-dom';
import './PCCSS/coldbrewproductcatagory.css';  
import axios from 'axios';

function ColdBrew() {

  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {   
    getproduct();
  }, []);

  const getproduct = () => {
    const product_catagory = 'Cold Brew';
    axios.get(`http://127.0.0.1:8000/api/instantcoffee/${product_catagory}`)
      .then((res) => {
        setProduct(res.data.data);
      })
      .catch((err) => {
        alert(`Error-01: ${err.res.data.message || 'data fail'}`);
      });
  }

  const SubmitAddtoCart = (productId) => {
    const phoneNumber = sessionStorage.getItem('phonenumber'); 
    if(phoneNumber){
      axios.post("http://127.0.0.1:8000/api/addtocart", { product_id: productId, phonenumber: phoneNumber })
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
      alert("please login First");
      navigate('/ULogin/Userlogin');
    }
  };

  return (
    <React.Fragment>
      <div className='main-box-ics'>
        <div className='sub1'>
          <div className='sub2'>
            <h4>Cold Brew</h4>
            <thead>
              <tr className='ics-tableheading-row'>
                <th className='ics-tableheading' scope='col'>Product Name</th>
                <th className='ics-tableheading' scope='col'>Product Price</th>
                <th className='ics-tableheading' scope='col'>Product image</th>
                <th className='ics-tableheading' scope='col'>Product Description</th>
              </tr>
            </thead>
            <tbody>
              {
                product.map((instantcoffee, index) => (
                  <tr key={index}>
                    <td>{instantcoffee.product_name}</td>
                    <td>{instantcoffee.product_price}</td>
                    <td><img src={instantcoffee.product_img} alt="" height={91} width={90} /></td>
                    <td>{instantcoffee.product_description}</td>
                    <td><button onClick={() => SubmitAddtoCart(instantcoffee.id)}>Add to cart</button></td>
                  </tr>
                ))
              }
            </tbody>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ColdBrew
