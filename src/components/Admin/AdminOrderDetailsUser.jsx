import React from "react";
import { Button, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import useChangeOrderStatus from "../../hook/admin/useChangeOrderStatus";

const AdminOrderDetailsUser = ({ user, totalOrderPrice }) => {
  const { id } = useParams();
  const [onChangePay] = useChangeOrderStatus(id);

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
          <div className="admin-order-details-user-actions-form d-flex">
            <div className="d-flex me-3">
              <Form.Select
                aria-label="Default select example"
                style={{ width: "100px" }}
                onChange={onChangePay}
              >
                <option value="0">Pay</option>
                <option value={true}>yes</option>
                <option value={false}>no</option>
              </Form.Select>
              <Button variant="dark" type="submit">
                Save
              </Button>
            </div>
            <div className="d-flex">
              <Form.Select
                aria-label="Default select example"
                style={{ width: "100px" }}
              >
                <option value="0">deliver</option>
                <option value={true}>yes</option>
                <option value={false}>no</option>
              </Form.Select>
              <Button variant="dark" type="submit">
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default AdminOrderDetailsUser;
