import React from "react";
import { Button, Row, Spinner } from "react-bootstrap";
import AdminProductsManagmentCard from "./AdminProductsManagmentCard";

const AdminProductsManagment = ({ products, loading }) => {
  return (
    <>
      <h1>Products Managment</h1>
      <Row>
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
        ) : products?.length >= 1 ? (
          products.map((product) => {
            return (
              <AdminProductsManagmentCard key={product._id} product={product} />
            );
          })
        ) : (
          <p>There are no products</p>
        )}
      </Row>
    </>
  );
};

export default AdminProductsManagment;
