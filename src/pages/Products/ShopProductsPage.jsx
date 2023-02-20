import React from "react";
import { Container } from "react-bootstrap";
import CategriesHeader from "../../components/Categories/CategriesHeader";
import SearchCountResult from "../../components/Utilities/SearchCountResult";

const ShopProductsPage = () => {
  return (
    <Container>
      <CategriesHeader />
      <SearchCountResult title="500" />
    </Container>
  );
};

export default ShopProductsPage;
