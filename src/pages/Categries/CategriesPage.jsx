import React from "react";
import CategriesContainer from "../../components/Categories/CategriesContainer";
import Pagination from "../../components/Utilities/Pagination";

const CategriesPage = () => {
  return (
    <div className="mt-2">
      <CategriesContainer />
      <Pagination />
    </div>
  );
};

export default CategriesPage;
