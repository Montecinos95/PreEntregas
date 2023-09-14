import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
  const widgetStyles = {
    color: 'white',      
    backgroundColor: 'bg-dark' , 
    padding: '5px 10px', 
    paddingright: '15px',
    borderRadius: '50%', 
  };

  return (
    <div style={widgetStyles}>
      <FaShoppingCart />
    </div>
  );
}

export default CartWidget;
