import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteReview,
  getAllReviews,
} from "../../redux/actions/ratingsActions";
import notify from "../useNotification";

const useRatingsContainer = (productId) => {
  const dispatch = useDispatch();
  const { loading, reviews, response } = useSelector((state) => state.ratings);

  const limit = 10;

  const { _id: userproductId } = JSON.parse(localStorage.getItem("user"));

  const onPress = (page) => {
    dispatch(getAllReviews(productId, limit, page));
  };

  const handleDeleteReview = async (id) => {
    await dispatch(deleteReview(id));
    await dispatch(getAllReviews(productId, limit));
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
  return [loading, reviews, onPress, userproductId, handleDeleteReview];
};

export default useRatingsContainer;
