import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoriesCard = ({ src, title, backgroundColor, catID }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="mb-3">
      <div className="category-card">
        <div
          className="category-card-image m-auto"
          style={{
            backgroundColor: backgroundColor ? backgroundColor : "#ddd",
          }}
        >
          <Link to={`/products/category/${catID}`}>
            <img
              src={src}
              alt={title}
              style={{ width: "100px", height: "100px", objectFit: "contain" }}
            />
          </Link>
        </div>
      </div>
      <p
        style={{
          margin: "auto",
          width: "fit-content",
          color: "#444",
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
        {title}
      </p>
    </Col>
  );
};

export default CategoriesCard;
