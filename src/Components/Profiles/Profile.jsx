import React from "react";
import profile from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
debugger
    return (
        <div className={profile.background}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuA2qvPxUf9wk8hJ3sREngyHYECJVuIEc6_Yp73owdiFxWw2ju&usqp=CAU'/>
            {<MyPosts profile={props.profile} dispatch={props.dispatch}/>}

        </div>
    )
}

export default Profile;
