import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css'; 

function CartWidget() {
  const itemCount = 5; 

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="badge badge-danger badge-pill">{itemCount}</span>
    </div>
  );
}

export default CartWidget;
