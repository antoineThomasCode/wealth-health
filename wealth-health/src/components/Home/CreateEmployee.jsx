import React from "react";
import Input from '../GenericComponents/Input'
import Form from "../GenericComponents/Form";
import GenericDatePicker from "../GenericComponents/DatePicker";
import SelectInput from "../GenericComponents/SelectInput";
import {states} from '../../dataMocked/states'
import {departments} from '../../dataMocked/departments'

function CreateEmployee () {

    return (
        <div className="createEmployee">
                <Form>
                    <Input htmlfor='firstname' type='text' labelText='First Name' name='firstname' id='firstname' />
                    <Input htmlfor='lastname' type='text' labelText='Last Name' name='lastname' id='lastname' />
                    <GenericDatePicker id="dateOfBirth" className='dateOfBirth' htmlFor="dateOfBirth" label="Date of birth"/>
                    <GenericDatePicker id="startDate" className='startDate' htmlFor="startDate" label="Start date"/>
                    <div className="adressContainer">
                        <h2>Address</h2>
                        <Input htmlfor='street' type='text' labelText='Street' name='street' id='street' />
                        <Input htmlfor='city' type='text' labelText='City' name='city' id='city' />
                        <SelectInput htmlFor="state" labelText="State" optionList={states} subject='state' id="stateSelect"/>
                        <Input htmlfor='zipCode' type='text' labelText='Zip Code' name='zipCode' id='zipCode' />
                    </div>
                    <SelectInput htmlFor="department" labelText="Department" optionList={departments} subject='department' id="departmentSelect"/>
                </Form>
            </div>
    )
}
export default CreateEmployee