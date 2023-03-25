import React from "react";
import UnopDropdown from "unop-react-dropdown";
import sort from "../../assets/images/sort.png";

const SearchCountResult = ({ title, getProducts }) => {
  const handler = () => {};
  const clickMe = (key) => {
    localStorage.setItem("sortType", key);
    getProducts();
  };
  return (
    <div className="search-count-result my-2 d-flex justify-content-between align-items-center">
      <div className="sub-title">{title} Results...</div>
      <div className="drop-down-menu">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <div>
              <img src={sort} alt="icon" />
              sort by
            </div>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="card-filter">
            <div onClick={() => clickMe("")}>original</div>
            <div onClick={() => clickMe("best saller")}>best saller</div>
            <div onClick={() => clickMe("best rated")}>best rated</div>
            <div onClick={() => clickMe("Price from lowest to highest")}>
              Price from lowest to highest
            </div>
            <div onClick={() => clickMe("Price from highest to lowest")}>
              Price from highest to lowest
            </div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;
