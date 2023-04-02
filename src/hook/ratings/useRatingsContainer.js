import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews } from "../../redux/actions/ratingsActions";

const useRatingsContainer = (id) => {
  const dispatch = useDispatch();
  const { loading, reviews } = useSelector((state) => state.ratings);

  useEffect(() => {
    dispatch(getAllReviews(id));
  }, []);

  return [loading, reviews];
};

export default useRatingsContainer;
