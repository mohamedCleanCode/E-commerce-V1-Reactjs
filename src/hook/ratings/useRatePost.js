import { useState } from "react";

const useRatePost = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [post, setPost] = useState("");
  const [rate, setRate] = useState(0);

  const onChangePost = (e) => {
    let value = e.target.value;
    setPost(value);
  };

  const onChangeRate = (value) => {
    setRate(value);
  };

  const handleSubmit = (e) => {
    console.log(post);
    console.log(rate);
  };

  return [user, post, rate, onChangePost, onChangeRate, handleSubmit];
};

export default useRatePost;
