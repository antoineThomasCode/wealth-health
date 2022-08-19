import { createSlice } from "@reduxjs/toolkit"
import employees from "../../dataMocked/employees"

export const employeeSlice = createSlice({
    name: "employees",
    initialState : employees,
    reducers : {
        createEmployee : (state, action) => {
          state.push(action.payload)
        }
    }
})
export const {createEmployeeList} = employeeSlice.actions
export default employeeSlice.reducer