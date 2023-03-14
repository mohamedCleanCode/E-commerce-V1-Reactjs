import React from "react";
import BrandContainer from "../../components/Brand/BrandContainer";
import Pagination from "../../components/Utilities/Pagination";
import useBrandsPage from "../../hook/brands/useBrandsPage";

const BrandsPage = () => {
  const [brands, loading, res, onPress] = useBrandsPage();

  return (
    <div className="mt-2">
      <BrandContainer brands={brands && brands} loading={loading && loading} />
      <Pagination
        pageCount={res.paginationResult?.numberOfPages}
        onPress={onPress}
      />
    </div>
  );
};

export default BrandsPage;
