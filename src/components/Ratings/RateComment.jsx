import React from "react";
import { Col } from "react-bootstrap";
import deleteIcon from "../../assets/images/delete.png";
import edit from "../../assets/images/edit.png";

const RateComment = ({ review, userId, handleDeleteReview }) => {
  return (
    <Col sm="12" className="border-bottom pb-2 mb-2">
      <span className="name me-2 text-dark fw-bold">{review?.user?.name}</span>
      <span
        className="rate"
        style={{
          color: "#ffc107",
        }}
      >
        {review?.rating} <i className="fa-solid fa-star"></i>
      </span>

      <div className="d-flex justify-content-between">
        <p className="comment">{review?.review}</p>
        {userId === review?.user?._id && (
          <div className="action">
            <img
              src={edit}
              alt="edit"
              width="20p"
              height="20px"
              style={{ cursor: "pointer" }}
            />
            <img
              src={deleteIcon}
              alt="delete"
              width="20p"
              height="20px"
              style={{ cursor: "pointer", marginLeft: "10px" }}
              onClick={() => handleDeleteReview(review?._id)}
            />
          </div>
        )}
      </div>
    </Col>
  );
};

export default RateComment;
