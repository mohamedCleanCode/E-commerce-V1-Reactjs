import React from "react";
import BrandContainer from "../../components/Brand/BrandContainer";
import DiscountSection from "../../components/Home/DiscountSection";
import HomeCategories from "../../components/Home/HomeCategories";
import Slider from "../../components/Home/Slider";
import HomeProducts from "../../components/Products/HomeProducts";
import Footer from "../../components/Utilities/Footer";
import NavBar from "../../components/Utilities/NavBar";

const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <Slider />
      <HomeCategories />
      <HomeProducts title="best saller" />
      <DiscountSection />
      <HomeProducts title="latest fashion" />
      <BrandContainer title="famous brands" />
      <Footer />
    </div>
  );
};

export default HomePage;
