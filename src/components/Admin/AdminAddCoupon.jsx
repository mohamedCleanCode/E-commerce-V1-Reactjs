import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import useAdminAddCoupon from "../../hook/coupon/useAdminAddCoupon";
import AdminCouponCard from "./AdminCouponCard";

const AdminAddCoupon = () => {
  const [
    name,
    expire,
    discount,
    onChangeName,
    onChangeExpire,
    onChangeDiscount,
    handleSubmit,
    loading,
    coupon,
  ] = useAdminAddCoupon();

  return (
    <Col xs="12">
      <h1>Add A New Coupon</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            className="admin-add-brand-name"
            placeholder="Coupon name"
            value={name}
            onChange={onChangeName}
          />
        </Form.Group>
        <Form.Group controlId="formBasicDate">
          <Form.Control
            type="text"
            className="admin-add-brand-name"
            placeholder="Date expire"
            value={expire}
            onChange={onChangeExpire}
            onFocus={(e) => {
              e.target.type = "date";
            }}
            onBlur={(e) => {
              e.target.type = "text";
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicDiscount">
          <Form.Control
            type="number"
            className="admin-add-brand-name"
            placeholder="Discount"
            value={discount}
            onChange={onChangeDiscount}
          />
        </Form.Group>
        <Button variant="dark" type="submit" disabled={loading}>
          Save
        </Button>
      </Form>

      <Row>
        {coupon?.coupons ? (
          coupon.coupons?.data?.length >= 1 ? (
            coupon.coupons.data.map((coupon) => {
              return <AdminCouponCard key={coupon?._id} coupon={coupon} />;
            })
          ) : (
            <p>no coupon</p>
          )
        ) : (
          <p>there are not any coupons</p>
        )}
      </Row>
      <ToastContainer />
    </Col>
  );
};

export default AdminAddCoupon;
