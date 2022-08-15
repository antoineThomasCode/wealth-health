import React from "react";
import "../../sass/components/EmployeeListContent.scss"
import SelectInput from "../GenericComponents/SelectInput";
import SearchBar from '../EmployeeList/SearchBar.jsx'
import EmployeeTable from "./EmployeeTable";

let numberOfEntries = [0]

function EmployeeListContent () {

    return (
        <div className="employeeListContent">
            <div>
                <SelectInput  optionList={numberOfEntries} htmlFor='entries' subject='number of entries' id='entries' labelText="Entries per page"/>
                <SearchBar />
            </div>
            <EmployeeTable />

        </div>
    )
}

export default EmployeeListContent