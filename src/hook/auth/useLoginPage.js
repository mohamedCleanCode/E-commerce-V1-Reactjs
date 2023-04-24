import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hook/useNotification";
import { loginUser } from "../../redux/actions/authActions";

const useLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

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
        localStorage.setItem("user", JSON.stringify(auth.user.data));
        console.log(auth.user.token);
        console.log(auth.user.data);
        notify("Success", "success");
        setLoading(false);
        setEmail("");
        setPassword("");
        setTimeout(() => {
          window.location.replace("/");
        }, 2000);
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
      if (auth.errors?.data) {
        if (auth.errors.data.message === "Incorrect email or password") {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
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
