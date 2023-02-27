import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const RatePost = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="rate-post">
      <Row className="align-items-center">
        <Col xs="3">
          <p className="rate-post-name">Mohamed Mostafa</p>
        </Col>
        <Col>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={40}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <textarea
            className="p-1 w-100 rounded"
            rows="2"
            placeholder="Write your comment..!"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <button className="btn bg-dark text-white">Add a post</button>
        </Col>
      </Row>
    </div>
  );
};

export default RatePost;
