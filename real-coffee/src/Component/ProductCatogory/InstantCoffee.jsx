import React, { useState } from 'react';
import { useEffect } from 'react';
import './PCCSS/instcoffee.css';  
import axios, { Axios } from 'axios';
import swal from 'react-sweetalert2';

function InstantCoffee() {
  const [product_id , setProductiddata] = useState('');
  const [phonenumber , setPhonenumber] = useState('');
  const[product , setProduct]= useState([]);
  
  useEffect(()=>{
    getproduct();
  },[]);

  const getproduct = () => {
    axios.get("http://127.0.0.1:8000/api/instantcoffee")
    .then((res)=>{
      setProduct(res.data.msg);
      setProductiddata(res.data.id);
      // console.log(res.data.msg);
    })
    .catch((err)=> {
      alert(`Error-01: ${err.res.data.message || 'data fail'}`); 
    })
  }



  const SubmitAddtoCart = (e) => {
    e.preventDefault();
    const phonenumber =sessionStorage.getItem('phonenumber');
    axios.post("http://127.0.0.1:8000/api/addtocart", { product_id, phonenumber })
    .then((response) => {
      if (response.status === 201) {
        swal("Success", response.data.message, "success");
      } else if (response.status === 409) {
        swal("Conflict", response.data.message, "warning");
      } else if (response.status === 401) {
        swal("Error", response.data.message, "error");
      }
    })
    .catch((error) => {
      console.error(error);
      swal("Error", error.response ? error.response.data.message || 'Something went wrong' : 'Network error', "error");
    });
  };

  


  // const SubmitAddtoCart = (e) => {
  //   e.preventDefault();
  //   axios.post("http://127.0.0.1:8000/api/addtocart", { product_id: product.id, phonenumber: sessionStorage.getItem('phonenumber') })
  //     .then((response) => {
  //       if (response.status === 200) {
  //         const updatedProductID = response.data.product_id;
  //         const updatedPhoneNumber = response.data.phonenumber;
  
  //         setProductid(updatedProductID);
  //         setPhonenumber(updatedPhoneNumber);
  //       } else {
  //         alert('Error 01');
  //       }
  //     }).catch((error) => {
  //       console.error(error);
  //       alert(`Error - Point 2: ${error.response ? error.response.data.message || 'Registration failed' : 'Network error'}`);
  //     });
  // }
  


  
  return (
    <React.Fragment>
      <div className='main-box-ics'>
        <div className='sub1'>
          <div className='sub2'>
            <h4>Instant Coffee</h4>
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
                product.map((instantcoffee, index)=> (
                  <tr key={index}>
                    <td>{instantcoffee.product_name}</td>
                    <td>{instantcoffee.product_price}</td>
                    <td><img src={instantcoffee.product_img} alt="" height={91} width={90} /></td>    
                    <td>{instantcoffee.product_description}</td>
                    <td><button onClick={SubmitAddtoCart}>Add to cart</button></td>
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

export default InstantCoffee
