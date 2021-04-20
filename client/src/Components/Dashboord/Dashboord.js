import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../JS/actions/user'
import './Dashboord.css'
const Dashboord = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.userReducer.isAuth)
    return (
        <div className="sidebar">
        <div className="sidebar-top">
          <i className="logo fab fa-sketch" />
          <span className="brand">WAM'S</span>
        </div>
        <div className="sidebar-center">
          <ul className="list">
             <li className="list-item">
             <Link to="/">
               <i className="list-item-icon fas fa-home" />
                <span className="list-item-text">Home</span>
             </Link>
            </li>
              {/* Profile */}
             <li className="list-item">
              <Link to="/signUp" >
                <i className="list-item-icon fas fa-user-circle" />
                <span className="list-item-text">Profile</span>
              </Link>
            </li>
               <li className="list-item">
                  {isAuth?
                         //  logOut
                        <Link to="/" >
                          <i className="list-item-icon fas fa-sign-out-alt" />
                          <span className="list-item-text"
                          onClick={()=>dispatch(logout() )}
                          >Log_Out</span>
                        </Link>
                      :
                      (<div>
                  {/* signin*/}
                  <li className="list-item">
                    <Link to="/signin">
                    <i className="list-item-icon fas fa-sign-in-alt" />
                      <span className="list-item-text">sign_In</span>
                    </Link>
                  </li>  
                  {/* signup */}
                  <li className="list-item">
                    <Link to="/signup" >
                    <i className="list-item-icon fas fa-user-plus" />
                      <span className="list-item-text">sign_Up</span>
                    </Link>
                  </li>
                  </div>)
          }
                  </li>
              {/* Dashboord Admin */}
            {/* <li className="list-item">
               <hr/>
               <Link to= '/admin'>
                <i className="list-item-icon fas fa-user-lock" />
                <span className="list-item-text">Admin</span>
                 </Link>
            </li> */}
                {/* Admin Tools GetUsers*/}
            {/* <li className="list-item">
              <i className="list-item-icon fas fa-users" />
              <span className="list-item-text">All Users</span>
            </li> */}
               {/* get one user*/}
            {/* <li className="list-item">
              <i className="list-item-icon fas fa-search" />
              <span className="list-item-text">User Info</span>
            </li> */}
            {/* <li className="list-item ">
              <i className="list-item-icon fas fa-user-minus" />
              <span className="list-item-text">Delete User</span>
            </li> */}
            {/* <li className="list-item">
              <i className="list-item-icon far fa-trash-alt" />
              <span className="list-item-text">Delete Post</span>
            </li> */}
            {/* <li className="list-item">
              <i className="list-item-icon fas fa-toolbox" />
              <span className="list-item-text">Edite</span>
            </li> */}
              <br></br>
            {/* <li className="list-item">
              <i className="list-item-icon far fa-question-circle" />
              <span className="list-item-text">CopyRight@2021 by Amir & Wassim</span>
            </li> */}
          </ul>
        </div>
      </div>
    )
}
export default Dashboord