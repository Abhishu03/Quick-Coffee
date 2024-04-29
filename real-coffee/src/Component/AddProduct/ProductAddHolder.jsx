import React from 'react';
import { Link } from 'react-router-dom';
import './AddProductCSS/productaddwalapage.css'; 

function ProductAddHolder() {
  return (
    <div className="container">
      <div className="product instantcofee-wala">
        <div className="product-name">Instant Coffee</div>
        <button className="button">
          <Link to="/AddProduct/instantcoffeeadd">ADD</Link>
        </button>
      </div>
      <div className="product coldbrew-wala">
        <div className="product-name">Cold Brew</div>
        <button className="button">ADD</button>
      </div>
      <div className="product filtercoffee-wala">
        <div className="product-name">Filter Coffee</div>
        <button className="button">ADD</button>
      </div>
      <div className="product bundle-wala">
        <div className="product-name">Bundle</div>
        <button className="button">ADD</button>
      </div>
    </div>
  );
}

export default ProductAddHolder;
