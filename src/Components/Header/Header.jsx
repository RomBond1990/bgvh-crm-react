import React from "react";
import logo from "../../logo.svg";
import header from './Header.module.css'

const Header = () => {
    return <header className={header.header}>
        <img src={logo} className="App-logo" alt="logo" />
    </header>

}

export default Header;
