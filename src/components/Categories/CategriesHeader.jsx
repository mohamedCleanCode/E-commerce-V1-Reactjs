import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useSideFilter from "../../hook/search/useSideFilter";

const CategriesHeader = () => {
  const [
    categories,
    brands,
    clickInputCats,
    clickInputBrands,
    onChangePriceFrom,
    onChangePriceTo,
  ] = useSideFilter();
  return (
    <div className="categries-header">
      <Row className="w-100">
        <Col className="d-flex flex-wrap" xm="12" sm="12" md="12" lg="12">
          {categories?.data?.length >= 1
            ? categories.data.slice(0, 8).map((cat) => {
                return (
                  <Link to={`/products/category/${cat?._id}`}>
                    <div>{cat?.name}</div>
                  </Link>
                );
              })
            : null}
          <Link to="/categries">
            <div>more</div>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default CategriesHeader;
