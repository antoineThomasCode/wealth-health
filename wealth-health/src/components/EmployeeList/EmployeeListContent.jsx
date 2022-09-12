import React, {useState} from "react";
import "../../sass/components/EmployeeListContent.scss"
import SearchBar from '../EmployeeList/SearchBar.jsx'
import EmployeeTable from "./EmployeeTable";

let numberOfEntries = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10]

function EmployeeListContent () {

    const [numberOfPage, setNumberOfPage] = useState(3);

    function handleClickPagination (entrie) {
        setNumberOfPage(entrie)
    }
    return (
        <div className="employeeListContent">
            <div>
                <div className="input-wrapper">
                    <label htmlFor="entries" id="entries-label">Entries per page</label>
                    <select  name="entries"   id='entries'>
                        <option value="0"></option>
                        {numberOfEntries.map((entrie, index) => {
                            return <option onClick={(e) => handleClickPagination(entrie)} key={index} value={entrie}> {entrie} </option>
                        })}
                    </select>
                </div>
                <SearchBar />
            </div>
            <EmployeeTable pagination={numberOfPage}/>
        </div>
    )
}

export default EmployeeListContent