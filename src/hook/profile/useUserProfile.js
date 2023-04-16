import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../../hook/useNotification";
import { changeUserPassword } from "../../redux/actions/profileActions";

const useUserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const user = JSON.parse(localStorage.getItem("user") || {});
  const [currentPassword, setCurrentPassword] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [loading, setLoading] = useState(false);

  const onChangeCurrentPassword = (e) => {
    let value = e.target.value;
    setCurrentPassword(value);
  };
  const onChangePassword = (e) => {
    let value = e.target.value;
    setPassword(value);
  };
  const onChangePasswordConfirm = (e) => {
    let value = e.target.value;
    setPasswordConfirm(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentPassword || !password || !passwordConfirm) {
      return notify("Please fill the inputs..!!", "warn");
    }
    await dispatch(
      changeUserPassword({
        currentPassword,
        password,
        passwordConfirm,
      })
    );
    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      if (profile) {
        if (profile.response?.status === 200) {
          console.log(profile);
          notify("Success", "success");
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          setTimeout(() => {
            window.location.href = "/login";
          }, 1500);
        } else {
          notify("Something wen wrong", "warn");
        }
      }
    }
  }, [loading, profile]);
  return [
    user,
    currentPassword,
    password,
    passwordConfirm,
    onChangeCurrentPassword,
    onChangePassword,
    onChangePasswordConfirm,
    handleSubmit,
  ];
};

export default useUserProfile;
