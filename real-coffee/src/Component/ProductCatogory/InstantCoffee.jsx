import React, { useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'react-sweetalert2';
import './PCCSS/instcoffee.css';

function InstantCoffee() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getproduct();
  }, []);

  const getproduct = () => {
    axios.get("http://127.0.0.1:8000/api/instantcoffee")
      .then((res) => {
        setProduct(res.data.msg);
      })
      .catch((err) => {
        alert(`Error-01: ${err.res.data.message || 'data fail'}`);
      });
  }

  

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
                product.map((instantcoffee, index) => (
                  <tr key={index}>
                    <td>{instantcoffee.product_name}</td>
                    <td>{instantcoffee.product_price}</td>
                    <td><img src={instantcoffee.product_img} alt="" height={91} width={90} /></td>
                    <td>{instantcoffee.product_description}</td>
                    <td><button>Add to cart</button></td>
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

export default InstantCoffee;
