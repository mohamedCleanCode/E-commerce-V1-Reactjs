import React from "react";
import DiscountSection from "../../components/Home/DiscountSection";
import HomeBrands from "../../components/Home/HomeBrands";
import HomeCategories from "../../components/Home/HomeCategories";
import Slider from "../../components/Home/Slider";
import {
  default as HomeProducts,
  default as ProductsContainer,
} from "../../components/Products/ProductsContainer";

const HomePage = () => {
  return (
    <div className="home-page">
      <Slider />
      <HomeCategories />
      <HomeProducts title="best saller" path="/products" />
      <DiscountSection />
      <ProductsContainer
        title="latest fashion"
        btnTitle="More"
        path="/products"
      />
      <HomeBrands title="famous brands" />
    </div>
  );
};

export default HomePage;
