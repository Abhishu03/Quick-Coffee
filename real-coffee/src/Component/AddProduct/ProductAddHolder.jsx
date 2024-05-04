import React from 'react';
import { Link } from 'react-router-dom';
import './AddProductCSS/productaddwalapage.css'; 

function ProductAddHolder() {
  return (
    <div className="container">

<table>

  <tr className="product-instantcofee-wala">
    <td className='category-ka-name'>Instant Coffee</td>
    <td>
      <button className="button">
          <Link to="/AddProduct/instantcoffeeadd">ADD Products</Link>
      </button>
    </td>
  </tr>

  <tr className="product-coldbrew-wala">
    <td className='category-ka-name'>Cold Brew</td>
    <td>
      <button className="button">
          <Link to='/AddProduct/coldbrewadd'>ADD Products</Link>
      </button>
    </td>
  </tr>

  <tr className="product-filtercoffee-wala">
    <td className='category-ka-name'>Filter Coffee</td>
    <td>
      <button className="button">
          <Link to="/AddProduct/filtercoffeeadd">ADD Products</Link>
      </button>
    </td>
  </tr>

  <tr className="product-bundle-wala">
    <td className='category-ka-name'>Bundle</td>
    <td>
      <button className="button">
          <Link to="/AddProduct/bundleadd">ADD Products</Link>
      </button>
    </td>
  </tr>
  
</table>
  </div>
  );
}

export default ProductAddHolder;
