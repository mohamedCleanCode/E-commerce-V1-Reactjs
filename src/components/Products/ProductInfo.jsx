import React from "react";

const ProductInfo = () => {
  return (
    <div className="product-info mt-3">
      <p className="product-info-cat">Electrons</p>
      <p className="product-info-title">sdfadffffffffff</p>
      <p className="product-info-rat">4.5</p>
      <p className="product-info-brand">
        Brand: <span className="brand-name">Apple</span>
      </p>
      <div className="product-info-colors">
        <span className="product-info-colors-color"></span>
        <span className="product-info-colors-color"></span>
        <span className="product-info-colors-color"></span>
      </div>
      <p className="product-info-Specifications">Specifications:</p>
      <p className="product-info-Specifications-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit fuga
        quasi nihil facere quam dignissimos ducimus rerum fugit quos, nam
        mollitia est iure deserunt harum maiores, provident omnis eius quas.
      </p>
      <div className="product-info-controls">
        <p className="product-info-controls-price">$14500</p>
        <button className="btn text-white bg-dark rounded">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductInfo;
