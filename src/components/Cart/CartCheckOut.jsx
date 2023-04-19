import React from "react";
import { Link } from "react-router-dom";

const CartCheckOut = ({ totalCartPrice }) => {
  return (
    <div className="cart-check-out">
      <div className="cart-check-out-coupon">
        <input type="text" placeholder="Type coupon" />
        <button className="cart-check-out-apply">Apply</button>
      </div>
      <div className="cart-check-out-total">${totalCartPrice}</div>
      <Link to="/order/payment-method" className="btn bg-dark text-white w-100">
        Checkout
      </Link>
    </div>
  );
};

export default CartCheckOut;
