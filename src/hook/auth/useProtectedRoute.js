import { useEffect, useState } from "react";

const useProtectedRoute = () => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [isUser, setIsUser] = useState();
  const [isAdmin, setIsAdmin] = useState();

  useEffect(() => {
    if (userData) {
      if (userData.role === "admin") {
        setIsAdmin(true);
        setIsUser(false);
      } else if (userData.role === "user") {
        setIsUser(true);
        setIsAdmin(false);
      }
    } else {
      setIsAdmin(false);
      setIsUser(false);
    }
  }, [userData]);
  return [isUser, isAdmin, userData];
};

export default useProtectedRoute;
