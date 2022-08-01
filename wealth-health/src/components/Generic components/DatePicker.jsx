import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../../sass/components/DatePicker.scss"

function GenericDatePicker ({label, htmlFor, className}) {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="datePicker-wrapper">
        {label ? (<label htmlFor={htmlFor} className={className}>{label}</label>) : null}
        <DatePicker selected={startDate ? (startDate) : null} onChange={(date) => setStartDate(date)} />
    </div>  
    )
}

export default GenericDatePicker