import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItemQuantity } from "../../redux/actions/cartActions";

const useUpdateQuantity = (item) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [itemCount, setItemCount] = useState(item?.count);

  const onChangeCount = (e) => {
    let value = e.target.value;
    setItemCount(value);
    updateItemCount(item?._id, value);
  };

  const updateItemCount = async (itemId, count) => {
    await dispatch(
      updateItemQuantity(itemId, {
        count,
      })
    );
  };
  return [cart, itemCount, onChangeCount];
};

export default useUpdateQuantity;
