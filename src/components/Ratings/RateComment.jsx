import React from "react";
import { Col } from "react-bootstrap";

const RateComment = ({ review }) => {
  return (
    <Col sm="12" className="border-bottom pb-2 mb-2">
      <span className="name me-2 text-dark fw-bold">Mohamed</span>
      <span
        className="rate"
        style={{
          color: "#ffc107",
        }}
      >
        {review?.rating} <i className="fa-solid fa-star"></i>
      </span>
      <p className="comment">{review?.review}</p>
    </Col>
  );
};

export default RateComment;
