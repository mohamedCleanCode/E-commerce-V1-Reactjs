import React from "react";
import { Container, Row } from "react-bootstrap";
import brand1 from "../../assets/images/brand1.png";
import brand2 from "../../assets/images/brand2.png";
import brand3 from "../../assets/images/brand3.png";
import SubTitle from "../Utilities/SubTitle";
import BrandCard from "./BrandCard";

const BrandContainer = ({ title }) => {
  return (
    <Container>
      <SubTitle title={title} btnTitle="more" />
      <Row className="my-3">
        <BrandCard src={brand1} />
        <BrandCard src={brand2} />
        <BrandCard src={brand3} />
        <BrandCard src={brand1} />
        <BrandCard src={brand2} />
        <BrandCard src={brand3} />
      </Row>
    </Container>
  );
};

export default BrandContainer;
