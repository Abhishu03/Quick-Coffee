import React, { useState } from 'react';
import './AddProductCSS/productcatagory.css';
import axios from 'axios';

function ProductCatagory() {
  const [product_catagory, setCatagory] = useState('');
  const [catagory_image, setImage] = useState(null);

  // For Local Machine 
  // const baseURL = 'http://127.0.0.1:8000/api';
  // For Local Network
  const baseURL = 'http://192.168.1.17:8000/api'; 

  const submitcatagory = async (e) => {
    e.preventDefault();

    if (!catagory_image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append('product_catagory', product_catagory);
    formData.append('catagory_image', catagory_image);

    try {
      const res = await axios.post(`${baseURL}/addcatagory`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.status === 200) {
        alert("Product added");
      } else {
        console.log('error-01');
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className='product-catagory-wala-mainpage'>
      <div className='productcat-addwala-box'>
        <div className='enternewcatagorytext'>Enter New Category</div>
        <div className='ProductCatagoryimputbox'>
          <input 
            type='text'
            onChange={(e) => setCatagory(e.target.value)}
            placeholder='Category'
          />
        </div>
        <div>
          <input 
            type="file"
            className="form-control-img"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>
        <div className='ProductCatagorysubmitbtdiv'>
          <button 
            onClick={submitcatagory}
            className='ProductCatagorysubmitbt'
          >
            Submit
          </button>
        </div>
      </div>

      
    </div>
  );
}

export default ProductCatagory;
