
import React, { useState } from 'react'
import {  useSelector } from 'react-redux';
import UpdateProfil from './UpdateProfil';
import UploadImg from './Uploadimg';


import PostUser from './PostUser';
import './Profile.css'



const Profile = ({inputSearch}) => {
    const user = useSelector ((state) => state.userReducer.user);
  
    
   
    
    const [updateImg, setUpdateimage] = useState(false)
    const handleUpdateImg=()=>{
        setUpdateimage(!updateImg)
    }
    return (
        <div className="container">
        
      <div className="row py-5 px-4">
        <div className="col-md-12 mx-auto">
          {/* Profile widget */}
          <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 cover">
              <div className="media align-items-end profile-head">
              <div className="profile mr-3">
                  
                  <img src={user && user.picture} alt="..." style={{width:'250px'}} className="rounded mb-2 img-thumbnail"
                  onClick={()=>handleUpdateImg()}
                  />
                  
                  
                {/* <a href="/" className="btn btn-outline-dark btn-sm btn-block">Edit profile</a> */}
                {/* <UploadImg/> */}
                </div>
                

                <div className="media-body mb-5 text-white UpdattingProfil">
                    <div className ='NameEmailUser'>
                        <h4 className="mt-0 mb-3">{user  && user.name}</h4>
                        {/* <h6 className="mt-0 mb-3">{user && user.email}</h6> */}
                    </div>
                    <UpdateProfil/>
                  {/* <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2" /></p> */}
                </div>
                

              </div>
            </div>

                {updateImg && <UploadImg/>}

            {/* <div className="bg-light p-4 d-flex justify-content-end text-center">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">{ }</h5><small className="text-muted"> <i className="fas fa-image mr-1" />Photos</small>
                </li>
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">745</h5><small className="text-muted"> <i className="fas fa-user mr-1" />Followers</small>
                </li>
                <li className="list-inline-item">
                  <h5 className="font-weight-bold mb-0 d-block">340</h5><small className="text-muted"> <i className="fas fa-user mr-1" />Following</small>
                </li>
              </ul>
            </div> */}
            <br/>
            
            <div className="px-4 py-5">
              <h5 className="mb-0">About</h5>
              
              <div className="p-4 rounded shadow-sm bg-light">
                <h6> {user && user.bio}</h6>
              
              </div>
            </div>


            <div className="py-4 px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="mb-0">Recent photos</h5>
              </div>
                  <PostUser user={user} inputSearch={inputSearch} />
              <div className="row" >


                 

                {/* <div className="col-lg-6 mb-2 pr-lg-1"><img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm" /></div>
                <div className="col-lg-6 mb-2 pl-lg-1"><img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm" /></div>
                <div className="col-lg-6 pr-lg-1 mb-2"><img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className="img-fluid rounded shadow-sm" /></div>
                <div className="col-lg-6 pl-lg-1"><img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm" /></div> */}
              </div>
            </div>
          </div>
        </div></div>


    </div>





    )
}

export default Profile
