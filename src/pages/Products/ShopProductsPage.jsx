import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategriesHeader from "../../components/Categories/CategriesHeader";
import ProductsContainer from "../../components/Products/ProductsContainer";
import Pagination from "../../components/Utilities/Pagination";
import SearchCountResult from "../../components/Utilities/SearchCountResult";
import SideFilter from "../../components/Utilities/SideFilter";
import useShopProductsPage from "../../hook/products/useShopProductsPage";

const ShopProductsPage = () => {
  const [products] = useShopProductsPage();
  return (
    <Container>
      <CategriesHeader />
      <SearchCountResult title="500" />
      <Row>
        <Col xs="2" sm="2" md="2" lg="2">
          <SideFilter />
        </Col>
        <Col xs="10" sm="10" md="10" lg="10">
          <ProductsContainer
            products={products?.products}
            loading={products?.loading}
          />
        </Col>
      </Row>
      <Pagination />
    </Container>
  );
};

export default ShopProductsPage;
