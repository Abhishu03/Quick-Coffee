import React from 'react';
import { Link } from 'react-router-dom';
import './AddProductCSS/productaddwalapage.css'; 
import clogo from '/abhi/Quick coffee/real-coffee/src/Banner/logo-color.png';

function ProductAddHolder() {
  return (
    <div className="container-productaddwala">

      <div className='aa'>
        <div className='aaa'>
          
            <button className='productbt'>
              <Link to="/AddProduct/instantcoffeeadd">ADD New Products</Link>
              </button>
          
         
            <button className='productcatbt'>
              <Link to="/ProductCatagory/ProductCatagory">ADD New Products Catagory</Link>
              </button>

            <button className='productcatbt'>
              <Link to="/suplimentry/addcoupon">ADD New Coupon</Link>
              </button>
          
        </div>
        <div className='aab'><img src={clogo}/></div>
      </div>

  </div>
  );
}

export default ProductAddHolder;
