import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useProductDetails from "../../hook/products/useProductDetails";

const ProductInfo = () => {
  const { id } = useParams();
  const [product, , category, brand, loading] = useProductDetails(id);
  return (
    <div className="product-info mt-3">
      {loading ? (
        <div className="text-center">
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </div>
      ) : (
        <>
          <p className="product-info-cat">{category?.name}</p>
          <p className="product-info-title">{product?.title}</p>
          <p className="product-info-rat">4.5</p>
          <p className="product-info-brand">
            Brand: <span className="brand-name">{brand?.name}</span>
          </p>
          <div className="product-info-colors">
            <span className="product-info-colors-color"></span>
            <span className="product-info-colors-color"></span>
            <span className="product-info-colors-color"></span>
          </div>
          <p className="product-info-Specifications">Specifications:</p>
          <p className="product-info-Specifications-text">
            {product?.description}
          </p>
          <div className="product-info-controls">
            <p className="product-info-controls-price">${product?.price}</p>
            <button className="btn text-white bg-dark rounded">
              Add To Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductInfo;
