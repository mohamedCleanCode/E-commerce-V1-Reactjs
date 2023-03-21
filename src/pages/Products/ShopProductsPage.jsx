import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategriesHeader from "../../components/Categories/CategriesHeader";
import ProductsContainer from "../../components/Products/ProductsContainer";
import Pagination from "../../components/Utilities/Pagination";
import SearchCountResult from "../../components/Utilities/SearchCountResult";
import SideFilter from "../../components/Utilities/SideFilter";
import useShopProductsPage from "../../hook/products/useShopProductsPage";

const ShopProductsPage = () => {
  const [products, loading, res, onPress] = useShopProductsPage();
  console.log(res);
  return (
    <Container>
      <CategriesHeader />
      <SearchCountResult title={res?.results} />
      <Row>
        <Col xs="2" sm="2" md="2" lg="2">
          <SideFilter />
        </Col>
        <Col xs="10" sm="10" md="10" lg="10">
          <ProductsContainer products={products} loading={loading} />
        </Col>
      </Row>
      <Pagination
        pageCount={res?.paginationResult?.numberOfPages}
        onPress={onPress}
      />
    </Container>
  );
};

export default ShopProductsPage;
