import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'




import { getPosts } from '../JS/actions/actionsPost'



import Card from './Post/Card'


import "./Thread.css"

const Thread = ({inputSearch}) => {
    const posts = useSelector(state => state.postReducer.posts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())

    }, [dispatch])

    return (
        <div>
            
           <div className="postHomePage">
                {posts
                
                .filter(post=> post && 
                    post.message.toLowerCase().includes(inputSearch.toLowerCase())
                    )       


                .map(post=> 
                   <Card post={post} key={post._id} /> 
                    )}
                   
            </div>
        </div>
    )
}
export default Thread