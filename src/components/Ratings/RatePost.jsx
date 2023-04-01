import React from "react";
import { Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import useRatePost from "../../hook/ratings/useRatePost";

const RatePost = () => {
  const [user, post, rate, onChangePost, onChangeRate, handleSubmit] =
    useRatePost();

  const ratingChanged = (newRating) => {
    onChangeRate(newRating);
  };

  return (
    <div className="rate-post">
      <Row className="align-items-center">
        <Col xs="3">
          <p className="rate-post-name">{user?.name}</p>
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
            value={post}
            onChange={onChangePost}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <button onClick={handleSubmit} className="btn bg-dark text-white">Add a post</button>
        </Col>
      </Row>
    </div>
  );
};

export default RatePost;
