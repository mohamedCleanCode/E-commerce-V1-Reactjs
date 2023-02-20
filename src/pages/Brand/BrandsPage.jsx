import React from "react";
import BrandContainer from "../../components/Brand/BrandContainer";
import Pagination from "../../components/Utilities/Pagination";

const BrandsPage = () => {
  return (
    <div className="mt-2">
      <BrandContainer />
      <Pagination />
    </div>
  );
};

export default BrandsPage;
