import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from "react-router-dom";
import useProductDetails from "../../hook/products/useProductDetails";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
  },
];
const ProductGallery = () => {
  const { id } = useParams();
  const [, images] = useProductDetails(id);
  return (
    <ImageGallery
      items={images ? images : []}
      showPlayButton={false}
      showThumbnails={false}
    />
  );
};

export default ProductGallery;
