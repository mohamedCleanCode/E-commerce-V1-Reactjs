import React from "react";
import { Link } from "react-router-dom";

const CartCheckOut = ({ totalCartPrice }) => {
  return (
    <div className="cart-check-out">
      <div className="cart-check-out-coupon">
        <input
          type="text"
          placeholder="Type coupon"
          //   vlaue={couponName}
          //   onChange={onChangeCouponName}
        />
        <button
          className="cart-check-out-apply"
          // onClick={applyCuoponHandle}
        >
          Apply
        </button>
      </div>
      <div className="cart-check-out-total">${totalCartPrice}</div>
      <Link to="/order/payment-method" className="btn bg-dark text-white w-100">
        Checkout
      </Link>
      <button
        //   onClick={clearCart}
        className="btn bg-dark text-white w-100 mt-2"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartCheckOut;
