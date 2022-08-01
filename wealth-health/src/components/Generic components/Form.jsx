import React from "react";
import "../../sass/components/Form.scss";

function Form ({className, children}) {

    return (
        <form action="" method="post" className={className}>
            {children}
            <input className="submitButton" type="submit" value="Save" />
        </form>

    )
}

export default Form