import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../JS/actions/actionsPost";
import CardPosteOneUser from "./CardPosteOneUser";

import "./CardAdmin.css";
import { Link } from "react-router-dom";

const PosteOneUser = (props) => {
  const posts = useSelector((state) => state.postReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      <Link to="/admin">
        {/* <i className="far fa-hand-point-left icon-7x"  goBack/> */}
        <button style={{ widh: "20px" }}> goBack</button>
      </Link>

      <div className="contentPostCard">
            
            {
               posts?
           posts.filter(post=>post.posterId===props.location.user.user._id).map(post=>
                <CardPosteOneUser post={post}/>  )
           :
           null
           }
       </div>
       {/* {console.log(props.location.user.user._id)} */}







      {/* <div className="contentPostCard">
        {posts ? posts.map((post) => <CardPosteOneUser post={post} />) : null}
      </div> */}
    </>



  );
};


export default PosteOneUser;
