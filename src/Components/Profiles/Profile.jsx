import React from "react";
import profile from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {updateNewPostText} from "../imitationDB/state";

const Profile = (props) => {

    return (
        <div className={profile.background}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuA2qvPxUf9wk8hJ3sREngyHYECJVuIEc6_Yp73owdiFxWw2ju&usqp=CAU'/>
            {<MyPosts posts={props.profile.posts} newPostText={props.profile.newPostText} addMessage={props.addMessage} updateNewPostText={props.updateNewPostText}/>}

        </div>
    )
}

export default Profile;
