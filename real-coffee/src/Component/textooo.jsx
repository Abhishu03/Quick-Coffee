import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// http://localhost:5000/testooo

const Textooo = () => {
  const [selected, setSelected] = useState(false);

  const thebox = () => {
    setSelected(!selected);
    
  };

  const datan = 5 ;
  
  return (
    <div>
      <div>Cart</div>
      <div><Link to="/"  state={{ data: datan }}>DAAAATAAAA... </Link></div>
      <div 
        className='boxkiclass'
        style={{
          backgroundColor: selected ? '#ffcc00' : '#f0f0f0',
          height: '100px', 
          width: '100px',
          margin: '100px'
        }}
        onClick={thebox}
      >
        <p>samsung</p>
      </div>
    </div>
  );
}

export default Textooo;
