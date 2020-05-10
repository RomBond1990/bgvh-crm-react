import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import state, {subscribe} from "./Components/imitationDB/state";
import App from './App';
import {addMessage, updateNewPostText} from "./Components/imitationDB/state"
import './index.css';


export let rerenderEntireTree = (state) => {
    ReactDOM.render(<React.StrictMode> <App state={state} addMessage={addMessage} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root'));
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
