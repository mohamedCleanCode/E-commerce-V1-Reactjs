import React from "react";
import { Button, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const AdminOrderDetailsUser = ({ user, totalOrderPrice }) => {
  return (
    <Col xs="12">
      <div className="admin-order-details-user">
        <h4 className="admin-order-details-user-title">User Details</h4>
        <p className="admin-order-details-user-name">
          Name: <span>{user?.name}</span>
        </p>
        <p className="admin-order-details-user-phone">
          Phone: <span>{user?.phone}</span>
        </p>
        <p className="admin-order-details-user-email">
          Email: <span>{user?.email}</span>
        </p>
        <div className="admin-order-details-user-actions">
          <div className="admin-order-details-user-actions-total">
            Total ${totalOrderPrice}
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
      </div>
    </Col>
  );
};

export default AdminOrderDetailsUser;
