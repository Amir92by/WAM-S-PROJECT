// get getAllUsers | oneUser | delete |Update
import axios from "axios";
import {
  GET_CONTACTS_LOAD,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACT,
  // TOGGLE_TRUE,
  // TOGGLE_FALSE,
} from "../actionTypes/user";
// get getAllUsers
export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });
  try {
    const res = await axios.get("/api/users/")
    dispatch({ type: GET_CONTACTS_SUCCESS,  payload: res.data.users });
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL, payload: error.response.data });
    console.log(error);
  }
};
//  // get oneUser  payload:res.data.getUser
export const getOneUser = (id) => async (dispatch) => {
  try {
      const res = await axios.get(`/api/users/${id}`)
      dispatch({ type: GET_CONTACT, payload: res.data.getUser })
  } catch (error) {
      console.log(error)
  }
}
// // // delete contact
export const deleteUser = (id) => async (dispatch) => {
  try {
      await axios.delete(`/api/users/${id}`)
      dispatch(getAllUsers())
  } catch (error) {
      console.log(error)
  }
}
// edit a contact
export const editUser = (id, newUser) => async (dispatch) => {
  try {
      await axios.put(`/api/users/${id}`, newUser)
      dispatch(getAllUsers())
  } catch (error) {
      console.log(error)
  }
}

// // // add new contact
// // export const addContact = (newContact) => async (dispatch) => {
// //     try {
// //         await axios.post("/api/contacts/", newContact)
// //         dispatch(getContacts())
// //     } catch (error) {
// //         console.log(error)
// //     }
// // }
// // Toggle true
// export const toggleTrue = () => {
//   return {
//     type: TOGGLE_TRUE,
//   };
// };
// // Toggle false
// export const toggleFalse = () => {
//   return {
//     type: TOGGLE_FALSE,
//   };
// };