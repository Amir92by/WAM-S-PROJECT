import React,{useEffect,useState} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { getPosts, likePost, unlikePost } from '../../JS/actions/actionsPost'
import { currentUser } from '../../JS/actions/user'


import './Card.css'


const LikeBtn = ({post}) => {
   

    const [isLiked, setisLiked] = useState(false)

    const user = useSelector(state => state.userReducer.user)
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const dispatch = useDispatch()
    const HandleLike=()=>{
        
        if (isAuth){

            setisLiked(!isLiked)
            isLiked? dispatch(unlikePost(post._id,user._id),getPosts()):dispatch(likePost(post._id,user._id),getPosts())
        }

    }



    useEffect(() => {
        dispatch(currentUser(),getPosts())
        if(isAuth){

              if(post.likers.includes(user._id))
             setisLiked(true)
        } 
    }, [])

    return (
        <div>
             
             <i  
            className={ isLiked ?  "fas fa-heart coeurRed" :"far fa-heart" } 
            onClick={()=>HandleLike()}
             />
    {/* <i class="fas fa-heart"></i> */}
    {/* fas fa-heartbeat */}
 
        </div>
    )
}

export default LikeBtn
