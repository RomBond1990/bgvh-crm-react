import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import projectReducer from "./project-reducer";
import taskReducer from "./task-reducer";
import groupReducer from "./group-reducer";
import employeeReducer from "./employee-reducer";

let reducers = combineReducers({
    profileReducer,
    projectReducer,
    taskReducer,
    groupReducer,
    employeeReducer
});

let store = createStore(reducers);

export default store;
