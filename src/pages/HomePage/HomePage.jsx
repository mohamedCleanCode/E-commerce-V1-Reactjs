import React from "react";
import DiscountSection from "../../components/Home/DiscountSection";
import HomeBrands from "../../components/Home/HomeBrands";
import HomeCategories from "../../components/Home/HomeCategories";
import Slider from "../../components/Home/Slider";
import HomeProducts from "../../components/Products/HomeProducts";

const HomePage = () => {
  return (
    <div className="home-page">
      <Slider />
      <HomeCategories />
      <HomeProducts title="best saller" path="/products" />
      <DiscountSection />
      <HomeProducts title="latest fashion" path="/products" />
      <HomeBrands title="famous brands" />
    </div>
  );
};

export default HomePage;
