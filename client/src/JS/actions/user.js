import {
    CURRENT_USER,
    FAIL_USER,
    LOAD_USER,
    LOGIN_USER,
    REGISTER_USER,
    LOGOUT_USER,
    VIDE_ERRORS,
    UPLOAD_PICTURE,
    UPLOAD_ERORRS,
   
    
  } from "../actionTypes/user";
  
  import axios from "axios";
  
  export const register = (newUser, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    console.log(history);
    try {
      const result = await axios.post("/api/users/signup", newUser);
  
      dispatch({ type: REGISTER_USER, payload: result.data }); //msg , token , user
      history.push("/profile");
    } catch (error) {
      console.log(error.response.data.errors);
      // error.response.data.errors.map((el) => alert(el.msg));
      dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
  };
  
  export const login = (user, history) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
  
    try {
      const result = await axios.post("/api/users/signin", user);
      dispatch({ type: LOGIN_USER, payload: result.data }); //msg /token , user
      history.push("/Profile");
    } catch (error) {
      // error.response.data.errors.map((el) =>
      //   setTimeout(function () {
      //     alert(el.msg);
      //   }, 3000)
      // );
      dispatch({ type: FAIL_USER, payload: error.response.data.errors });
    }
  };
  
  export const currentUser = () => async (dispatch) => {
    try {
      const options = {
        headers: { Authorization: localStorage.getItem("token") },
      };
      const result = await axios.get("/api/users/current", options);
      dispatch({ type: CURRENT_USER, payload:result.data });
    } catch (error) {
      dispatch({ type: FAIL_USER, payload: error.response.data });
    }
  };
  
  export const logout = () => {
    return {
      type: LOGOUT_USER,
    };
  };
  
  export const videErrors = () => {
    return {
      type: VIDE_ERRORS,
    };
  };


  // upload picture 
  export const uploadPicture = (data, id) => {
    return (dispatch) => {
      return axios
        .post("/api/users/upload", data)
        .then((res) => {
          if (res.data.errors) {
            
            dispatch({ type: UPLOAD_ERORRS, payload: res.data.errors });
          } else {
            
            return axios
              .get(`/api/users/${id}`)
              .then((res) => {
                dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
              });
          }
        })
        .catch((err) => console.log(err));
    };
  };

  export const updateBio=(id,upUser)=> async(dispatch) =>{
    try {
       await axios.put(`/api/users/${id}`,upUser)
      dispatch(currentUser())
      
    } catch (error) {
      dispatch({  payload: error.response.data });

      
    }

  }