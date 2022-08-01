import React from "react";
import {Link} from "react-router-dom"

function NotFound () {

    return (
        <div className="NotFound">
            <h1>Sorry, This page <br />
            doesn't exist !</h1>
            <Link to="/">return to the homepage</Link>
        </div>
    )
}
export default NotFound