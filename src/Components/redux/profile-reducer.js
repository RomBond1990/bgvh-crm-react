const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
        posts: [
            {id: 1, message: "Kyky"},
            {id: 2, message: "Have a nice day"},
            {id: 3, message: "Go pvp"}
        ],
        newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        }

        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}


export default profileReducer;
