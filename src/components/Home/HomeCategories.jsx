import React from "react";
import { Row } from "react-bootstrap";
import cat2 from "../../assets/images/cat2.png";
import clothe from "../../assets/images/clothe.png";
import labtop from "../../assets/images/labtop.png";
import pic from "../../assets/images/pic.png";
import sale from "../../assets/images/sale.png";
import CategoriesCard from "../Categories/CategoriesCard";
import SubTitle from "../Utilities/SubTitle";

const HomeCategories = () => {
  return (
    <div className="home-categories container py-4">
      <SubTitle title="Categories" btnTitle="More" />
      <Row className="mt-5">
        <CategoriesCard
          src={clothe}
          title="Discounts"
          backgroundColor="#f4dba5"
        />
        <CategoriesCard
          src={cat2}
          title="Discounts"
          backgroundColor="#f4dba5"
        />
        <CategoriesCard
          src={sale}
          title="Discounts"
          backgroundColor="#f4dba5"
        />
        <CategoriesCard
          src={labtop}
          title="Discounts"
          backgroundColor="#f4dba5"
        />
        <CategoriesCard src={pic} title="Discounts" backgroundColor="#f4dba5" />
      </Row>
    </div>
  );
};

export default HomeCategories;
