import React from "react";
import "../sass/App.scss"
import '../sass/pages/HomePage.scss'

import CreateEmployee from "../components/Home/CreateEmployee";

function Home () {
    
    
    return (
        <main className="homepage">
            <h1>Create Employee</h1>
            <CreateEmployee />
        </main>
    )
}

export default Home