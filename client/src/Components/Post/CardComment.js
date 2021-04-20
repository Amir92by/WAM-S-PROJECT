import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Card.css";

import edit from "../../assets/edit.png";
import delt from "../../assets/delete.png";
import {
  addComment,
  deleteComment,
  getPosts,
} from "../../JS/actions/actionsPost";
import EditDeleteComment from "./EditDeleteComment";

const CardComment = ({ post }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const curentUser = useSelector((state) => state.userReducer.user);
  const users = useSelector((state) => state.usersReducer.users); // oneallusers

  const handleComment = (e) => {
    e.preventDefault();

    if (text) {
      //users ou curentUser
      dispatch(addComment(post._id, curentUser._id, text, curentUser.name))
        .then(() => dispatch(getPosts()))
        .then(() => setText(""));
    }
  };

  useEffect(() => {
    dispatch(getPosts());
  }, [addComment(), deleteComment()]);

  return (
    <div className="WrapperComments">
      {post.comments.map((comment) => {
        return (
          <div
            className={
              comment.commenterId === curentUser._id
                ? //if commentContainer  color =orange
                  "commentClient"
                : "commentContainer"
            }
            key={comment._id}
          >
            <div className="com-NAmeAndPic">
              <img
                className="imgUser"
                src={users
                  .map((user) => {
                    if (user._id === comment.commenterId) return user.picture;
                    else return null;
                  })
                  .join("")}
                alt="Pic"
              />
              {/* commenterPseudo */}
              {/* <div className='commenterName'> */}
              <strong>
                {" "}
                {users.map((user) => {
                  if (user._id === comment.commenterId) return user.name;
                  else return null;
                })}
              </strong>

              {/* </div>    */}

              <div className="EditDeleteImg">
                <p>{comment.text} </p>


                    <div className="BtnEditDelete">

                    {curentUser._id === comment.commenterId ? (
                        <img
                        src={delt}
                        className="BtnPost"
                        onClick={() =>
                           { if (window.confirm("Voulez-vous supprimer ce commentaire ?")){

                                dispatch(deleteComment(post._id, comment._id))
                            }}
                        }   

                        alt="imgDelete"
                        />
                        ) : null}
                    </div>

                        <EditDeleteComment comment={comment} posetId={post._id} />
              </div>
            </div>
           
          </div>
        );
      })}

            {/* add_Comment */}

                 <div className=''>
                      {curentUser._id && (
                          <form action="" className="comment-form" onSubmit={handleComment}>
                             <input
                                type="text"
                                name="text"
                                placeholder="Leave us a comment ..."
                                onChange={(e) => setText(e.target.value)}
                                value={text}
                                />
                            <button type="submit" value="Envoyer">Envoyer</button>
                            </form>
                          )}
                 </div>
      
    </div>
  );
};
export default CardComment;
