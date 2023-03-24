import { useEffect, useState } from "react";
import useShopProductsPage from "../products/useShopProductsPage";

const useNavBar = () => {
  const [products, loading, res, onPress, getProducts] = useShopProductsPage();
  const [searchWord, setSearchWord] = useState("");

  const onSearchInputChange = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
  };
  useEffect(() => {
    getProducts();
  }, [searchWord]);
  return [searchWord, onSearchInputChange];
};

export default useNavBar;
