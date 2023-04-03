import React from "react";
import { Button, Col, Modal } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import deleteIcon from "../../assets/images/delete.png";
import edit from "../../assets/images/edit.png";
import useRatingsContainer from "../../hook/ratings/useRatingsContainer";

const RateComment = ({ review, userId, handleDeleteReview }) => {
  const { id } = useParams();
  const [
    ,
    ,
    ,
    ,
    ,
    show,
    handleClose,
    handleShow,
    handleEdit,
    newReview,
    newRate,
    onChangeReview,
    ,
    ratingChanged,
  ] = useRatingsContainer(id, review);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={40}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            value={newRate}
          />
          <input
            className="w-100 border-0 rounded p-2 bg-success bg-opacity-10"
            type="text"
            value={newReview}
            onChange={onChangeReview}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleEdit}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>

      <Col sm="12" className="border-bottom pb-2 mb-2">
        <span className="name me-2 text-dark fw-bold">
          {review?.user?.name}
        </span>
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
                onClick={() => handleShow()}
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
    </>
  );
};

export default RateComment;
