import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategriesHeader from "../../components/Categories/CategriesHeader";
import SearchCountResult from "../../components/Utilities/SearchCountResult";
import SideFilter from "../../components/Utilities/SideFilter";

const ShopProductsPage = () => {
  return (
    <Container>
      <CategriesHeader />
      <SearchCountResult title="500" />
      <Row>
        <Col xm="2" sm="2" md="2" lg="2">
          <SideFilter />
        </Col>
        <Col xm="10" sm="10" md="10" lg="10">
          feqwrwe
        </Col>
      </Row>
    </Container>
  );
};

export default ShopProductsPage;
