import { useState } from "react";
import notify from "../../hook/useNotification";

const useSignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

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
