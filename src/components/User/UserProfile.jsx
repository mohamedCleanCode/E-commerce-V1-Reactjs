import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const UserProfile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Row>
        <Col xs="12">
          <div className="user-profile-info bg-white rounded p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mb-3 text-dark fs-4 fw-bold">
                Name:
                <span className="text-black-50 fs-6">Mohamed Mostafa</span>
              </div>
              <button type="submit" className="btn">
                Edit <i className="fa-solid fa-gear"></i>
              </button>
            </div>
            <div className="mb-3 text-dark fs-4 fw-bold">
              Phone Number:
              <span className="text-black-50 fs-6">010123456789</span>
            </div>
            <div className="mb-3 text-dark fs-4 fw-bold">
              Email:
              <span className="text-black-50 fs-6">m.m@gmail.com</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <h1>Change Password</h1>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="password"
                placeholder="Type an old password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="password" placeholder="Type a new password" />
            </Form.Group>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default UserProfile;
