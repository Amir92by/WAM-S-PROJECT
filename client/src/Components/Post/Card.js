import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch} from 'react-redux'
// import { Spinner } from 'bootstrap-react';

import './Card.css'
import { getAllUsers } from "../../JS/actions/users.Actions";
import LikeBtn from './LikeBtn';
import CardComment from './CardComment';
import { dateParser, isEmpty } from "../Utiles/Utiles";




const Card = ({post}) => {

    const [showComments, setShowComments] = useState(false);

    

     const users = useSelector(state => state.usersReducer.users)  // oneallusers
     const curentUser = useSelector(state => state.userReducer.user)

//   const [isLoading, setIsLoading] = useState(true);

     const dispatch = useDispatch()
    
     useEffect(() => {
      dispatch(getAllUsers())

    }, [dispatch])


    return (
        <div>

 {/* {isLoading ?  
                    (<Spinner animation="border" variant="danger" style={{width:'200px'}} />) 
                    :
                    <h1>logique</h1> } */}
     

                {/* [all content card marron] */}
        <div className='card-container' key={post._id}>

                    {/* imgUser & him name */}
                    <div className="img_Name">
                                            {/* userimgHead post  */}
                                        <div className ="card-left">
                                        
                                                <img src={
                                                        users.map(user => {
                                                            if (user._id === post.posterId) return user.picture ;
                                                            else return null;
                                                        })
                                                        .join("") 
                                                    }
                                                    alt="posterPic"
                                                    className="imgUser"
                                                    /> 
                                                    
                                        </div>

                                                {/* user.name */}
                                        <div className ='name-user'> 
                                            {/* user-name post*/}
                                                {users.map(user => {
                                                    if (user._id === post.posterId) return user.name ;
                                                    else return null;
                                                })
                                                }
                                        </div>
                            <div className='dateParser'>
                                 <span>{dateParser(post.createdAt)} </span>
                            </div>
                 </div>  
        
        
                       {/* message post  */}
                    <div className="message">
                         {post.message}
                    </div>
        


                         {/* Picture posted */}
                    <div className="picturePost">
                    {post.picture && (
                        <img src={post.picture} alt="card-icture" className="cardPicture" />
                        )}
                    </div>
                          
                     {/* footer: Like & comment   : have" CardComment" components/ */}
                    <div className='footerCard'>
                     
                           {/* //comments -left*/}
                       <div className='card-comment'>
                           
                             <i className="far fa-comment-dots" 
                             onClick={()=> setShowComments(!showComments)} />
                           

                             <span> {post.comments.length}</span>
                       </div>

                        {/* //LikeComment -right*/}    
                      <div className ="containerLikePost">
                           <LikeBtn post={post} />
                           <span> {post.likers.length}</span>
                      </div>
                    </div>
                    
                    <div className='allComments'>
                        {curentUser && 
                         showComments && <CardComment post={post} /> 
                        }
                           
                     </div>
                    

        </div>




            
    </div>

    )
}
export default Card
