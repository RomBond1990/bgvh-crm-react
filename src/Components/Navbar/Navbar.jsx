import React from "react";
import navbar from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={navbar.nav}>
        <div>
            <NavLink to="/projects">Projects</NavLink>
        </div>
        <div>
            <NavLink to="/tasks">Tasks</NavLink>
        </div>
        <div><NavLink to="/groups">Groups</NavLink>
        </div>
        <div>
            <NavLink to="/employees">Employees</NavLink>
        </div>
        <div>
            <NavLink to="/profiles">Profiles</NavLink>
        </div>
    </nav>

}

export default Navbar;
