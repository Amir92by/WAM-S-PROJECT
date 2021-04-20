import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteComment, editComment } from "../../JS/actions/actionsPost";
import editte from "../../assets/edite.png";
import xbutton from "../../assets/x-button.png";

const EditDeleteComment = ({ comment, posetId }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");

  const curentUser = useSelector((state) => state.userReducer.user);
  const users = useSelector((state) => state.usersReducer.users); // oneallusers

  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(editComment(posetId, comment._id, text));
      setText("");
      setEdit(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteComment(posetId, comment._id));
  };

  useEffect(() => {
    const checkAuthor = () => {
      if (curentUser._id === comment.commenterId) {
        setIsAuthor(true);
      }
    };
    checkAuthor();
  }, [curentUser._id, comment.commenterId, editComment(), deleteComment()]);

  return (
    <div className="EditCommentt">
      {isAuthor && edit === false && (
        <span onClick={() => setEdit(!edit)}>
          <img src={editte} alt="imgEdit" className="imgEditCommentPost" />
        </span>
      )}

      {/* //if condition vrai */}
      {isAuthor && edit && (
        <form action="" onSubmit={handleEdit} className="EditCommentForm">
          {/* <button onClick={() => setEdit(!edit)}>  Editer </button> */}
          <img
            src={xbutton}
            alt="xbutton"
            // style={{ width: "40px", marginRight:'90%' }}
            className="xButton"
            onClick={() => setEdit(!edit)}
          />

          <input
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            defaultValue={comment.text}
          />

          <button type="submit" value="Save Modification">
            Save Modification{" "}
          </button>

          {/* DeleteBtn */}
          {/* <div className="btnCmtDelete">
            <span
              onClick={() => {
                if (window.confirm("Voulez-vous supprimer ce commentaire ?")) {
                  handleDelete();
                }
              }}
            >
              <img src={delette} alt="deleteImg" style={{ width: "30px" }} />
            </span>
            <input type="submit" value="Save Modification" />
          </div> */}
        </form>
      )}
    </div>
  );
};

export default EditDeleteComment;
