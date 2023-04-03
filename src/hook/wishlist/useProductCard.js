import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductToWishList } from "../../redux/actions/wishlistActions";

const useProductCard = (product) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  const [color, setColor] = useState("#eee");

  const handleFavorite = async () => {
    if (color === "#eee") {
      setColor("red");
      await dispatch(
        setProductToWishList({
          productId: product?._id,
        })
      );
    }
    if (color === "red") {
      setColor("#eee");
      console.log(color);
    }
  };

  console.log(wishlist);

  return [color, handleFavorite];
};

export default useProductCard;
