import React from "react";
import { Link } from "react-router-dom";

const CartCheckOut = ({
  clearCart,
  totalCartPrice,
  applyCuoponHandle,
  totalAfterDiscount,
  couponName,
  onChangeCouponName,
}) => {
  console.log(couponName);
  return (
    <div className="cart-check-out">
      <div className="cart-check-out-coupon">
        <input
          type="text"
          placeholder="Type coupon"
          value={couponName}
          onChange={onChangeCouponName}
        />
        <button className="cart-check-out-apply" onClick={applyCuoponHandle}>
          Apply
        </button>
      </div>
      <div className="cart-check-out-total">
        {totalAfterDiscount ? (
          <>
            <del>${totalCartPrice} </del>
            <span> ${totalAfterDiscount}</span>
          </>
        ) : (
          totalCartPrice
        )}
      </div>
      <Link to="/order/payment-method" className="btn bg-dark text-white w-100">
        Checkout
      </Link>
      <button
        onClick={() => clearCart()}
        className="btn bg-dark text-white w-100 mt-2"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default CartCheckOut;
