import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import useUserPersonalAddressesPage from "../../hook/address/useUserPersonalAddressesPage";
import usePayCash from "../../hook/checkout/usePayCash";

const ChoosePaymentMethod = () => {
  const [addresses, loading] = useUserPersonalAddressesPage();
  const [choosenAddress, onChangeAddress, handleSubmit] = usePayCash();

  return (
    <div className="choose-payment-method">
      <h1 className="my-2">Choose Payment Method</h1>
      <Row className="my-2">
        <Col sm="12">
          <Form className="bg-white p-3 rounded">
            <Form.Check
              className="mb-5"
              name="payment-mathod"
              type="radio"
              id="radio-1"
              label="Payment by card"
            />
            <Form.Check
              name="payment-mathod"
              type="radio"
              id="radio-2"
              label="Payment by Cash"
            />
            <Form.Select
              name="address"
              className="my-3 w-50"
              aria-label="Default select example"
              onChange={onChangeAddress}
              value={choosenAddress}
            >
              <option value="0">Choose Address</option>
              {addresses?.data?.length >= 1 ? (
                addresses.data.map((address) => {
                  return (
                    <option key={address?._id} value={address?._id}>
                      {address?.alias}
                    </option>
                  );
                })
              ) : (
                <option value="0">Choose Address</option>
              )}
            </Form.Select>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <div className="cart-check-out-total bg-white">$335000</div>
          <button
            className="btn bg-dark text-white w-100"
            onClick={handleSubmit}
          >
            Checkout
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default ChoosePaymentMethod;
