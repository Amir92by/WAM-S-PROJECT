import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentUser, updateBio } from "../../JS/actions/user";
import { Modal, Button, Form } from "react-bootstrap";

import update from "../../assets/update.png";
import "./Profile.css";

const UpdateProfil = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = useSelector((state) => state.userReducer.user);
  const [upUser, setUpUser] = useState({
    name: user && user.name,
    bio: user && user.bio,
  });

  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(updateBio(user._id, upUser));
  };

  // handlechange
  const handleChange = (e) => {
    setUpUser({ ...upUser, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatch(currentUser);
  }, [dispatch]);

  return (
    <div>
      <img
        src={update}
        alt="settingsImg"
        className="UpdatingProfil"
        onClick={handleShow}
      />
      {/* <Button variant="primary" onClick={handleShow}> update  </Button> */}

      {/* modale Update Name... */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            placeholder="Enter new name ..."
            name="name"
            type="text"
            value={upUser.name}
            onChange={handleChange}
          />
          <Form.Control
            placeholder="Enter new bio ..."
            name="bio"
            type="text"
            value={upUser.bio}
            onChange={handleChange}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              handleUpdate();
            }}
          >
            Valider
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateProfil;
