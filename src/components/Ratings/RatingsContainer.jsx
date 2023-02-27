import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductsContainer from "../Products/ProductsContainer";
import RateComment from "./RateComment";
import RatePost from "./RatePost";

const RatingsContainer = () => {
  return (
    <>
      <div className="ratings-container py-3 px-2">
        <div className="ratnigs-title d-flex align-items-center">
          <p className="ratnigs-title-heading me-2">Ratings</p>
          <p className="ratnigs-title-rate">
            4.3 <i className="fa-solid fa-star"></i>
          </p>
          <p className="ratnigs-title-count text-dark-50">(160 ratings)</p>
        </div>
        <RatePost />
        <Row className="my-4 px-2">
          <RateComment />
          <RateComment />
          <RateComment />
        </Row>
      </div>
      <Row>
        <Col>
          <ProductsContainer title="Products may you like it" />
        </Col>
      </Row>
    </>
  );
};

export default RatingsContainer;
