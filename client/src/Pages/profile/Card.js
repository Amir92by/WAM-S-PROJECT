import React, { useState } from 'react'
import {Modal,Button,Form}from "react-bootstrap"
import { useDispatch} from 'react-redux'


import './Profile.css'
import { deletePost, updatePost } from '../../JS/actions/actionsPost'
import deleteBtn from "../../assets/trash.png";
import updateBtn from "../../assets/rotation.png";

const Card = ({post}) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const [upPost, setUpPost] = useState({ message: post&&post.message});


        const handleUpdate = () => {
                  
                    dispatch(updatePost(post._id,upPost))
                    
        }

 // handlechange
 const handleChange = (e) => {
    setUpPost({ ...upPost, [e.target.name]: e.target.value })
}

    
    return (
    <div className="ContainerPostProfil">

            {/* <Button variant="primary" onClick={handleShow}> update</Button> */}
            <img  src={updateBtn} alt="updateImg" className='UpdateDeletePostCard'
            onClick={handleShow} 
            />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                    <Modal.Body> 
                        <Form.Control placeholder="Enter new name ..."
                            name="message"
                            type="text"
                            value={upPost.message}
                            onChange={handleChange}
                        />
                </Modal.Body>
                
                <Modal.Footer>

                <Button variant="primary" onClick={()=> {handleClose() ; handleUpdate()}}> Valider  </Button>


                </Modal.Footer>
            </Modal>


             <div className="postProfil">
                <h4> {post.message}</h4>
                <img src={ post.picture } alt="poster-pic" className="PostImgProfil"/> 
             </div>


        <img  src={deleteBtn} alt="updateImg" className='UpdateDeletePostCard'
         onClick={()=>{ if (window.confirm("Do you want to delete User?")){

            dispatch(deletePost(post._id))}
            }}
         />


                {/* <Button variant="danger" className="BtnDeleteUpd"
                onClick={()=>dispatch(deletePost(post._id))}>Delete</Button> */}
     </div>
        
 )
}

export default Card
