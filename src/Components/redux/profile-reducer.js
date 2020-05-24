const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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


export default profileReducer;
