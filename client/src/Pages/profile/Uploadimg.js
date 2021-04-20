import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../JS/actions/user";
import{Button,Modal}from 'react-bootstrap'

const UploadImg = () => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const user = useSelector ((state) => state.userReducer.user);
  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", user.name);
    data.append("userId", user._id);
    data.append("file", file);

    dispatch(uploadPicture(data, user._id));
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    handleShow()
  }, [])


  return (
      <div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>upload picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="" onSubmit={handlePicture} className="upload-pic">
                {/* <label htmlFor="file">Changer d'image</label> */}
                <input
                    type="file"
                    id="file"
                    name="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                
                <input type="submit" value="Envoyer" />
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>

    </div>



  );
};

export default UploadImg;