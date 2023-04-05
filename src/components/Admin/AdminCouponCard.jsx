import { Col, Row } from "react-bootstrap";
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
  ] = useAdminAddCoupon();

  return (
    <Col xs="12" className="my-2">
      <div className="user-personl-address bg-white p-3 rounded">
        <Row>
          <Col
            xs="12"
            className="d-flex justify-content-between align-items-center"
          >
            <h4 className="mb-0">Coupon Name: {coupon?.name}</h4>
            <div className="user-personl-address-actions d-flex">
              <button
                to="/user/edit-address"
                className="btn"
                style={{ fontSize: "14px" }}
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
