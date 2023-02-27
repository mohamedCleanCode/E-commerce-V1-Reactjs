import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

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
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      showThumbnails={false}
    />
  );
};

export default ProductGallery;
