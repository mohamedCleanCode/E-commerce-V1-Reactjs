import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews } from "../../redux/actions/ratingsActions";

const useRatingsContainer = (id) => {
  const dispatch = useDispatch();
  const { loading, reviews } = useSelector((state) => state.ratings);
  const limit = 1;

  const onPress = (page) => {
    dispatch(getAllReviews(id, limit, page));
  };

  useEffect(() => {
    dispatch(getAllReviews(id, limit));
  }, []);

  return [loading, reviews, onPress];
};

export default useRatingsContainer;
