import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hook/useNotification";
import { getAllBrands } from "../../redux/actions/brandsActions";
import { getAllCategories } from "../../redux/actions/categoriesActions";
import {
  editProduct,
  getSpecificProduct,
} from "../../redux/actions/productsActions";
import { getSubCtegoriesOfCategory } from "../../redux/actions/subCategoriesActions";

const useEditProduct = (id) => {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [images, setImages] = useState({});
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [priceBefore, setPriceBefore] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [catId, setCatId] = useState("");
  const [brandId, setBrandId] = useState("");
  const [selectedSubCats, setSelectedSubCats] = useState("");
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { brands } = useSelector((state) => state.brands);
  const { subCategories } = useSelector((state) => state.subCategories);
  const { response: res } = useSelector((state) => state.products);
  const { product } = useSelector((state) => state.products);

  const selectedValue = () => {};
  const onSelect = (selectedList) => {
    setSelectedSubCats(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubCats(selectedList);
  };

  const onChangeCat = async (e) => {
    if (e.target.value !== "0") {
      setCatId(e.target.value);
      await dispatch(getSubCtegoriesOfCategory(e.target.value));
    }
  };

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  async function getFileFromUrl(url, name, defaultType = "image/jpeg") {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], name, {
      type: data.type || defaultType,
    });
  }

  useEffect(() => {
    dispatch(getSpecificProduct(id));
  }, []);

  useEffect(() => {
    if (product) {
      setImages(product?.images);
      setName(product?.title);
      setDesc(product?.description);
      setPriceBefore(product?.priceBefore);
      setPrice(product?.price);
      setQuantity(product?.quantity);
      setCatId(product?.category);
      setCatId(product?.category);
      setBrandId(product?.brand);
      dispatch(getSubCtegoriesOfCategory(product?.category));
      setOptions(subCategories);
    }
  }, [product]);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllBrands());
    if (catId !== "0") {
      if (subCategories?.length) {
        setOptions(subCategories);
      }
    }
  }, [catId, subCategories]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      images.length <= 0 ||
      name === "" ||
      desc === "" ||
      price === "" ||
      quantity === "" ||
      catId === "" ||
      brandId === ""
    ) {
      notify("Warn", "warn");
      return;
    }
    let imageCover;
    if (images[0].length <= 500) {
      await getFileFromUrl(images[0], Math.random() + ".jpg").then(
        (val) => (imageCover = val)
      );
    } else {
      imageCover = dataURLtoFile(images[0], Math.random() + ".png");
    }
    let imagesSent = [];
    Array.from(Object.values(images)).forEach(async (image, i) => {
      if (image.length <= 500) {
        await getFileFromUrl(image, Math.random() + ".jpg").then((val) =>
          imagesSent.push(val)
        );
      } else {
        imagesSent.push(dataURLtoFile(image, Math.random() + ".png"));
      }
    });
    const formData = new FormData();
    formData.append("imageCover", imageCover);
    imagesSent.map((image) => formData.append("images", image));
    formData.append("title", name);
    formData.append("description", desc);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("category", catId);
    selectedSubCats.map((subCat) => formData.append("subcategory", subCat._id));
    formData.append("brand", brandId);
    setLoading(true);
    await dispatch(editProduct(id, formData));
    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      setLoading(false);
      setCatId("0");
      setOptions([]);
      setImages({});
      setName("");
      setDesc("");
      setPriceBefore("");
      setPrice("");
      setQuantity("");
      setBrandId("0");
      setSelectedSubCats([]);
      if (res?.status === 200) {
        notify("Success", "success");
      } else if (res?.status === 400) {
        notify("Error", "error");
      }
    }
  }, [loading, res]);

  return [
    handleSubmit,
    images,
    setImages,
    name,
    setName,
    desc,
    setDesc,
    priceBefore,
    setPriceBefore,
    price,
    setPrice,
    quantity,
    setQuantity,
    catId,
    onChangeCat,
    categories,
    options,
    selectedValue,
    onSelect,
    onRemove,
    brandId,
    setBrandId,
    brands,
    loading,
  ];
};

export default useEditProduct;
