import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import {  getPosts } from '../../JS/actions/actionsPost'
import CardPosteOneUser from './CardPosteOneUser'
import { Link } from 'react-router-dom'
// import Card from './Post/Card'

const AllPosts = ({inputSearch}) => {

    const posts = useSelector(state => state.postReducer.posts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <div>
                <Link to='/admin'>
                {/* <i className="far fa-hand-point-left icon-7x"  goBack/> */}
                <button  style={{widh:'20px'}} > goBack</button>
                </Link>

            <div className="contentPostCard">
                {posts
                .filter(post=> post && 
                    post.message.toLowerCase().includes(inputSearch.toLowerCase())
                    )

                .map(post=> 
                   <CardPosteOneUser post={post} key={post._id} /> 
                    )}
            </div>
            
        </div>
    )
}

export default AllPosts





