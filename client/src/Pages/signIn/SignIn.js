import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Errors from "../../Components/Errors";
import { login, videErrors } from "../../JS/actions/user";
import './SignIn.css'



const SignIn = ({history}) => {
  const [user, setuser] = useState({});

  const dispatch = useDispatch();
  const errors = useSelector((state) => state.userReducer.errors);
  
  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(videErrors ());
    };
  }, [dispatch]);

 
  

    return (
        <div className="content-signin">
              <div className="main-signIn">  	
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="login">
          <form>
            
            <label htmlFor="chk" aria-hidden="true" ></label>
            
            <input type="email" name="email"
            onChange={handleChange}
             placeholder="Email" required />
            <input type="password" name="password"
            onChange={handleChange}
             placeholder="Password" required />
            <button
            type="submit"
            onClick={(e)=>{e.preventDefault();dispatch(login(user,history))}}
            >Login</button>

            
          </form>
          {errors.length > 0 ? errors.map((el) => <Errors error={el} />) : null}
        </div>
      </div>
        
        
        
      
        </div>
    )
    
}

export default SignIn
