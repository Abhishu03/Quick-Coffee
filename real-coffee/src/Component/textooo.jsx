import React, { useState } from 'react';
// http://localhost:5000/testooo

const Textooo = () => {
  const [selected, setSelected] = useState(false);

  const thebox = () => {
    setSelected(!selected);
  };
  
  return (
    <div>
      <div>Cart</div>
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
