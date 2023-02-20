import React from "react";
import { Row } from "react-bootstrap";
import SubTitle from "../Utilities/SubTitle";
import ProductCard from "./ProductCard";

const HomeProducts = ({ title, path }) => {
  return (
    <div className="home-products container">
      <SubTitle title={title} btnTitle="More" path={path} />
      <Row className="mt-3">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </div>
  );
};

export default HomeProducts;
