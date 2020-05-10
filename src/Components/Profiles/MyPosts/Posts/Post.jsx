import React from "react";
import logo from "../../../../logo.svg";
import p from './Post.module.css'

const Post = (props) => {


    return (
        <div className={p.item}>
            <img src="https://www.meme-arsenal.com/memes/e4a5d33892cb7aa8b95016599e34f1f3.jpg"/>
            {props.message}
        </div>
    )
}

export default Post;
