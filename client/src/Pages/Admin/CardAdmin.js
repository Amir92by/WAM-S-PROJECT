import React, { useEffect } from 'react'
import {Card,Button}from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteUser, getAllUsers } from '../../JS/actions/users.Actions'
import{Link}from 'react-router-dom'

import './CardAdmin.css'

// import PosteOneUser from './PosteOneUser'
const CardAdmin = ({user}) => {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getAllUsers())
    }, [dispatch])
    
    return (
        <div className="UserCard">
            <Card className="UserCard">
                <Card.Img className="ImgUserCard" variant="top" src={user.picture} alt={user.name} />
                <Card.Body className="contentCard" >
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Title>{user.email}</Card.Title>


                    <Card.Text>
                    {user.bio}
                    </Card.Text>
                    
                    <div className='ContainerBTN'>
                        <Button variant="danger" onClick={()=>
                            
                            { if (window.confirm("Do you want to delete User?")){

                                dispatch(deleteUser(user._id))}
                            }}
                            
                            >Delete
                            
                            </Button>

                        



                        <Link to= {{pathname:"/adminpostuser", user:{user}}}>
                        <Button variant="danger" >Postes</Button>
                        {/* <PosteOneUser user={user}/> */}
                        </Link>
                    </div>
                    
                </Card.Body>

            </Card>
        </div>
        

        
           

    )
}

export default CardAdmin
