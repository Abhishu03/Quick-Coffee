import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeleteBT from '../Banner/Delete button.png';
import './css/cart.css';
import { Link } from 'react-router-dom';

function Cart() {
  const [singleuser, setSingleuser] = useState(null);
  const [fromcartdata, setFromcartdata] = useState(null);
  const [producttoshow, setProducttoshow] = useState([]);
  const [deletethisproduct, setDeletethisproduct] = useState('');
  const [quantityOfProducts, setQuantityOfProducts] = useState({});
  const [weightOfProducts, setWeightOfProducts] = useState({});


  useEffect(() => {
    getdatafromcart();
    getoneuser();
  }, []);

  useEffect(() => {
    if (producttoshow.length > 0) {
      const initialQuantities = producttoshow.reduce((acc, productsArray) => {
        productsArray.forEach(product => {
          acc[product.id] = 1; // Set initial quantity to 1 for each product
        });
        return acc;
      }, {});
      setQuantityOfProducts(initialQuantities);
    }
  }, [producttoshow]);

  useEffect(() => {
    if (fromcartdata) {
      getproductstoshow(fromcartdata);
    }
  }, [fromcartdata]);

  const getoneuser = () => {
    const phnumber = sessionStorage.getItem('phonenumber');
    if (phnumber) {
      axios.get(`http://127.0.0.1:8000/api/singleuser/${phnumber}`)
        .then((res) => {
          if (res.status === 200) {
            setSingleuser(res.data.data.name);
          } else {
            console.log("error place 02")
          }
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }

  const getdatafromcart = () => {
    const phnumbercart = sessionStorage.getItem('phonenumber');
    if (phnumbercart) {
      axios.get(`http://127.0.0.1:8000/api/getfromcarttable/${phnumbercart}`)
        .then((res) => {
          if (res.status === 200) {
            const extractedData = res.data.msg.map(item => item.product_id);
            setFromcartdata(extractedData);
          } else {
            console.log("error place 01")
          }
        })
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const getproductstoshow = (fromcartdata) => {
    if (fromcartdata && Array.isArray(fromcartdata) && fromcartdata.length > 0) {
      let products = []; // Accumulate products here
      const promises = fromcartdata.map(productId => {
        return axios.get(`http://127.0.0.1:8000/api/productfromcarttoshow/${productId}`)
          .then((res) => {
            if (res.status === 200) {
              products.push(res.data.data); // Push product data into the array
              console.log(res.data.data);
            } else {
              console.log("Error fetching products:", res.statusText);
            }
          })
          .catch(error => {
            console.error('Error fetching product data:', error);
          });
      });

      Promise.all(promises)
        .then(() => {
          setProducttoshow(products); // Set all products at once
        })
        .catch(error => {
          console.error('Error resolving product promises:', error);
        });
    } else {
      console.log("No data provided to fetch products.");
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const deleteproduct = (productIndex, innerIndex) => {
    const productId = producttoshow[productIndex][innerIndex].id;
    const dtproduct = window.confirm('Are you sure you want to delete this product?');
    if (dtproduct) {
      const phnumbercarttodelete = sessionStorage.getItem('phonenumber');
      axios.delete(`http://127.0.0.1:8000/api/productdeletefromcart/${phnumbercarttodelete}/${productId}`)
        .then((res) => {
          if (res.status === 200) {
            alert("Product Deleted");
            const updatedProducts = [...producttoshow];
            updatedProducts[productIndex].splice(innerIndex, 1);
            setProducttoshow(updatedProducts);
          }
        })
        .catch((error) => {
          if (error.response) {
            alert(`Error: ${error.response.status} - ${error.response.data.message}`);
          } else if (error.request) {
            console.error('No response received:', error.request);
          } else {
            console.error('Error:', error.message);
          }
        })
    }
  }

  const incrementQuantity = (productId) => {
    setQuantityOfProducts(prevState => ({
      ...prevState,
      [productId]: prevState[productId] + 1
    }));
  };

  const decrementQuantity = (productId) => {
    setQuantityOfProducts(prevState => ({
      ...prevState,
      [productId]: prevState[productId] - 1
    }));
  };

  const handleWeightChange = (productId, event) => {
    setWeightOfProducts(prevState => ({
      ...prevState,
      [productId]: parseInt(event.target.value)
    }));
  };

  const calculateSubtotalofproduct = (productId, price) => {
    const quantity = quantityOfProducts[productId] || 1;
    const weightValue = weightOfProducts[productId] || 1;
    return price * quantity * weightValue;
  };

  const calculateSubtotalAllProducts = () => {
    let total = 0;
    if (producttoshow && producttoshow.length > 0) {
      for (const productsArray of producttoshow) {
        for (const product of productsArray) {
          total += calculateSubtotalofproduct(product.id, product.product_price);
        }
      }
    }
    return total.toFixed(2);
  };

 


  return (
    <React.Fragment>
      <div className='body-main-class'>
      <div className='top-user-mgs'> welcome {singleuser}</div>
        <div className='all-product-table'>
          <thead className='table-head'>
            <tr className='table-head-row'>
              <th className='heading'>Product Name</th>
              <th className='heading'>Product Image</th>
              <th className='heading'>Price</th>
              <th className='heading'>Weight</th>
              <th className='heading'>Quantity</th>
              <th className='heading'>Subtotal</th>
              <th className='heading'>Remove</th>
            </tr>
          </thead>
          <tbody className='table-body'>
            {producttoshow && producttoshow.map((productsArray, productIndex) => (
              productsArray.map((product, innerIndex) => (
                <tr className='table-body-row' key={innerIndex}>
                  <td className='BodyTB'>{product.product_name}</td>
                  <td className='BodyTB'><img src={product.product_img} alt="" height={91} width={90} /></td>
                  <td className='BodyTB'>{product.product_price}</td>
                  <td className='BodyTB'>
                    <select className='dropdownforweight' value={weightOfProducts[product.id] || 1} onChange={(e) => handleWeightChange(product.id, e)}>
                      <option value="1">100g</option>
                      <option value="2">250g</option>
                      <option value="4">500g</option>
                      <option value="7">1kg</option>
                    </select>
                  </td>
                  <td className='BodyTB'>
                    <button className='quintitytoggleplus' onClick={() => incrementQuantity(product.id)}>+</button>
                    <span className='realquintity'>{quantityOfProducts[product.id]}</span>
                    <button className='quintitytoggleminus' onClick={() => decrementQuantity(product.id)}>-</button>
                  </td>
                  <td className='BodyTB'>{calculateSubtotalofproduct(product.id, product.product_price).toFixed(2)}</td>
                  {/* Pass the productIndex and innerIndex to the deleteproduct function */}
                  <td className='BodyTB-deleteBT'><img className='deleteBTicon' onClick={() => deleteproduct(productIndex, innerIndex)} src={DeleteBT} alt="" /></td>
                </tr>
              ))
            ))}
          </tbody>
        </div>

         <div className='checkout-box'>
          <div className='subtotal-ammount'>Subtotal: {calculateSubtotalAllProducts()}</div>
          <div className='shipping-charges'>Shipping Charges : 70</div>
          <div className='coupon-div'>Add coupon : <input className='coupon-input' placeholder='COFFEEzz'/><button className='coupon-apply-bt'>Apply</button></div>
          <div className='total-after-coupon'>Total: {(parseFloat(calculateSubtotalAllProducts())+70).toFixed(2)}</div>
          <div className='checkout-div'><button className='checkout-bt'><Link to='/paymentgateway'><a>Checkout</a></Link></button></div>
      </div>
      </div>
    </React.Fragment>
  )
}

export default Cart;
