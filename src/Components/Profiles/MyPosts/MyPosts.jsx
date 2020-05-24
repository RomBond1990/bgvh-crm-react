import React from "react";
import Post from "./Posts/Post";
import profile from "./MyPosts.module.css";
import {addMessageActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";


const MyPosts = (props) => {
debugger
    let postsList = props.profile.posts.map(post => <Post message={post.message}/>);

    let newPostElement = React.createRef();

    let addMessage = () => {
        let text = newPostElement.current.value;
        props.dispatch(addMessageActionCreator());

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    }

    return (
        <div>

            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.profile.newPostText}/>
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
            <div className={profile.posts}>
                {postsList}
            </div>
        </div>)
}

export default MyPosts;
