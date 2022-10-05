import React, {useState} from "react";
import Input from '../GenericComponents/Input'
import Form from "../GenericComponents/Form";
import GenericDatePicker from "../GenericComponents/DatePicker";
import SelectInput from "../GenericComponents/SelectInput";
import {states} from '../../dataMocked/states'
import {departments} from '../../dataMocked/departments'
import { useDispatch, useSelector } from "react-redux";
import {createEmployee} from "../../redux/features/employee"
import Modal from "at-npm-modal-package"

function CreateEmployee () {

    //redux
    const dispatch = useDispatch()
    let newIndex = useSelector((state)=> state.employee.length)
    // states
    const [postIsReady, setPostIsReady] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [stateLocation, setStateLocation] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [department, setDepartment] = useState(''); 

    //state for the modal 
    const [isDisplayed, setModalDisplay] = useState(false)



    // handle change functions 

    function handleChangeValue (e, stateToChange) {
        stateToChange(e.target.value)
    }
    function handleChangeDate (date, stateToChange) {
        stateToChange(date.toLocaleDateString("fr"))
    }
 
    // submit 

    function handleSubmit (e) {
        e.preventDefault()
        
        if (firstName !== '' && lastName !== '' && birthDate !== '' && startDate !== '' && street !== '' && city !== '' && zipCode !== '' && department !== '' && stateLocation !== '') {
            const createdEmployee = {
                id : newIndex+=2,
                firstName : firstName,
                lastName : lastName,
                dateOfBirth : birthDate, 
                startDate : startDate,
                street : street,
                city : city,
                zipCode : zipCode,
                state : stateLocation, 
                department : department
            }
            console.log(createdEmployee)
            setModalDisplay(true)
            dispatch(createEmployee(createdEmployee))

            

        } else {
            setPostIsReady(false)
        }
    }


    return (
        <div className="createEmployee" role="main-form">
                <Form onSubmit={handleSubmit} >
                    <Input 
                    dataTestId="firstname"
                    htmlfor='firstname' 
                    onChange={(e) => handleChangeValue(e, setFirstName)}
                    type='text'
                    labelText='First Name' 
                    name='firstname' 
                    id='firstname' 
                    errorText='Please enter a valid firstname'
                    validation="([A-Z][a-zA-Z])"
                    />
                    <Input 
                    dataTestId='lastname'
                    htmlfor='lastname' 
                    onChange={(e) => handleChangeValue(e, setLastName)} 
                    type='text' 
                    labelText='Last Name'
                    name='lastname' 
                    id='lastname' 
                    errorText='Please enter a valid lastname'
                    validation="([A-Z][a-zA-Z])"
                    />
                    <GenericDatePicker
                    id="dateOfBirth"
                    onChange={(date) => handleChangeDate(date, setBirthDate)}
                    className='dateOfBirth'
                    htmlFor="dateOfBirth"
                    label="Date of birth"
                    />
                    <GenericDatePicker 
                    id="startDate"  
                    onChange={(date) => handleChangeDate(date, setStartDate)} 
                    className='startDate' 
                    htmlFor="startDate" 
                    label="Start date"
                    />
                    <div className="adressContainer">
                        <h2>Address</h2>
                        <Input 
                        dataTestId='street'
                        htmlfor='street' 
                        onChange={(e) => handleChangeValue(e, setStreet)} 
                        type='text' 
                        labelText='Street' 
                        name='street' 
                        id='street'
                        validation="([0-9]*[a-zA-Z])"
                        errorText='Please enter a valid street' 
                        />
                        <Input 
                        dataTestId="city"
                        htmlfor='city' 
                        onChange={(e) => handleChangeValue(e, setCity)} 
                        type='text' 
                        labelText='City' 
                        name='city' 
                        id='city' 
                        validation="([a-zA-Z])"
                        errorText='Please enter a valid city' 
                        />
                        <SelectInput 
                        htmlFor="state"  
                        onChange={(e) => handleChangeValue(e, setStateLocation)} 
                        labelText="State" 
                        optionList={states} 
                        subject='state' 
                        id="stateSelect"
                        />
                        <Input 
                        dataTestId='zipcode'
                        htmlfor='zipCode' 
                        onChange={(e) => handleChangeValue(e, setZipCode)} 
                        type='text' 
                        labelText='Zip Code' 
                        name='zipCode' 
                        id='zipCode' 
                        validation='(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)'
                        errorText='Please enter a valid zip Code' 
                        />
                    </div>
                    <SelectInput 
                    htmlFor="department" 
                    onChange={(e) => handleChangeValue(e, setDepartment)} 
                    labelText="Department" 
                    optionList={departments} 
                    subject='department' 
                    id="departmentSelect"
                    />
                    <span className="divider"></span>
                {!postIsReady ? (<p className="error-message">Please complete all information</p>) : null}
                </Form>
                {isDisplayed ? (<Modal setModalState={setModalDisplay} title='New employee added'><p> you can close the modal </p></Modal>) : null}
            </div>
    )
}
export default CreateEmployee