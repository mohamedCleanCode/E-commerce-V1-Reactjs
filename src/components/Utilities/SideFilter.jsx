import React from "react";

const SideFilter = () => {
  return (
    <div className="side-filter">
      <ul>
        <h3>Class</h3>
        <li className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label
            style={{ fontSize: "12px" }}
            class="form-check-label"
            htmlFor=""
          >
            All
          </label>
        </li>
        <li className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label
            style={{ fontSize: "12px" }}
            className="form-check-label"
            htmlFor=""
          >
            Appliances
          </label>
        </li>
        <li className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label
            style={{ fontSize: "12px" }}
            className="form-check-label"
            htmlFor=""
          >
            Appliances
          </label>
        </li>
        <li className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label
            style={{ fontSize: "12px" }}
            className="form-check-label"
            htmlFor=""
          >
            Appliances
          </label>
        </li>
        <li className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label
            style={{ fontSize: "12px" }}
            className="form-check-label"
            htmlFor=""
          >
            Appliances
          </label>
        </li>
      </ul>
      <ul>
        <h3>Brand</h3>
        <li className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label
            style={{ fontSize: "12px" }}
            className="form-check-label"
            htmlFor=""
          >
            All
          </label>
        </li>
        <li className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label
            style={{ fontSize: "12px" }}
            className="form-check-label"
            htmlFor=""
          >
            Apple
          </label>
        </li>
        <li className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label
            style={{ fontSize: "12px" }}
            className="form-check-label"
            htmlFor=""
          >
            Sammsung
          </label>
        </li>
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
