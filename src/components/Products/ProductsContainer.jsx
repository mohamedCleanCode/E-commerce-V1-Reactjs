import React from "react";
import { Row } from "react-bootstrap";
import SubTitle from "../Utilities/SubTitle";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ title, btnTitle, path }) => {
  return (
    <div className="home-products container mt-2">
      <SubTitle title={title} btnTitle={btnTitle} path={path} />
      <Row className="mt-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </div>
  );
};

export default ProductsContainer;
