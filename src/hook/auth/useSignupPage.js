import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

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

  const responseValidation = (auth) => {
    if (auth) {
      if (auth.user?.token) {
        localStorage.setItem("token", auth.user.token);
        notify("Success", "success");
        setLoading(false);
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setPasswordConfirm("");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else if (auth.errors?.data?.errors) {
        console.log(auth.errors?.data?.errors);
        if (auth.errors?.data?.errors[0]?.msg === "E-mail already in use") {
          notify(auth.errors?.data?.errors[0]?.msg, "error");
        }
        if (
          auth.errors?.data?.errors[0]?.msg ===
          "accept only egypt phone numbers"
        ) {
          notify(auth.errors?.data?.errors[0]?.msg, "error");
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
