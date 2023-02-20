import React from "react";
import { Row } from "react-bootstrap";
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import BrandCard from "../Brand/BrandCard";
import SubTitle from "../Utilities/SubTitle";

const HomeBrands = () => {
  return (
    <div className="home-categories container py-4">
      <SubTitle title="famous brands" btnTitle="More" path="/brands" />
      <Row className="mt-3">
        <BrandCard src={brand1} />
        <BrandCard src={brand2} />
        <BrandCard src={brand3} />
        <BrandCard src={brand1} />
        <BrandCard src={brand2} />
        <BrandCard src={brand3} />
      </Row>
    </div>
  );
};

export default HomeBrands;
