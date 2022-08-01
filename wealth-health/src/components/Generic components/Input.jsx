import React from "react";
import '../../sass/components/Input.scss'

function Input ({htmlfor,type , labelText, name , id, value}) {

    return (
        <div className="input-wrapper">
            <label htmlFor={htmlfor}>{labelText}</label>
            <input type={type} name={name} id={id} value={value}/>
        </div>
    )
}
export default Input