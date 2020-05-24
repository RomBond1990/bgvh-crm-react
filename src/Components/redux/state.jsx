import profileReducer from "./profile-reducer";

const addMessage = 'ADD-MESSAGE';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        groups: [
            {id: 1, name: "ГВП1"},
            {id: 2, name: "ГВП2"},
            {id: 3, name: "ГМП3"},
            {id: 3, name: "ГМП4"},
            {id: 3, name: "ГМП5"},
            {id: 3, name: "ГМП6"}
        ],
        employees: [
            {id: 1, name: "Roman"},
            {id: 1, name: "Alexandr"},
            {id: 1, name: "Zoya"},
            {id: 1, name: "Olya"},
            {id: 1, name: "Elena"}
        ],
        tasks: [
            {id: 1, name: "Задача №1"},
            {id: 2, name: "Задача №2"},
            {id: 3, name: "Задача №3"},
            {id: 4, name: "Задача №4"}
        ],
        projects: [
            {id: 1, name: "Project 1"},
            {id: 2, name: "Project 2"},
            {id: 3, name: "Project 3"}
        ],
        profile: {
            posts: [
                {id: 1, message: "Kyky"},
                {id: 2, message: "Have a nice day"},
                {id: 3, message: "Go pvp"}
            ],
            newPostText: ""
        }
    },

    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log("State changed")
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._callSubscriber(this._state);
    }
}

export const addMessageActionCreator = () => {
    return {
        type: addMessage
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: updateNewPostText,
        newText: text
    }
}


export default store;
window.store = store;
