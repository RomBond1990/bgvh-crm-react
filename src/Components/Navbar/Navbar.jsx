import React from "react";
import n from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={n.nav}>
        <div className={n.item}>
            <NavLink to="/projects" activeClassName={n.activeLink}>Projects</NavLink>
        </div>
        <div className={n.item}>
            <NavLink to="/tasks" activeClassName={n.activeLink}>Tasks</NavLink>
        </div >
        <div className={n.item}>
            <NavLink to="/groups" activeClassName={n.activeLink}>Groups</NavLink>
        </div>
        <div className={n.item}>
            <NavLink to="/employees" activeClassName={n.activeLink}>Employees</NavLink>
        </div>
        <div className={n.item}>
            <NavLink to="/profiles" activeClassName={n.activeLink}>Profiles</NavLink>
        </div>
    </nav>

}

export default Navbar;
