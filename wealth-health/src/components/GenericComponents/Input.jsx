import React, {useState} from "react";
import '../../sass/components/Input.scss'

function Input ({htmlfor,type , labelText, name , id, value, onChange, errorText, validation}) {
    
    const [error, setError] = useState(false);


    function handleChangeInput (e) {
        const regex = new RegExp(validation)
        setError(false)
        if(!regex.test(e.target.value)) {
            setError(true)
        } else {
            onChange(e)
        }
    }

    return (
        <div className="input-wrapper">
            <label htmlFor={htmlfor}>{labelText}</label>
            <input type={type} className={error ? ('error') : null} name={name} id={id} value={value} onChange={(e) => handleChangeInput(e)}/>
            {error ? (<p className="error-message">{errorText}</p>) : null}
        </div>
    )
}
export default Input