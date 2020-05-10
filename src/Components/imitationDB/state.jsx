let rerenderEntireTree = () => {
}

let state = {
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
}

window.state = state

export const addMessage = () => {

    let newPost = {
        id: 5,
        message: state.profile.newPostText
    };
    state.profile.posts.push(newPost);
    state.profile.newPostText = "";
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profile.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;
