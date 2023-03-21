import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CategriesHeader from "../../components/Categories/CategriesHeader";
import ProductDetails from "../../components/Products/ProductDetails";
import ProductsContainer from "../../components/Products/ProductsContainer";
import RatingsContainer from "../../components/Ratings/RatingsContainer";
import useProductDetails from "../../hook/products/useProductDetails";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, , , , , products] = useProductDetails(id);
  console.log(product);
  return (
    <Container>
      <CategriesHeader />
      <ProductDetails />
      <RatingsContainer />
      <ProductsContainer products={products?.slice(0, 4)} />
    </Container>
  );
};

export default ProductDetailsPage;
