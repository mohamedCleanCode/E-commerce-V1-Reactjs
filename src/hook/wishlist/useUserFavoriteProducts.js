import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllWishList } from "../../redux/actions/wishlistActions";

const useUserFavoriteProducts = () => {
  const dispatch = useDispatch();
  const { wishlist, loading } = useSelector((state) => state.wishlist);

  useEffect(() => {
    dispatch(getAllWishList());
  }, []);

  return [wishlist, loading];
};

export default useUserFavoriteProducts;
