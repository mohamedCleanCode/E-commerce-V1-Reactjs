import React from "react";

const SubTitle = ({ title, btnTitle }) => {
  return (
    <div className="sub-title d-flex justify-content-between align-items-center">
      <p>{title}</p>
      {btnTitle ? <button>{btnTitle}</button> : null}
    </div>
  );
};

export default SubTitle;
