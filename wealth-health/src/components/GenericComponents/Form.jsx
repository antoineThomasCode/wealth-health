import React from "react";
import "../../sass/components/Form.scss";
import PropTypes from 'prop-types'

function Form ({className, children, onSubmit}) {

    return (
        <form action="" onSubmit={(e) => onSubmit(e)} method="post" className={className}>
            {children}
            <input className="submitButton"  type="submit" value="Save" />
        </form>

    )
}

Form.propTypes = {
    className : PropTypes.string
}

export default Form