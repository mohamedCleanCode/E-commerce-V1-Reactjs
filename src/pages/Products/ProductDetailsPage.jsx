import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CategriesHeader from "../../components/Categories/CategriesHeader";
import ProductDetails from "../../components/Products/ProductDetails";
import ProductsContainer from "../../components/Products/ProductsContainer";
import RatingsContainer from "../../components/Ratings/RatingsContainer";

const ProductDetailsPage = () => {
  const { id } = useParams();
  return (
    <Container>
      <CategriesHeader />
      <ProductDetails />
      <RatingsContainer />
      <ProductsContainer />
    </Container>
  );
};

export default ProductDetailsPage;
