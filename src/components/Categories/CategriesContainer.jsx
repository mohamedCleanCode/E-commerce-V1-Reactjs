import React from "react";
import { Button, Container, Row, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import SubTitle from "../Utilities/SubTitle";
import CategoriesCard from "./CategoriesCard";

const CategriesContainer = ({ data, loading }) => {
  const colors = ["#FFD3E8", "#F4DBA5", "#55CFDf", "#0034FF", "#FFD3EB"];
  const dispatch = useDispatch();
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
          {data ? (
            data.slice(0, 5).map((cat, i) => {
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
