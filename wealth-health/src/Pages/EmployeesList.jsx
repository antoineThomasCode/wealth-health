import React from "react";
import "../sass/App.scss"
import EmployeeListContent from "../components/EmployeeList/EmployeeListContent";

function EmployeesList () {

    return (
        <main className="employeesList">
            <h1>Current Employees</h1>
            <EmployeeListContent />
        </main>
    )
}
export default EmployeesList