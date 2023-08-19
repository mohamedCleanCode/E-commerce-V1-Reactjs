import React from "react";
import { Button, Row, Spinner } from "react-bootstrap";
import useHomeBrands from "../../hook/brands/useHomeBrands";
import BrandCard from "../Brand/BrandCard";
import SubTitle from "../Utilities/SubTitle";

const HomeBrands = () => {
  const [brands, loading] = useHomeBrands();
  console.log(brands);
  return (
    <div className="home-categories container py-4">
      <SubTitle title="famous brands" btnTitle="More" path="/brands" />
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
        <Row className="mt-3">
          {brands?.length >= 1 ? (
            brands.slice(0, 4).map((brand) => {
              return <BrandCard key={brand._id} src={brand.image} />;
            })
          ) : (
            <p>There are no brands yet...!</p>
          )}
        </Row>
      )}
    </div>
  );
};

export default HomeBrands;
