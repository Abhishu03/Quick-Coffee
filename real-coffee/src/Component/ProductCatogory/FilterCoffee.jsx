import React, { useState } from 'react';
import { useEffect } from 'react';
import './PCCSS/filtercoffeeproductcatagory.css';  
import axios from 'axios';

function FilterCoffee() {

  const[product , setProduct]= useState([]);
  useEffect(()=>{
    getproduct();
  },[]);

  const getproduct = () => {
    axios.get("http://127.0.0.1:8000/api/filtercoffee")
    .then((res)=>{
      setProduct(res.data.msg);
      // console.log(res.data.msg);
    })
    .catch((err)=> {
      alert(`Error: ${err.res.data.message || 'data fail'}`); 
    })
  }

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
              product.map((filtercoffee, index)=> (
                <tr key={index}>
                  <td>{filtercoffee.product_name}</td>
                  <td>{filtercoffee.product_price}</td>
                  <td><img src={filtercoffee.product_img} alt="" height={91} width={90} /></td>    
                  <td>{filtercoffee.product_description}</td>
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

export default FilterCoffee
