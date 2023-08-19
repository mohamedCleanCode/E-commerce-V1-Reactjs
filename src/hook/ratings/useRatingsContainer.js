import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteReview,
  getAllReviews,
  updataReview,
} from "../../redux/actions/ratingsActions";
import notify from "../useNotification";

const useRatingsContainer = (productId, review) => {
  const dispatch = useDispatch();
  const { loading, reviews, response } = useSelector((state) => state.ratings);

  const limit = 10;

  const { _id: userproductId } = JSON.parse(localStorage.getItem("user")) || "";

  const onPress = (page) => {
    dispatch(getAllReviews(productId, limit, page));
  };

  const handleDeleteReview = async (id) => {
    await dispatch(deleteReview(id));
    await dispatch(getAllReviews(productId, limit));
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = async () => {
    if (newReview && newRate) {
      await dispatch(
        updataReview(review?._id, {
          review: newReview,
          rating: newRate,
        })
      );
      await dispatch(getAllReviews(productId, limit));
      handleClose();
      console.log(response);
    }
  };

  const [newReview, setNewReview] = useState(review?.review);
  const [newRate, setNewRate] = useState(review?.rating);
  const onChangeReview = (e) => {
    let value = e.target.value;
    setNewReview(value);
  };
  const onChangeRate = (e) => {
    let value = e.target.value;
    setNewRate(value);
  };
  const ratingChanged = (newRating) => {
    setNewRate(newRating);
  };

  useEffect(() => {
    dispatch(getAllReviews(productId, limit));
  }, []);

  useEffect(() => {
    if (response) {
      if (response?.status === 204) {
        notify("Success", "success");
      }
    }
  }, [response]);
  return [
    loading,
    reviews,
    onPress,
    userproductId,
    handleDeleteReview,
    show,
    handleClose,
    handleShow,
    handleEdit,
    newReview,
    newRate,
    onChangeReview,
    onChangeRate,
    ratingChanged,
  ];
};

export default useRatingsContainer;
