import React from "react";
import DiscountSection from "../../components/Home/DiscountSection";
import HomeBrands from "../../components/Home/HomeBrands";
import HomeCategories from "../../components/Home/HomeCategories";
import Slider from "../../components/Home/Slider";
import { default as ProductsContainer } from "../../components/Products/ProductsContainer";
import useHomePage from "../../hook/products/useHomePage";

const HomePage = () => {
  const [products] = useHomePage();
  return (
    <div className="home-page">
      <Slider />
      <HomeCategories />
      <ProductsContainer
        products={products?.products}
        loading={products?.loading}
        title="best saller"
        btnTitle="More"
        path="/products"
      />
      <DiscountSection />
      <ProductsContainer
        products={products?.products}
        loading={products?.loading}
        title="latest fashion"
        btnTitle="More"
        path="/products"
      />
      <HomeBrands title="famous brands" />
    </div>
  );
};

export default HomePage;
