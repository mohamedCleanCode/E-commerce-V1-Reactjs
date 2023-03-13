import React from "react";
import { Button, Row, Spinner } from "react-bootstrap";
import useHomeCategories from "../../hook/categories/useHomeCategories";
import CategoriesCard from "../Categories/CategoriesCard";
import SubTitle from "../Utilities/SubTitle";

const HomeCategories = () => {
  const [colors, categories, loading] = useHomeCategories();
  return (
    <div className="home-categories container py-4">
      <SubTitle title="Categories" btnTitle="More" path="/categries" />
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
        <Row className="mt-5">
          {categories.data ? (
            categories.data.slice(0, 4).map((cat, i) => {
              return (
                <CategoriesCard
                  key={cat._id}
                  src={cat.image}
                  title={cat.name}
                  backgroundColor={colors[i]}
                />
              );
            })
          ) : (
            <p>There are no categories yet...!</p>
          )}
        </Row>
      )}
    </div>
  );
};

export default HomeCategories;
