import React from "react";
import { Row } from "react-bootstrap";
import Pagination from "../Utilities/Pagination";
import RateComment from "./RateComment";
import RatePost from "./RatePost";

const RatingsContainer = ({ ratingsAverage, ratingsQuantity }) => {
  return (
    <>
      <div className="ratings-container py-3 px-2">
        <div className="ratnigs-title d-flex align-items-center">
          <p className="ratnigs-title-heading me-2">Ratings</p>
          <p className="ratnigs-title-rate">
            {ratingsAverage} <i className="fa-solid fa-star"></i>
          </p>
          <p className="ratnigs-title-count text-dark-50">
            ({ratingsQuantity} ratings)
          </p>
        </div>

        <RatePost />

        <Row className="my-4 px-2">
          <RateComment />
          <RateComment />
          <RateComment />
          <Pagination />
        </Row>
      </div>
    </>
  );
};

export default RatingsContainer;
