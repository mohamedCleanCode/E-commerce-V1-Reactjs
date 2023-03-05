import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategriesContainer from "../../components/Categories/CategriesContainer";
import Pagination from "../../components/Utilities/Pagination";
import { getAllCategories } from "../../redux/actions/categoriesActions";

const CategriesPage = () => {
  const { categories, loading } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories(3));
  }, []);
  return (
    <div className="mt-2">
      <CategriesContainer data={categories?.data} loading={loading} />
      <Pagination
        pageCount={categories.paginationResult?.numberOfPages}
        nextPage={categories.paginationResult?.nextPage}
      />
    </div>
  );
};

export default CategriesPage;
