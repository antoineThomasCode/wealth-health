import React from "react";
import {Link} from "react-router-dom"
import "../../sass/components/Header.scss"
import {MdOutlinePersonAddAlt, MdOutlineList} from "react-icons/md"

function Header () {
    return (
        <header>
            <Link to="/" > HRnet</Link>
            <nav>
                <Link to="/"><MdOutlinePersonAddAlt /> Create Employee</Link>
                <Link to="/current-employee"><MdOutlineList /> View Current Employees</Link>
            </nav>
        </header>
    )
}

export default Header