import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../../sass/components/DatePicker.scss"

function GenericDatePicker ({label, htmlFor, className, onChange}) {

  
  const [date, setDate] = useState(new Date());
  function handleChange (date) {
    setDate(date)
    onChange(date)
  }
  
  return (
    <div className="datePicker-wrapper">
        {label ? (<label htmlFor={htmlFor} className={className}>{label}</label>) : null}
        <DatePicker selected={date ? (date) : null}  onChange={(date) => handleChange(date)} />
    </div>  
    )
}

export default GenericDatePicker