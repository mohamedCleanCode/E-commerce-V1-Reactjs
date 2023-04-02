import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hook/useNotification";
import { getAllReviews, setRatePost } from "../../redux/actions/ratingsActions";

const useRatePost = (id) => {
  const dispatch = useDispatch();
  const ratings = useSelector((state) => state.ratings);
  const user = JSON.parse(localStorage.getItem("user"));
  const [post, setPost] = useState("");
  const [rate, setRate] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 10;

  const onChangePost = (e) => {
    let value = e.target.value;
    setPost(value);
  };

  const onChangeRate = (value) => {
    setRate(value);
  };

  const handleSubmit = async (e) => {
    await dispatch(
      setRatePost(id, {
        review: post,
        rating: rate,
      })
    );
    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      if (ratings) {
        console.log(ratings);
        if (ratings.response?.status === 201) {
          notify("Success", "success");
          setPost("");
          setRate(0.5);
          dispatch(getAllReviews(id, limit));
        } else if (ratings.response?.data?.status === "fail") {
          notify(ratings.response?.data?.message, "error");
        } else {
          notify("Something went wrong", "error");
        }
      }
    }
  }, [loading, ratings]);

  return [user, post, rate, onChangePost, onChangeRate, handleSubmit];
};

export default useRatePost;
