import React, { useEffect, useState, useRef } from "react";
import { Component } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import'./AddProductCSS/coldbrewproductadd.css';

function ColdBrewProductAdd() {

    const[pname , setPname] = useState('');
  const[pprice , setPrice] = useState('');
  const[Pimg , setImage] = useState('');
  const[pdescription , setPpdescription] = useState('');
  const[message , setMessage] = useState('');
  const formRef = useRef('');
 

  const uploadporduct = async() =>{    
    alert("product added", resetForm());
    console.log(Pimg);
    const formData= new FormData();
    formData.append('product_name', pname);
    formData.append('product_price', pprice);
    formData.append('product_img', Pimg);
    formData.append('product_description' , pdescription);

    const responce = await axios.post("http://127.0.0.1:8000/api/coldbrew" , formData, {
      headers:{'content-Type':"multipalpart/form-data"},
    });

    if(responce){
      console.log(responce);
      setMessage(responce.message);
    }
    
  }

  const handleSubmit = async(e)=> {
    e.preventDefault();
    await uploadporduct();
  }

  const resetForm = () => {
    setPname('');
    setPrice('');
    setImage('');
    setPpdescription('');
    formRef.current.reset(); 
  }
  
  return (
    <React.Fragment>
    <div className="container">
        <div className="row">
          <div className="col-md-a">
            <h5 className="mb-d">Add Product in Cold Brew </h5> 
            {/* <p className="text-warning">{ message}</p>*/}
             
                <form ref={formRef} onSubmit={handleSubmit}>             
                <div className="mbc">
                <label  className="col-sm">Product Name </label>
                <div className="col-sm-acc">
                <input type="text" className="form-control" onChange={ (e)=>setPname(e.target.value)}/>
                </div>
                </div>

                <div className="mbc">
                <label  className="col-sm">Product Price </label>
                <div className="col-sm-acc">
                <input type="text" className="form-control" onChange={(e)=>setPrice(e.target.value)}  />
                </div>
                </div>

                <div className="mbc">
                <label  className="col-sm">Product Image</label>
                <div className="col-sm-acc">
                <input type="file" className="form-control-img" onChange={(e)=>setImage(e.target.files[0])} />
                </div>
                </div>

                <div className="mbc">
                <label  className="col-sm">Product Description </label>
                <div className="col-sm-acc">
                <input type="text" className="form-control" onChange={(e)=>setPpdescription(e.target.value)}  />
                </div>
                </div>

                <div className="mbc">
                <label className="col-sm"></label>
                <div className="col-sm-acc">
                <button type="submit" className="btn-success">Submit</button>
                </div>
                </div>

                </form>

         </div>
        </div>
    </div>
</React.Fragment>
  )
}

export default ColdBrewProductAdd
