import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import useUserProfile from "../../hook/profile/useUserProfile";

const UserProfile = () => {
  const [
    user,
    currentPassword,
    password,
    passwordConfirm,
    onChangeCurrentPassword,
    onChangePassword,
    onChangePasswordConfirm,
    handleSubmit,
  ] = useUserProfile();
  return (
    <div>
      <h1>Profile</h1>
      <Row>
        <Col xs="12">
          <div className="user-profile-info bg-white rounded p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mb-3 text-dark fs-4 fw-bold">
                Name:
                <span className="text-black-50 fs-6">{user?.name}</span>
              </div>
              <button type="submit" className="btn">
                Edit <i className="fa-solid fa-gear"></i>
              </button>
            </div>
            <div className="mb-3 text-dark fs-4 fw-bold">
              Phone Number:
              <span className="text-black-50 fs-6">{user?.phone}</span>
            </div>
            <div className="mb-3 text-dark fs-4 fw-bold">
              Email:
              <span className="text-black-50 fs-6">{user?.email}</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12">
          <h1>Change Password</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="password"
                placeholder="Type an old password"
                value={currentPassword}
                onChange={onChangeCurrentPassword}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="password"
                placeholder="Type a new password"
                value={password}
                onChange={onChangePassword}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="password"
                placeholder="Password Confirm"
                value={passwordConfirm}
                onChange={onChangePasswordConfirm}
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default UserProfile;
