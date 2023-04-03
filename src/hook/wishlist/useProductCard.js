import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProductToWishList,
  setProductToWishList,
} from "../../redux/actions/wishlistActions";

const useProductCard = (product) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  const [color, setColor] = useState(
    localStorage.getItem(product?._id) || "#eee"
  );

  const handleFavorite = async () => {
    if (color === "#eee") {
      localStorage.setItem(product?._id, "red");
      setColor(localStorage.getItem(product?._id));
      await dispatch(
        setProductToWishList({
          productId: product?._id,
        })
      );
    }
    if (color === "red") {
      localStorage.setItem(product?._id, "#eee");
      setColor(localStorage.getItem(product?._id));
      await dispatch(removeProductToWishList(product?._id));
    }
  };

  console.log(wishlist);

  return [color, handleFavorite];
};

export default useProductCard;
