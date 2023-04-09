import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import useAdminAddCoupon from "../../hook/coupon/useAdminAddCoupon";

const AdminCouponCard = ({ coupon }) => {
  const [
    name,
    expire,
    discount,
    onChangeName,
    onChangeExpire,
    onChangeDiscount,
    handleSubmit,
    loading,
    ,
    deleteCoupon,
    handleEditCoupon,
    show,
    handleClose,
    handleShow,
  ] = useAdminAddCoupon();

  return (
    <Col xs="12" className="my-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Edit Coupon!</Modal.Body>
        <Modal.Body>
          <Form>
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
                value={expire?.slice(0, coupon?.expire.indexOf("T"))}
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleEditCoupon(coupon?._id)}
          >
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="user-personl-address bg-white p-3 rounded">
        <Row>
          <Col
            xs="12"
            className="d-flex justify-content-between align-items-center"
          >
            <h4 className="mb-0">Coupon Name: {coupon?.name}</h4>
            <div className="user-personl-address-actions d-flex">
              <button
                className="btn"
                style={{ fontSize: "14px" }}
                onClick={() =>
                  handleShow(coupon?.name, coupon?.expire, coupon?.discount)
                }
              >
                Edit <i className="fa-solid fa-gear"></i>
              </button>
              <button
                onClick={() => deleteCoupon(coupon?._id)}
                className="btn"
                style={{ fontSize: "14px" }}
              >
                Remove <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="12">
            <div className="user-personl-address-full-address">
              Expire: {coupon?.expire?.slice(0, coupon?.expire.indexOf("T"))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <div className="user-personl-address-phone text-dark fs-5">
              Dsicount: {coupon?.discount + "%"}
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default AdminCouponCard;
