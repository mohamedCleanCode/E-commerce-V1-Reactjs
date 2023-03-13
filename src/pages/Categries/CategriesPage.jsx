import React from "react";
import CategriesContainer from "../../components/Categories/CategriesContainer";
import Pagination from "../../components/Utilities/Pagination";
import useCategoriesPage from "../../hook/categories/useCategoriesPage";

const CategriesPage = () => {
  const [categories, loading, onPress] = useCategoriesPage();
  return (
    <div className="mt-2">
      <CategriesContainer data={categories?.data} loading={loading} />
      {categories.paginationResult?.numberOfPages === 1 ? null : (
        <Pagination
          pageCount={categories.paginationResult?.numberOfPages}
          onPress={onPress}
        />
      )}
    </div>
  );
};

export default CategriesPage;
