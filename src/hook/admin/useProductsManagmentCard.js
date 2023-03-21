import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  getAllProducts,
} from "../../redux/actions/productsActions";

const useProductsManagmentCard = (product) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleDelete = async (e) => {
    await dispatch(deleteProduct(product?._id));
    setShow(false);
    await dispatch(getAllProducts());
  };
  return [show, handleClose, handleShow, handleDelete];
};

export default useProductsManagmentCard;
