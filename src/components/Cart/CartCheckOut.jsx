import React from "react";

const CartCheckOut = () => {
  return (
    <div className="cart-check-out">
      <div className="cart-check-out-coupon">
        <input type="text" placeholder="Type coupon" />
        <button className="cart-check-out-apply">Apply</button>
      </div>
      <div className="cart-check-out-total">$335000</div>
      <button className="btn bg-dark text-white w-100">Checkout</button>
    </div>
  );
};

export default CartCheckOut;
