import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../redux/actions/authActions";
import notify from "../useNotification";

const useResetPasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const onChangeEmail = (e) => {
    let value = e.target.value;
    setEamil(value);
  };
  const onChangePassword = (e) => {
    let value = e.target.value;
    setPassword(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      resetPassword({
        email,
        newPassword: password,
      })
    );
    setLoading(true);
  };
  useEffect(() => {
    if (loading) {
      setLoading(false);
      if (auth) {
        console.log(auth);
        if (auth.response?.data?.token) {
          notify("Success", "success");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else if (auth.errors?.data?.status === "fail") {
          console.log(auth.errors?.data?.status);
          notify(auth.errors?.data?.message, "error");
        }
      }
    }
  }, [loading]);
  return [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    handleSubmit,
  ];
};

export default useResetPasswordPage;
