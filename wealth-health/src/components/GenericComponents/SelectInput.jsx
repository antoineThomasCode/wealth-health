import React from "react";

function SelectInput ({subject, htmlFor, labelText, optionList, id, onChange}) {

    return (
        <div className="input-wrapper">
            <label htmlFor={htmlFor}>{labelText}</label>
            <select name="state" id={id} onChange={onChange}>
                <option value=""> Please choose your {subject} </option>
                {optionList.map((option, index) => {
                   return <option key={index} value={option.abbreviation}>{option.name}</option>
                })}
            </select>
        </div>
    )
}
export default SelectInput