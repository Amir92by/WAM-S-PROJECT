import axios from "axios";
import { getPosts } from "./actionsPost";
import { getAllUsers } from "./users.Actions";

export const ADMIN_DELETE_POST = "ADMIN_DELETE_POST";
export const FAIL_ADMIN_DELETE_POST = "FAIL_ADMIN_DELETE_POST";
export const ADMIN_DELETE_USER = "ADMIN_DELETE_USER";
export const FAIL_ADMIN_DELETE_USER = "FAIL_ADMIN_DELETE_USER";

export const adminDeletePost=(postId)=>async(dispatch)=>{
    try {
      await axios.delete(`api/admin/posts/${postId}`)
      dispatch({type:ADMIN_DELETE_POST})
      dispatch(getPosts())
    } catch (error) {
      dispatch({ type: FAIL_ADMIN_DELETE_POST, payload: error.response.data });
      
    }
  }

  // // // delete contact
export const adminDeleteUser = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/admin/users/${id}`)
        dispatch({type:ADMIN_DELETE_USER})
        dispatch(getAllUsers())
    } catch (error) {
        dispatch({ type: FAIL_ADMIN_DELETE_USER, payload: error.response.data });
    }
  }