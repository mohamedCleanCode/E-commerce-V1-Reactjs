import React from "react";
import { Button, Row, Spinner } from "react-bootstrap";
import SubTitle from "../Utilities/SubTitle";
import ProductCard from "./ProductCard";

const ProductsContainer = ({ title, btnTitle, path, products, loading }) => {
  return (
    <div className="home-products container mt-2">
      <SubTitle title={title} btnTitle={btnTitle} path={path} />
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
        <Row className="mt-3">
          {products?.length >= 1 ? (
            products.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })
          ) : (
            <p>There are no products yet...!</p>
          )}
        </Row>
      )}
    </div>
  );
};

export default ProductsContainer;
