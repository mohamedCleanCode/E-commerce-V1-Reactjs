import React from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import SubTitle from "../Utilities/SubTitle";
import BrandCard from "./BrandCard";

const BrandContainer = ({ brands, loading }) => {
  return (
    <Container>
      <SubTitle title="Brands" />
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
        <Row className="my-3">
          {brands?.length >= 1 ? (
            brands.map((brand) => {
              return <BrandCard key={brand._id} src={brand.image} />;
            })
          ) : (
            <p>There are no brands yet...!</p>
          )}
        </Row>
      )}
    </Container>
  );
};

export default BrandContainer;
