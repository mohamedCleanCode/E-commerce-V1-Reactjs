import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../../hook/useNotification";
import { loginUser } from "../../redux/actions/authActions";

const useLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    let value = e.target.value;
    setEmail(value);
  };
  const onChangePassword = (e) => {
    let value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(
      loginUser({
        email,
        password,
      })
    );
    setLoading(true);
  };

  const responseValidation = (auth) => {
    if (auth) {
      setLoading(false);
      if (auth.user?.token) {
        localStorage.setItem("token", auth.user.token);
        notify("Success", "success");
        setLoading(false);
        setEmail("");
        setPassword("");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
      if (auth.errors?.data) {
        if (auth.errors.data.message === "Incorrect email or password") {
          notify(auth.errors.data.message, "error");
        }
      }
    }
  };

  useEffect(() => {
    if (loading) {
      responseValidation(auth);
    }
  }, [loading, auth]);

  return [
    email,
    password,
    onChangeEmail,
    onChangePassword,
    loading,
    handleSubmit,
  ];
};

export default useLoginPage;
