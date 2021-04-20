import React from 'react'
import './LandPage.css'
import Thread from '../../Components/Thread'
import NewPost from '../../Components/Post/NewPost'
// import Dashboord from '../../Components/Dashboord/Dashboord'



const LandPage = ({inputSearch}) => {



    return (
        <div className='container-profil'>
           

            <div className="headerNewPost">
              <NewPost />
            </div>


            <div className='wrapper-thread'>
                <Thread inputSearch={inputSearch}  />
            </div>
        </div>
    )
}
export default LandPage