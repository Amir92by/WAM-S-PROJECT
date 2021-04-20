import React, { useEffect } from 'react'
import {Card,Button}from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deletePost, getPosts } from '../../JS/actions/actionsPost'


import './CardAdmin.css'

const CardPosteOneUser = ({post}) => {
    const dispatch = useDispatch()

       useEffect(() => {
        dispatch(getPosts());
       }, [dispatch]);
    return (
      
        <div className="UserCard"> 

            <Card className="UserCard">
            <Card.Img  variant="top" src={ post.picture } alt="imagepost"  className="ImagePostAdmin"/>
            <Card.Body className="contentCard" >
                
                <Card.Text>
                {post.message}
                </Card.Text>
               

                <Button variant="info" onClick={()=>
                
                { if (window.confirm("Do you want to delete this post ?")){

                    dispatch(deletePost(post._id))}
                   
                }} 


                
                >Delete
                </Button>
                
            </Card.Body>
            </Card>
        </div>
       
    )
}

export default CardPosteOneUser
