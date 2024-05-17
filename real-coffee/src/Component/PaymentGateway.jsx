import React from 'react';
import { useState } from 'react';
import './css/paymentgatewayl.css'
import Upipayment from '../Banner/UPI payment gateway photo.jpg';

function PaymentGateway() {
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    if (paymentMethod === 'UPI') {
      // Handle UPI payment
      console.log('UPI ID:', upiId);
    } else if (paymentMethod === 'Cards') {
      // Handle Card payment
      console.log('Card Number:', cardNumber);
      console.log('Expiry Date:', expiryDate);
      console.log('CVV:', cvv);
      console.log('Name:', name);
    } else if (paymentMethod === 'UPI QR code') {
      // Handle UPI QR code payment
      console.log('Handle UPI QR code payment');
    }
    // Simulate payment processing
    setTimeout(() => {
      alert('Payment Successful!');
    }, 2000);
  };
  return (
    <div className='paymentkamainbody'>
    <h2 className='paymentheading'>Payment Page</h2>
    <div className='paymenttypeselectdiv'>
      <label className='paymentselectlebel'>Select Payment Method:</label>
      <select className='paymetntypeselectdropdown' value={paymentMethod} onChange={(e) => handlePaymentMethodChange(e.target.value)}>
        <option className='paymentdropopt' value="UPI">UPI</option>
        <option className='paymentdropopt' value="Cards">Cards</option>
        <option className='paymentdropopt' value="UPI QR code">UPI QR code</option>
      </select>
    </div>
    {paymentMethod === 'UPI' && (
      <form className='upiidinputform' onSubmit={handlePayment}>
        <div className='divtoinupidetails'>
          <label className='enterupiidlabel'>Enter UPI ID:</label>
          <input 
          className='upiidinputbox'
            type="text"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            placeholder="Your UPI ID"
            required
          />
        </div>
        <button className='paymentsubmitbutton' type="submit">Pay Now</button>
      </form>
    )}
    {paymentMethod === 'Cards' && (
      <form className='carddetailsform' onSubmit={handlePayment}>
        <div className='carddetailsformdiv'>
          <label className='carddetailslabel'>Card Number:</label>
          <input
          className='cardinfoinputall'
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        <div className='carddetailsformdiv' >
          <label className='carddetailslabel' >Expiry Date:</label>
          <input
          className='cardinfoinputall'
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
            required
          />
        </div>
        <div className='carddetailsformdiv' >
          <label className='carddetailslabel' >CVV:</label>
          <input
          className='cardinfoinputall'
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            required
          />
        </div>
        <div className='carddetailsformdiv'>
          <label className='carddetailslabel' >Name on Card:</label>
          <input
          className='cardinfoinputall'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>
        <button className='paymentsubmitbutton' type="submit">Pay Now</button>
      </form>
    )}
    {paymentMethod === 'UPI QR code' && (
      <div className='upiqrcodediv'>
        <p className='upiqrcodetext'>Scan the UPI QR code with your mobile app to complete the payment.</p>
        <img className='qrcodescan' src={Upipayment}></img>
      </div>
    )}
  </div>
);
}


export default PaymentGateway
