import React from "react";
import useSideFilter from "../../hook/search/useSideFilter";

const SideFilter = () => {
  const [categories, brands, clickInputCats, clickInputBrands] =
    useSideFilter();
  return (
    <div className="side-filter">
      <ul>
        <h3>Class</h3>
        <li className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="0"
            value="0"
            onChange={clickInputCats}
          />
          <label
            style={{ fontSize: "12px" }}
            className="form-check-label"
            htmlFor="0"
          >
            All
          </label>
        </li>
        {categories?.data?.length >= 1
          ? categories.data.map((cat) => {
              return (
                <li className="form-check" key={cat._id}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={cat._id}
                    value={cat._id}
                    onChange={clickInputCats}
                  />
                  <label
                    style={{ fontSize: "12px" }}
                    className="form-check-label"
                    htmlFor={cat._id}
                  >
                    {cat.name}
                  </label>
                </li>
              );
            })
          : null}
      </ul>
      <ul>
        <h3>Brand</h3>
        <li className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="0"
            value="0"
            onChange={clickInputBrands}
          />
          <label
            style={{ fontSize: "12px" }}
            className="form-check-label"
            htmlFor=""
          >
            All
          </label>
        </li>
        {brands?.length >= 1
          ? brands.map((brand) => {
              return (
                <li className="form-check" key={brand._id}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={brand._id}
                    value={brand._id}
                    onChange={clickInputBrands}
                  />
                  <label
                    style={{ fontSize: "12px" }}
                    className="form-check-label"
                    htmlFor={brand._id}
                  >
                    {brand.name}
                  </label>
                </li>
              );
            })
          : null}
      </ul>
      <ul>
        <h3>Price</h3>
        <li>
          <input
            type="number"
            id=""
            style={{ width: "70px", height: "25px", marginRight: "10px" }}
          />
          <label
            style={{ fontSize: "12px" }}
            className="form-check-label"
            htmlFor=""
          >
            From
          </label>
        </li>
        <li>
          <input
            type="number"
            id=""
            style={{ width: "70px", height: "25px", marginRight: "10px" }}
          />
          <label
            style={{ fontSize: "12px" }}
            className="form-check-label"
            htmlFor=""
          >
            To
          </label>
        </li>
      </ul>
    </div>
  );
};

export default SideFilter;
