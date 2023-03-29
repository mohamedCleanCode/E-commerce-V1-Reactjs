import { useState } from "react";

const useForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const onChangeEmail = (e) => {
    let value = e.target.value;
    setEmail(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return [email, loading, onChangeEmail, handleSubmit];
};

export default useForgotPasswordPage;
