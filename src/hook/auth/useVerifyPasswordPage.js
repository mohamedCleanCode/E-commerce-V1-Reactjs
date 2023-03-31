import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../../hook/useNotification";
import { verifyPassword } from "../../redux/actions/authActions";

const useVerifyPasswordPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const onChangeCode = (e) => {
    let value = e.target.value;
    setCode(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      verifyPassword({
        resetCode: code,
      })
    );
    setLoading(true);
  };
  useEffect(() => {
    if (loading) {
      setLoading(false);
      if (auth) {
        if (auth.response?.data?.status === "Success") {
          notify("Success", "success");
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
  return [code, loading, onChangeCode, handleSubmit];
};

export default useVerifyPasswordPage;
