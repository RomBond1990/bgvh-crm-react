import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Tasks from "./Components/Tasks/Tasks";
import Projects from "./Components/Projects/Projects";
import Groups from "./Components/Groups/Groups";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/projects' component={Projects}/>
                    <Route path='/tasks' component={Tasks}/>
                    <Route path='/groups' component={Groups}/>
                    <Route path='/profiles' component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
