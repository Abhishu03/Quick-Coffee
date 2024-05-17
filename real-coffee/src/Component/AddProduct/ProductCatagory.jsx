import React, { useState } from 'react';
import './AddProductCSS/productcatagory.css';
import axios from 'axios';

function ProductCatagory() {
  const [product_catagory , setCatagory] = useState('');

  const Catagorylg = (event) => {
    setCatagory(event.target.value);
  }

  const submitcatagory = (e) => {
    e.preventDefault(); 
    axios.post('http://127.0.0.1:8000/api/addcatagory' , {product_catagory})
    .then((res)=>{
      if(res.status === 200){
        alert("product added");
      }
      else console.log('error-01');
    }).catch((e)=> {
      console.log(e);
    })
  }

  return (
    <div className='product-catagory-wala-mainpage'>
        <div className='productcat-addwala-box'>
            <div className='enternewcatagorytext'>Enter New Category</div>
            <div className='ProductCatagoryimputbox'><input onChange={Catagorylg} placeholder='Category'/></div>
            <div className='ProductCatagorysubmitbtdiv'><button onClick={submitcatagory} className='ProductCatagorysubmitbt'>Submit</button></div>
        </div>
    </div>
  )
}

export default ProductCatagory;
