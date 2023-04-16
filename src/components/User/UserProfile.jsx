import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
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
    show,
    handleClose,
    handleShow,
    handleEdit,
    name,
    onChangeName,
    email,
    onChangeEmail,
    phone,
    onChangePhone,
  ] = useUserProfile();
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <p>Update user profile</p>
          <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Control
              required
              value={name}
              type="text"
              placeholder="Enter username"
              onChange={onChangeName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              required
              value={email}
              type="email"
              placeholder="Enter email"
              onChange={onChangeEmail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicphone">
            <Form.Control
              required
              value={phone}
              type="number"
              placeholder="Enter phone"
              onChange={onChangePhone}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleEdit}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
      <h1>Profile</h1>
      <Row>
        <Col xs="12">
          <div className="user-profile-info bg-white rounded p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mb-3 text-dark fs-4 fw-bold">
                Name:
                <span className="text-black-50 fs-6">{user?.name}</span>
              </div>
              <button onClick={handleShow} type="submit" className="btn">
                Update <i className="fa-solid fa-gear"></i>
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
