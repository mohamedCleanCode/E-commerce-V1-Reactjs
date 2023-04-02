import React from "react";
import { Button, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useRatingsContainer from "../../hook/ratings/useRatingsContainer";
import Pagination from "../Utilities/Pagination";
import RateComment from "./RateComment";
import RatePost from "./RatePost";

const RatingsContainer = ({ ratingsAverage, ratingsQuantity }) => {
  const { id } = useParams();
  const [loading, reviews] = useRatingsContainer(id);
  console.log(loading);
  console.log(reviews);

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
          {loading ? (
            <div className="text-center">
              <Button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            </div>
          ) : reviews?.data?.length >= 1 ? (
            reviews.data.map((review) => {
              return <RateComment key={review._id} review={review} />;
            })
          ) : (
            <p>There are not reviews yet...!</p>
          )}
          <Pagination />
        </Row>
      </div>
    </>
  );
};

export default RatingsContainer;
