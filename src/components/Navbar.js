import React from 'react'
// import Logo from "../assets/BlairNotesLogo.jpg";
import Logo from "../assets/apple-touch-icon.png";
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';


function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={Logo} 
                    height = "75px"/>
                <h6>Blair Notes</h6>
            </div>

            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/notes"> Notes </Link>
                <Link to="/submit"> Submit </Link>
            </div>
        </div >
    )
}

export default Navbar