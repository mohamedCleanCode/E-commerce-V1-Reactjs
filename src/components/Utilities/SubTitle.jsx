import React from "react";
import { Link } from "react-router-dom";

const SubTitle = ({ title, btnTitle, path }) => {
  return (
    <div className="sub-title d-flex justify-content-between align-items-center">
      <p>{title}</p>
      <Link to={path}>{btnTitle ? <button>{btnTitle}</button> : null}</Link>
    </div>
  );
};

export default SubTitle;
