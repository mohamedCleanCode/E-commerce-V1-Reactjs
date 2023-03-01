import React from "react";
import { Button, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const AdminOrderDetailsUser = () => {
  return (
    <Col xs="12" className="admin-order-details-user">
      <h4 className="admin-order-details-user-title">User Details</h4>
      <p className="admin-order-details-user-name">
        Name: <span>Mohamed</span>
      </p>
      <p className="admin-order-details-user-phone">
        Phone: <span>0123456789</span>
      </p>
      <p className="admin-order-details-user-email">
        Email: <span>Mohamed@mohamed.com</span>
      </p>
      <div className="admin-order-details-user-actions">
        <div className="admin-order-details-user-actions-total">
          {" "}
          Total $4000
        </div>
        <div className="admin-order-details-user-actions-form">
          <Form.Select aria-label="Default select example">
            <option>Order Status</option>
            <option value="Under construction">Under construction</option>
            <option value="Created">Created</option>
            <option value="Cancel">Cancel</option>
          </Form.Select>
          <Button className="mt-3" variant="dark" type="submit">
            Save
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default AdminOrderDetailsUser;
