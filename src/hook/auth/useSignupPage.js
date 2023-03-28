import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hook/useNotification";
import { createNewUser } from "../../redux/actions/authActions";

const useSignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const onChangeName = (e) => {
    let value = e.target.value;
    setName(value);
  };
  const onChangeEmail = (e) => {
    let value = e.target.value;
    setEmail(value);
  };
  const onChangePhone = (e) => {
    let value = e.target.value;
    setPhone(value);
  };
  const onChangePassword = (e) => {
    let value = e.target.value;
    setPassword(value);
  };
  const onChangePasswordConfirm = (e) => {
    let value = e.target.value;
    setPasswordConfirm(value);
  };

  const handleValidation = () => {
    if (phone.length <= 10) {
      notify("Warn", "warn");
      return;
    }
    if (password !== passwordConfirm) {
      notify("Warn", "warn");
      return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleValidation();
    setLoading(true);
    await dispatch(
      createNewUser({
        name,
        email,
        password,
        passwordConfirm,
        phone,
      })
    );
    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      setLoading(false);
      if (auth) {
        if (auth.user?.token) {
          localStorage.setItem("token", auth.user.token);
          notify("Success", "success");
        }
        if (auth.errors?.data) {
          if (auth.errors.data.errors[0].msg === "E-mail already in use") {
            notify(auth.errors.data.errors[0].msg, "error");
          }
        }
      }
    }
  }, [loading, auth]);

  return [
    name,
    email,
    phone,
    password,
    passwordConfirm,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangePasswordConfirm,
    handleSubmit,
  ];
};

export default useSignupPage;
