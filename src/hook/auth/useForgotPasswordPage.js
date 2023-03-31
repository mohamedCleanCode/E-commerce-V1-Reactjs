import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../../hook/useNotification";
import { forgotPassword } from "../../redux/actions/authActions";

const useForgotPasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const onChangeEmail = (e) => {
    let value = e.target.value;
    setEmail(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      forgotPassword({
        email,
      })
    );
    setLoading(true);
  };
  useEffect(() => {
    if (loading) {
      setLoading(false);
      if (auth) {
        if (auth.response?.data?.status === "Success") {
          notify(auth.response.data?.message, "success");
          setTimeout(() => {
            navigate("/user/reset-password");
          }, 2000);
        } else if (auth.errors?.data?.status === "fail") {
          console.log(auth.errors?.data?.status);
          notify(auth.errors?.data?.message, "error");
        }
      }
    }
  }, [loading]);
  return [email, loading, onChangeEmail, handleSubmit];
};

export default useForgotPasswordPage;
