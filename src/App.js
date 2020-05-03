import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Tasks from "./Components/Tasks/Tasks";
import Projects from "./Components/Projects/Projects";
import Groups from "./Components/Groups/Groups";
import Employees from "./Components/Employees/Employees";

const App = (props) => {
debugger;
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/projects' render={() => <Projects projects={props.state.projects}/>}/>
                    <Route path='/tasks' render={() => <Tasks tasks={props.state.tasks}/>}/>
                    <Route path='/groups' render={() => <Groups groups={props.state.groups}/>}/>
                    <Route path='/employees' render={()=> <Employees employees={props.state.employees}/>}/>
                    <Route path='/profiles' component={Profile} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
