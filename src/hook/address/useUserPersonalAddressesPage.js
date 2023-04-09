import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddresses } from "../../redux/actions/addressActions";

const useUserPersonalAddressesPage = () => {
  const dispatch = useDispatch();
  const { addresses, loading } = useSelector((state) => state.address);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllAddresses());
    };
    fetchData();
  }, []);

  return [addresses, loading];
};

export default useUserPersonalAddressesPage;
