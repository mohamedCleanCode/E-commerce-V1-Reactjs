import React from "react";
import HomeCategories from "../../components/Home/HomeCategories";
import Slider from "../../components/Home/Slider";
import NavBar from "../../components/Utilities/NavBar";

const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <Slider />
      <HomeCategories />
    </div>
  );
};

export default HomePage;
