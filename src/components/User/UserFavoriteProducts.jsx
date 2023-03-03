import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "../Products/ProductCard";
import Pagination from "../Utilities/Pagination";

const UserFavoriteProducts = () => {
  return (
    <div>
      <h1>Your Favorite Products</h1>
      <Row>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
      <Pagination />
    </div>
  );
};

export default UserFavoriteProducts;
