import React, { useEffect } from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions/categoriesActions";
import SubTitle from "../Utilities/SubTitle";
import CategoriesCard from "./CategoriesCard";

const CategriesContainer = () => {
  const colors = ["#FFD3E8", "#F4DBA5", "#55CFDf", "#0034FF", "#FFD3EB"];
  const { categories, loading } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return (
    <Container>
      <SubTitle title="Categories" />
      {loading ? (
        <div className="text-center">
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
        </div>
      ) : (
        <Row className="mt-3">
          {categories.data ? (
            categories.data.slice(0, 5).map((cat, i) => {
              return (
                <CategoriesCard
                  key={cat._id}
                  src={cat.image}
                  title={cat.name}
                  backgroundColor={
                    colors[Math.floor(Math.random() * colors.length - 1)]
                  }
                />
              );
            })
          ) : (
            <p>There are no categories yet...!</p>
          )}
        </Row>
      )}
    </Container>
  );
};

export default CategriesContainer;
