import React from "react";
import BrandContainer from "../../components/Brand/BrandContainer";
import DiscountSection from "../../components/Home/DiscountSection";
import HomeCategories from "../../components/Home/HomeCategories";
import Slider from "../../components/Home/Slider";
import HomeProducts from "../../components/Products/HomeProducts";

const HomePage = () => {
  return (
    <div className="home-page">
      <Slider />
      <HomeCategories />
      <HomeProducts title="best saller" />
      <DiscountSection />
      <HomeProducts title="latest fashion" />
      <BrandContainer title="famous brands" />
    </div>
  );
};

export default HomePage;
