import React from "react";
import { Container } from "react-bootstrap";
import CategriesHeader from "../../components/Categories/CategriesHeader";
import ProductDetails from "../../components/Products/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <Container>
      <CategriesHeader />
      <ProductDetails />
    </Container>
  );
};

export default ProductDetailsPage;
