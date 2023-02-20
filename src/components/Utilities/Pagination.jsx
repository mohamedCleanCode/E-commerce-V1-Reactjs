import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = () => {
  const handlePageClick = (e) => {};
  return (
    <ReactPaginate
      className="pagination justify-content-center"
      pageClassName="page-item"
      breakClassName="page-item"
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
      pageCount={100}
      previousLabel="< previous"
    />
  );
};

export default Pagination;
