import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductsContainer from "../../components/Products/ProductsContainer";
import Pagination from "../../components/Utilities/Pagination";
import useProductsByCategoryPage from "../../hook/products/useProductsByCategoryPage";

const ProductsByCategoryPage = () => {
  const { id } = useParams();
  const [products, loading, res, onPress] = useProductsByCategoryPage(id);

  return (
    <Container>
      <Row>
        <Col xs="12">
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

export default ProductsByCategoryPage;
