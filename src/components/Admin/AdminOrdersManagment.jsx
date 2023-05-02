import React from "react";
import { Row } from "react-bootstrap";
import useViewOrdersOfUser from "../../hook/order/useViewOrdersOfUser";
import AdminOrdersManagmentCard from "./AdminOrdersManagmentCard";

const AdminOrdersManagment = () => {
  const [order] = useViewOrdersOfUser();
  return (
    <>
      <h1>Orders Managment</h1>
      <h2>Result # {order?.orders?.results}</h2>
      <Row className="justify-content-end">
        {order?.orders?.data?.length >= 1 &&
          order.orders.data.map((item) => {
            return <AdminOrdersManagmentCard item={item} />;
          })}
      </Row>
    </>
  );
};

export default AdminOrdersManagment;
