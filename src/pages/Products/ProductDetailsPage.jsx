import React from "react";
import { Container } from "react-bootstrap";
import CategriesHeader from "../../components/Categories/CategriesHeader";
import ProductDetails from "../../components/Products/ProductDetails";
import RatingsContainer from "../../components/Ratings/RatingsContainer";

const ProductDetailsPage = () => {
  return (
    <Container>
      <CategriesHeader />
      <ProductDetails />
      <RatingsContainer />
    </Container>
  );
};

export default ProductDetailsPage;
