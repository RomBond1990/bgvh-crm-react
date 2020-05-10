import React from "react";
import Post from "./Posts/Post";
import profile from "./MyPosts.module.css";

const MyPosts = (props) => {
    let postsList = props.posts.map(post => <Post message={post.message}/>);

    let newPostElement = React.createRef();

    let addMessage = () => {
        let text = newPostElement.current.value;
        props.addMessage(text);

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>

            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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
