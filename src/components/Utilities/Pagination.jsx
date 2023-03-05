import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";

const Pagination = ({ pageCount, onPress }) => {
  const dispatch = useDispatch();
  const handlePageClick = (e) => {
    onPress(e.selected + 1);
  };
  return (
    <ReactPaginate
      className="pagination justify-content-center"
      pageClassName="page-item"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      pageLinkClassName="page-link text-dark"
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link text-dark"
      nextLinkClassName="page-link text-dark"
      activeClassName="active bg-dark text-light"
      breakLabel="..."
      nextLabel="next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="< previous"
    />
  );
};

export default Pagination;
