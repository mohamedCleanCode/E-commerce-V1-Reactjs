import React from "react";
import UnopDropdown from "unop-react-dropdown";
import sort from "../../assets/images/sort.png";

const SearchCountResult = ({ title }) => {
  const handler = () => {};
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
            <div>best saller</div>
            <div>best rated</div>
            <div>Price from lowest to highest</div>
            <div>Price from highest to lowest</div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;
